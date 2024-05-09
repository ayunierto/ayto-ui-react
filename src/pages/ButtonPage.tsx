import DocsCard from "../layout/docs/components/DocsCard";
import DocsDescription from "../layout/docs/components/DocsDescription";
import DocsTemplate from "../layout/docs/components/DocsTemplate";
import DocsWrapper from "../layout/docs/components/DocsWrapper";
import Button from "../packages/button/Button";

const ButtonPage = () => {
  return (
    <DocsTemplate docTitle="Button">
      <DocsDescription>
        Los botones permiten a los usuarios realizar acciones al hacer click.
      </DocsDescription>

      <DocsWrapper>
        <DocsCard title="Default">
          <Button variant="solid">deafult</Button>
        </DocsCard>
        <DocsCard title="Colors">
          <Button color="default" variant="solid">
            default
          </Button>
          <Button color="primary" variant="solid">
            primary
          </Button>
          <Button color="success" variant="solid">
            success
          </Button>
        </DocsCard>
        <DocsCard title="Sizes" className="items-center">
          <Button size="small" color="default" variant="solid">
            small
          </Button>
          <Button size="medium" color="default" variant="solid">
            medium
          </Button>
          <Button size="large" color="default" variant="solid">
            large
          </Button>
        </DocsCard>
        <DocsCard title="Variants">
          <Button color="primary" variant="flat">
            flat
          </Button>
          <Button color="primary" variant="solid">
            solid
          </Button>
          <Button color="primary" variant="bordered">
            bordered
          </Button>
        </DocsCard>
      </DocsWrapper>
    </DocsTemplate>
  );
};

export default ButtonPage;
