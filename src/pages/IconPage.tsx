import { Flex } from "@/components/ui/flex";
import DocsCard from "../layout/docs/components/DocsCard";
import DocsDescription from "../layout/docs/components/DocsDescription";
import DocsTemplate from "../layout/docs/components/DocsTemplate";
import DocsWrapper from "../layout/docs/components/DocsWrapper";
import { Icon } from "../components/ui/icon/icon";

const IconPage = () => {
  return (
    <DocsTemplate docTitle="Icon">
      <DocsDescription>
        With icons we can visually represent actions.
      </DocsDescription>

      <DocsWrapper>
        <DocsCard
          title="Default"
          code={`<Icon icon="home" />`}
          scope={{ Icon }}
        />

        <DocsCard
          title="Sizes"
          code={`
          <Flex align={"center"}>
            <Icon icon="search" size="sm" />
            <Icon icon="search" size="md" />
            <Icon icon="search" size="lg" />
          </Flex>
          `}
          scope={{ Flex, Icon }}
        />

        <DocsCard
          title="With Hover"
          code={`
          <Flex align={"center"}>
            <Icon icon="search" size="sm" hoverable />
            <Icon icon="search" size="md" hoverable />
            <Icon icon="search" size="lg" hoverable />
          </Flex>
          `}
          scope={{ Flex, Icon }}
        />
      </DocsWrapper>
    </DocsTemplate>
  );
};

export default IconPage;
