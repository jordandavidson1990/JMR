import NavBarSticky from "../components/NavBarSticky";
import FooterEditorial from "../components/FooterEditorial";
import MusicCarousel from "../components/MusicCarousel";
import HeroEditorial from "../components/HeroEditorial";

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
        <MusicCarousel />
      </div>
      <FooterEditorial />
    </div>
  );
}
