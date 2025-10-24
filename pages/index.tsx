import NavBarSticky from "../components/NavBarSticky";
import HeroEditorial from "../components/HeroEditorial";
import MusicCarousel from "../components/MusicCarousel";
import FooterEditorial from "../components/FooterEditorial";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBarSticky />
      <HeroEditorial
        heading="James Michael Rodgers"
        subheading="The latest tracks, exclusive demos, and music store."
        ctaText="Shop Music"
        ctaLink="/store"
        imgSrc="/images/james-portrait.jpeg"
      />
      <MusicCarousel />
      <FooterEditorial />
    </div>
  );
}
