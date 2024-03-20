import Image from "next/image";
import ButtonContainer from "./ButtonContainer";

export default function Hero() {
  return (
    <div className="z-0 h-[443.39px]">
      <div
        className="relative h-[450px] w-full border-b-[12px] border-amber-500 bg-cover bg-center"
        style={{
          backgroundImage: "url('/background/hero-bg.png')",
        }}
      >
        <Image
          src={"/logo-mare.webp"}
          alt="logo"
          width={720}
          height={720}
          className="relative left-1/2 top-1/2  z-10 -translate-x-[22rem] -translate-y-[7.25rem]"
        />
        <div className="absolute inset-0 z-0 bg-black opacity-70"></div>
      </div>

      <p className="relative left-1/2 top-1/2 z-10 w-1/2 -translate-x-[14rem] -translate-y-[28.5rem] transform text-2xl font-bold text-slate-50">
        <span className="italic text-teal-500">UNOFFICIAL </span>
        DIGITAL COMPANION
      </p>
      <div className="relative z-10 -translate-y-[5rem] transform">
        <ButtonContainer
          variant="image-lg"
          padding={24}
          cols={3}
          rows={1}
          content={[
            {
              src: "/btn_bg/character-tools.png",
              text: "Game \n Compendium",
              to: "",
            },
            {
              src: "/btn_bg/characters.png",
              text: "Create \n Characters",
              to: "aplicatie/creator-caracter",
            },
            {
              src: "/btn_bg/pt-content.png",
              text: "Continut \n Playtest",
              to: "playtest",
            },
          ]}
        />
      </div>
    </div>
  );
}
