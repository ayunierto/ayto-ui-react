import { Card } from "../../../packages";

type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title: string;
  direction?: "col" | "row";
};

export const DocsCard = ({
  children,
  className = "",
  style,
  title,
  direction = "row",
}: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl">{title}</h2>
        <Card
          variant="bordered"
          size="large"
          className={`flex gap-2 fle flex-${direction} ${className}`}
          style={style}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export default DocsCard;
