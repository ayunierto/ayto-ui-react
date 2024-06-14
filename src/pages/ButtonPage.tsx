import { Button } from "@/components/ui/button";
import {
  DocsCard,
  DocsDescription,
  DocsTemplate,
  DocsWrapper,
} from "../layout/docs/components";
import { Flex } from "@/components/ui/flex";
import { Icon } from "@/components/ui/icon";

const ButtonPage = () => {
  return (
    <DocsTemplate docTitle="Button">
      <DocsDescription>
        The buttons allow users to perform action when clicking.
      </DocsDescription>

      <DocsWrapper>
        <DocsCard
          title="Default"
          scope={{ Button }}
          code={`<Button>deafult</Button>`}
        ></DocsCard>

        <DocsCard
          title="Sizes"
          scope={{ Button, Flex }}
          code={`
            <Flex>
              <Button size="sm">small</Button>
              <Button size="md">medium</Button>
              <Button size="lg">large</Button>
            </Flex>
          `}
        />

        <DocsCard
          title="Variants"
          scope={{ Flex, Button }}
          code={`
            <Flex>
              <Button variant="default">default</Button>
              <Button variant="primary">primary</Button>
              <Button variant="destructive">destructive</Button>
              <Button variant="ghost">ghost</Button>
            </Flex>
          `}
        />

        <DocsCard
          title="With Icon"
          scope={{ Flex, Button, Icon }}
          code={`
            <Flex>
              <Button size="sm"><Icon icon="home" />small</Button>
              <Button><Icon icon="home" />medium</Button>
              <Button size="lg">
              <Icon icon="home" />
              large
            </Button>
          </Flex>
          `}
        />

        <DocsCard
          title="Only Icon"
          scope={{ Button, Icon }}
          code={`
            <Button size="icon" >
              <Icon icon="home" size="md" />
            </Button>
          `}
        />
      </DocsWrapper>
    </DocsTemplate>
  );
};

export default ButtonPage;
