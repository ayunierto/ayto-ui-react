import DocsCard from "../layout/docs/components/DocsCard";
import DocsDescription from "../layout/docs/components/DocsDescription";
import DocsTemplate from "../layout/docs/components/DocsTemplate";
import DocsWrapper from "../layout/docs/components/DocsWrapper";
import Card from "../packages/card/Card";

const CardPage = () => {
  return (
    <DocsTemplate docTitle="Card">
      <DocsDescription>
        Las tarjetas es un contenedor para envolver otros elementos
        resaltandolos en la pantalla.
      </DocsDescription>
      <DocsWrapper>
        <DocsCard title="Default">
          <Card>This is a Card</Card>
        </DocsCard>

        <DocsCard title="Sizes" direction="col">
          <Card size="small">small</Card>
          <Card size="medium">medium</Card>
          <Card size="large">large</Card>
        </DocsCard>

        <DocsCard title="Variants" direction="col">
          <Card variant="flat">flat</Card>
          <Card variant="solid">solid</Card>
          <Card variant="bordered">bordered</Card>
        </DocsCard>

        <DocsCard title="With hover" direction="col">
          <Card hoverable variant="flat">
            flat
          </Card>
          <Card hoverable variant="solid">
            solid
          </Card>
          <Card hoverable variant="bordered">
            bordered
          </Card>
        </DocsCard>

        <DocsCard title="Shadow" direction="col">
          <Card shadow>bordered</Card>
        </DocsCard>
      </DocsWrapper>
    </DocsTemplate>
  );
};

export default CardPage;
