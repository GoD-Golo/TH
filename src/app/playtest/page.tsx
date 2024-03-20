import ButtonContainer from "@/components/ButtonContainer";
import Link from "next/link";

export default function PlayTest() {
  return (
    <div className="h-max w-2/3 rounded-3xl bg-purple-500/20 px-8 py-10 text-slate-50">
      <h1 className="mb-12 text-center text-4xl uppercase">Cuprins</h1>
      <div className="mb-4">
        <Link
          href="playtest/introducere"
          className="text-xl uppercase text-teal-400"
        >
          Introducere
        </Link>
      </div>
      <ButtonContainer
        variant="text"
        cols={2}
        rows={7}
        padding={0}
        content={[
          {
            to: "playtest/introducere",
            text: "Pășește în universul Inimă de Pumnal",
          },
          {
            to: "playtest/introducere",
            text: "Ce este un Joc de Rol la Masa?",
          },
          {
            to: "playtest/introducere",
            text: "Ce fel de joc de rol este Inimă de Pumnal?",
          },
          { to: "playtest/introducere", text: "Puncte de Reper" },
          { to: "playtest/introducere", text: "Esența Jocului" },
          { to: "playtest/introducere", text: "Cea mai importantă regulă" },
          { to: "playtest/introducere", text: "Bazele Jucătorului" },
          { to: "playtest/introducere", text: "Descriere a Lumii" },
          { to: "playtest/introducere", text: "Magie și Vrăji" },
          { to: "playtest/introducere", text: "Personaliză Jocul" },
          {
            to: "playtest/introducere",
            text: "De ce ai nevoie pentru a juca?",
          },
          { to: "playtest/introducere", text: "O Masă Pentru Toată Lumea" },
          {
            to: "playtest/introducere",
            text: "Ghid pentru Utilizarea Acestei Cărți",
          },
        ]}
      />
      <p className="rounded-2xl bg-red-800 pl-4 text-3xl text-slate-950 underline">
        De coninuat
      </p>
    </div>
  );
}
