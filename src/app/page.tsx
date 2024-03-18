import Aside from "@/components/Aside";
import Hero from "@/components/Hero";
import ButtonContainer from "@/components/ButtonContainer";

export default function Home() {
  return (
    <main className=" grid w-full   overflow-scroll bg-slate-800">
      <div className="border-l-2 border-amber-500">
        <Hero />
        <div className="z-1 flex h-auto flex-col items-center gap-5 border-b-2 border-amber-500 bg-gradient-to-b from-indigo-900 to-slate-900 px-[6.5rem] pb-20 text-slate-50">
          <div className=" pt-20 text-2xl font-bold uppercase">Descriere</div>
          <p className="indent-12">
            În Inimă de Pumnal, un joc de rol tradițional de masă, eroii și
            aventurierii se adună pentru a explora lumi fantastice, pentru a
            înfrunta pericole și pentru a-și testa curajul și priceperea în fața
            unor provocări epice. Pe măsură ce te adâncești în acest univers
            captivant, Inimă de Pumnal îți oferă mai mult decât o simplă
            experiență de joc - îți oferă o lume întreagă de descoperit.
          </p>
          <p className="indent-12">
            În această perioadă de testare, Inimă de Pumnal se alătură echipei
            tale de aventură, iar instrumentele digitale de la Dragos vin în
            ajutorul tău pentru a-ți îmbunătăți experiența de joc. Cu un cititor
            digital, ai acces la o varietate de aventuri și materiale
            suplimentare pentru a-ți alimenta imaginația și creativitatea.
            Compendiul de reguli și lore îți oferă o înțelegere profundă a lumii
            și a mecanicilor de joc, ajutându-te să te integrezi perfect în
            povestea ta.
          </p>
          <p className="indent-12">
            Cu creatorul de personaje, poți da viață unor eroi unici și
            interesanți, adaptându-i perfect stilului și viziunii tale. Foaia de
            personaj interactivă digitală face gestionarea detaliată a
            caracterelor tale ușoară și intuitivă, permițându-ți să te
            concentrezi pe aventura ta și pe interacțiunea cu ceilalți membri ai
            echipei tale.
          </p>
          <p className="indent-12">
            În Inimă de Pumnal, nu este doar despre a juca un joc - este despre
            a trăi o poveste epică, despre a construi legende și despre a crea
            amintiri de neuitat alături de prieteni. Prin intermediul platformei
            Dragos și a perioadei de testare, ai ocazia de a-ți aduce
            contribuția și de a-ți împărtăși feedback-ul, contribuind astfel la
            perfecționarea acestui univers și la crearea unei experiențe de joc
            cu adevărat memorabile pentru toți cei implicați.
          </p>
        </div>
        <div
          className="flex flex-col items-center gap-16 border-b-2 border-amber-500 bg-cover bg-center px-[6.5rem] pt-10 text-slate-50"
          style={{
            backgroundImage: "url('/background/blue-bg.jpg')",
          }}
        >
          <h1 className="text-2xl font-bold">Descoperă Inimă de Pumnal</h1>
          <div className="mb-20">
            <ButtonContainer
              variant="image-thin"
              padding={24}
              cols={2}
              rows={4}
              content={[
                {
                  src: "/banners/classes.png",
                  text: "Clase",
                  to: "",
                },
                {
                  src: "/banners/subclasses.png",
                  text: "Subclase",
                  to: "",
                },
                {
                  src: "/banners/ancestries.png",
                  text: "Origini",
                  to: "",
                },
                {
                  src: "/banners/communities.png",
                  text: "Comunitati",
                  to: "",
                },
                {
                  src: "/banners/domains.png",
                  text: "Domenii",
                  to: "",
                },
                {
                  src: "/banners/equipment-button.png",
                  text: "Echipament",
                  to: "",
                },
                {
                  src: "/banners/adversaries.png",
                  text: "Adversari",
                  to: "",
                },
                {
                  src: "/banners/rules.png",
                  text: "reguli",
                  to: "",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
