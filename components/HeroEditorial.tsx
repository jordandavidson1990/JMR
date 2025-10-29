import Image from "next/image";

type HeroEditorialProps = {
  heading: string;
  subheading?: string;
  ctaText: string;
  ctaLink: string;
  imgSrc: string;
};

export const HeroEditorial = ({
  heading,
  subheading,
  ctaText,
  ctaLink,
  imgSrc,
}: HeroEditorialProps) => {
  return (
    <section className="relative bg-black text-white h-[60vh] flex items-center justify-center overflow-hidden">
      <Image
        src={imgSrc}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        alt=""
        width={800}
        height={600}
      />
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          {heading}
        </h1>
        {subheading && (
          <p className="text-xl md:text-2xl text-gray-200 mb-8">{subheading}</p>
        )}
        <a
          href={ctaLink}
          className="inline-block bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-bold text-lg transition"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};
