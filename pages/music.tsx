import NavBarSticky from "../components/NavBarSticky";
import FooterEditorial from "../components/FooterEditorial";
import MusicCarousel from "../components/MusicCarousel";

export default function Music() {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBarSticky />
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Demo Tracks</h1>
        <MusicCarousel />
      </div>
      <FooterEditorial />
    </div>
  );
}
