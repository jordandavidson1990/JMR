import { useEffect, useState } from "react";
import { TourDate } from "../types";
import { tourDates } from "../data";

const FALLBACK_TOUR_DATES = tourDates;
const CACHE_KEY = "airtableTourDatesCache";
const CACHE_EXPIRY_MS = 3600000;
const AIRTABLE_PAT = process.env.NEXT_PUBLIC_AIRTABLE_PAT;
const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME;

export const useTour = () => {
  const [tourDates, setTourDates] = useState<TourDate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const saveToCache = (data: TourDate[]) => {
    const cacheData = {
      timestamp: Date.now(),
      data: data,
    };
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    } catch (e) {
      console.error("Could not save to localStorage:", e);
    }
  };

  const fetchTourDates = async (isBackgroundFetch = false) => {
    if (!isBackgroundFetch) {
      setIsLoading(true);
      setError(null);
    }

    const apiUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;

    const maxRetries = 3;
    let attempt = 0;

    while (attempt < maxRetries) {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${AIRTABLE_PAT}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(
            `Airtable API error: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();

        const liveDates: TourDate[] = data.records
          .map((record: any) => ({
            date: record.fields.date,
            event: record.fields.event,
            location: record.fields.location,
            link: record.fields.link,
          }))
          .filter((gig: TourDate) => gig.date && gig.event);

        if (liveDates.length > 0) {
          setTourDates(liveDates);
          saveToCache(liveDates);
        } else {
          setError("API connected, but no dates were found in the table.");
        }

        setIsLoading(false);
        return; // Success, exit the loop
      } catch (err: any) {
        console.error(`Attempt ${attempt + 1} failed:`, err.message);
        attempt++;
        if (attempt < maxRetries) {
          const delay = Math.pow(2, attempt) * 1000;
          await new Promise((resolve) => setTimeout(resolve, delay));
        } else {
          if (tourDates.length === 0) {
            setTourDates(FALLBACK_TOUR_DATES);
          }
          setError(
            `Could not load fresh tour dates. ${
              tourDates.length > 0
                ? "Using cached data."
                : "Showing fallback data."
            }`
          );
          setIsLoading(false);
        }
      }
    }
  };

  useEffect(() => {
    if (AIRTABLE_PAT.includes("YOUR") || AIRTABLE_BASE_ID.includes("YOUR")) {
      setTourDates(FALLBACK_TOUR_DATES);
      setError(
        "Please update AIRTABLE_PAT and AIRTABLE_BASE_ID in the constants file."
      );
      setIsLoading(false);
      return;
    }

    let cacheHit = false;

    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { timestamp, data }: { timestamp: number; data: TourDate[] } =
          JSON.parse(cached);
        const isExpired = Date.now() - timestamp > CACHE_EXPIRY_MS;

        if (data.length > 0) {
          setTourDates(data);
          setIsLoading(false);
          cacheHit = true;

          if (isExpired) {
            console.log("Cache expired. Fetching fresh data in background.");
          } else {
            return;
          }
        }
      }
    } catch (e) {
      console.error("Error reading/parsing cache:", e);
    }

    fetchTourDates(cacheHit);
  }, []);

  return { tourDates, isLoading, error };
};
