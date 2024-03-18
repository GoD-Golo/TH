import ButtonContainer from "./ButtonContainer";

export default function Aside() {
  return (
    <aside className="sticky top-0  grid  bg-slate-800">
      <div className="flex w-full flex-col">
        <ButtonContainer
          variant="aside"
          padding={0}
          cols={1}
          rows={4}
          content={[
            { text: "Login", to: "" },
            { text: "Login", to: "" },
            { text: "Login", to: "" },
            { text: "Login", to: "" },
          ]}
        />
        <div className="h-full"></div>
      </div>
    </aside>
  );
}
