import ButtonContainer from "@/components/ButtonContainer";
import Link from "next/link";

export default function PlayTest() {
  return (
    <div className="h-max w-2/3 rounded-3xl bg-purple-500/20 px-8 py-10 text-slate-50">
      <h1 className="mb-12 text-center text-4xl">Cuprins</h1>
      <div className="mb-4">
        <Link href="" className="text-xl text-teal-400">
          Introducere
        </Link>
      </div>
      <ButtonContainer
        variant="text"
        cols={2}
        rows={7}
        padding={0}
        content={[
          { to: "", text: "Pășește în universul Inimă de Pumnal" },
          { to: "", text: "Ce este un Joc de Rol la Masa?" },
          { to: "", text: "Ce fel de joc de rol este Inimă de Pumnal?" },
          { to: "", text: "Puncte de Reper" },
          { to: "", text: "Esența Jocului" },
          { to: "", text: "Cea mai importantă regulă" },
          { to: "", text: "Bazele Jucătorului" },
          { to: "", text: "Descriere a Lumii" },
          { to: "", text: "Magie și Vrăji" },
          { to: "", text: "Personaliză Jocul" },
          { to: "", text: "De ce ai nevoie pentru a juca?" },
          { to: "", text: "O Masă Pentru Toată Lumea" },
          { to: "", text: "Ghid pentru Utilizarea Acestei Cărți" },
        ]}
      />
    </div>
  );
}
