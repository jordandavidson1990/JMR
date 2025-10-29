import {
  FooterEditorial,
  HeroEditorial,
  MusicCarousel,
  NavBarSticky,
} from "../components";
import musicData from "../data/music.json";

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
      <MusicCarousel tracks={musicData.tracks} />
      <FooterEditorial />
    </div>
  );
}
