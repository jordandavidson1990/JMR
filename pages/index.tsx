import {
  FooterEditorial,
  HeroEditorial,
  MusicCarousel,
  NavBarSticky,
} from "../components";
import musicData from "../data/music.json";

const Home = () => (
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

export default Home;
