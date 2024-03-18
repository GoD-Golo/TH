import Button from "./Button";

interface ButtonContent {
  src?: string;
  text: string;
  to: string;
}

interface ButtonContainerProps {
  variant: string;
  padding?: number;
  cols?: number;
  rows?: number;
  content?: ButtonContent[];
}

const colClasses: { [key: number]: string } = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  // add more as needed
};

const rowClasses: { [key: number]: string } = {
  1: "grid-rows-1",
  2: "grid-rows-2",
  3: "grid-rows-3",
  4: "grid-rows-4",
  5: "grid-rows-5",
  6: "grid-rows-6",
  7: "grid-rows-7",

  // add more as needed
};

const paddingClasses: { [key: number]: string } = {
  0: "px-0",
  6: "px-6",
  12: "px-12",
  24: "px-24",
  48: "px-48",
  // add more as needed
};

export default function ButtonContainer({
  variant = "default",
  padding = 24,
  content = [],
  cols = 0,
  rows = 0,
}: ButtonContainerProps) {
  return (
    <div
      className={`grid h-auto w-full ${colClasses[cols]} ${rowClasses[rows]} items-center justify-between ${paddingClasses[padding]} `}
    >
      {content.map((item: ButtonContent, i) => (
        <Button key={i} to={item.to} variant={variant} src={item.src}>
          {item.text}
        </Button>
      ))}
    </div>
  );
}
