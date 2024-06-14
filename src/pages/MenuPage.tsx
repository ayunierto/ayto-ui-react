import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DocsDescription from "../layout/docs/components/DocsDescription";
import DocsTemplate from "../layout/docs/components/DocsTemplate";
import DocsWrapper from "../layout/docs/components/DocsWrapper";
import { Button } from "@/components/ui/button";
import { DocsCard } from "@/layout/docs/components";

const MenuPage = () => {
  return (
    <DocsTemplate docTitle="Menu">
      <DocsDescription>
        The menus allow users to see a list of options with some action
        clicking.
      </DocsDescription>

      <DocsWrapper>
        <DocsCard
          title="Default"
          scope={{
            DropdownMenu,
            DropdownMenuTrigger,
            Button,
            DropdownMenuContent,
            DropdownMenuItem,
          }}
          code={`
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="max-w-24">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Option 1</DropdownMenuItem>
              <DropdownMenuItem>Option 2</DropdownMenuItem>
              <DropdownMenuItem>Option 3</DropdownMenuItem>
              <DropdownMenuItem>Option 4</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          `}
        />
      </DocsWrapper>
    </DocsTemplate>
  );
};

export default MenuPage;
