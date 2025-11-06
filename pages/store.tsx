import { FooterEditorial, NavBarSticky, StoreItem } from "../components";
import music from "../data/storeMusic.json";
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
          width={800}
          height={600}
          priority={true}
        />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h1
            className="text-6xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-300"
            style={{ lineHeight: "normal" }}
          >
            Store
          </h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory hide-scrollbar">
          {music.tracks.map((track, id) => (
            <StoreItem key={id} {...track} />
          ))}
        </div>
      </div>
      <FooterEditorial />
    </div>
  );
}
