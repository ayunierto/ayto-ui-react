import { Card } from "@/components/ui/card";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { themes } from "prism-react-renderer";
import { useTheme } from "@/components/theme-provider";

type Props = {
  children?: string;
  className?: string;
  style?: React.CSSProperties;
  title: string;
  direction?: "col" | "row";
  code: string;
  scope: Record<string, unknown> | undefined;
};

export const DocsCard = ({
  children = "",
  className = "",
  style,
  title,
  code,
  scope,
}: Props) => {
  function formatJSX(jsxString: string): string {
    // Eliminar espacios en blanco innecesarios y separar las líneas
    const lines: string[] = jsxString
      .trim()
      .split("\n")
      .map((line) => line.trim());

    // Inicializar el nivel de tabulación
    const formattedLines: string[] = [];
    let indentLevel: number = 0;

    // Expresión regular para detectar etiquetas de apertura y cierre
    // eslint-disable-next-line no-useless-escape
    const openTagRegex: RegExp = /^<[^\/][^>]*[^\/]>$/;
    const closeTagRegex: RegExp = /^<\/[^>]+>$/;
    const selfClosingTagRegex: RegExp = /^<[^>]+\/>$/;

    lines.forEach((line) => {
      // Ajustar la tabulación antes de agregar la línea
      if (closeTagRegex.test(line) && indentLevel > 0) {
        indentLevel--;
      }

      // Aplicar tabulación de acuerdo al nivel actual
      const indentedLine: string = "  ".repeat(indentLevel) + line;
      formattedLines.push(indentedLine);

      // Ajustar la tabulación después de agregar la línea
      if (openTagRegex.test(line) && !selfClosingTagRegex.test(line)) {
        indentLevel++;
      }
    });

    // Unir las líneas formateadas
    return formattedLines.join("\n");
  }

  const { theme: usedTheme } = useTheme();

  const theme = usedTheme == "dark" ? themes.oneDark : themes.oneLight;

  return (
    <div>
      <div className="flex flex-col gap-2 ">
        <h2 className="text-xl">{title}</h2>
        <LiveProvider code={formatJSX(code)} scope={scope} theme={theme}>
          <Card
            variant="outline"
            size="sm"
            className={`flex gap-2 ${className}`}
            style={style}
          >
            {children}
            <LivePreview />
          </Card>
          <LiveError className="text-red-700 bg-[#ff2a2a] py-1 px-3 rounded-md" />
          <LiveEditor className="font-mono" />
        </LiveProvider>
      </div>
    </div>
  );
};

export default DocsCard;
