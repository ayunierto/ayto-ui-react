import { Card } from "@/components/ui/card";
import DocsCard from "../layout/docs/components/DocsCard";
import DocsDescription from "../layout/docs/components/DocsDescription";
import DocsTemplate from "../layout/docs/components/DocsTemplate";
import DocsWrapper from "../layout/docs/components/DocsWrapper";
import { Flex } from "@/components/ui/flex";

const CardPage = () => {
  return (
    <DocsTemplate docTitle="Card">
      <DocsDescription>
        Cards is a container to wrap other elements and highlighted on the
        screen.
      </DocsDescription>
      <DocsWrapper>
        <DocsCard
          title="Default"
          code={`<Card>This is a Card</Card>`}
          scope={{ Card }}
        />

        <DocsCard
          title="Sizes"
          direction="col"
          code={`
            <Flex align={"center"}>
              <Card size="sm">small</Card>
              <Card size="md">medium</Card>
              <Card size="lg">large</Card>
            </Flex>
          `}
          scope={{ Card, Flex }}
        />

        <DocsCard
          title="Variants"
          direction="col"
          code={`
          <Flex>
            <Card variant="default">default</Card>
            <Card variant="outline">outline</Card>
          </Flex>
          `}
          scope={{ Card, Flex }}
        />

        <DocsCard
          title="With hover"
          direction="col"
          code={`
              <Card hoverable variant="default">
                default
              </Card>
          `}
          scope={{ Card, Flex }}
        ></DocsCard>
      </DocsWrapper>
    </DocsTemplate>
  );
};

export default CardPage;
