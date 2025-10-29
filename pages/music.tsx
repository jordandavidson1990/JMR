import {
  FooterEditorial,
  HeroEditorial,
  MusicCarousel,
  NavBarSticky,
} from "../components";
import musicData from "../data/music.json";
export default function Music() {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBarSticky />
      <HeroEditorial
        heading="Music"
        ctaLink="https://jamesmichaelrodgers.bandcamp.com/album/james-michael-rodgers"
        ctaText="Album link"
        imgSrc="/images/album-7.jpg"
      />

      <div className="max-w-6xl mx-auto py-12 px-4">
        <MusicCarousel tracks={musicData.tracks} />
      </div>
      <FooterEditorial />
    </div>
  );
}
