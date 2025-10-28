import NavBarSticky from "../components/NavBarSticky";
import FooterEditorial from "../components/FooterEditorial";
import StoreItem from "../components/StoreItem";
import music from "../data/music.json";
import Image from "next/image";

export default function Store() {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBarSticky />
      <section className="relative bg-black text-white h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/album-6.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt=""
          width={0}
          height={0}
        />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h1
            className="text-6xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-300"
            style={{ lineHeight: "normal" }}
          >
            Buy music
          </h1>
        </div>
      </section>
      <div className="max-w-6xl mx-auto py-12 px-4">
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
