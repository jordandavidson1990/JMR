import NavBarSticky from "../components/NavBarSticky";
import FooterEditorial from "../components/FooterEditorial";
import StoreItem from "../components/StoreItem";
import music from "../data/music.json";

export default function Store() {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBarSticky />
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Buy Music</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {music.tracks.map((track, idx) => (
            <StoreItem key={idx} {...track} />
          ))}
        </div>
      </div>
      <FooterEditorial />
    </div>
  );
}
