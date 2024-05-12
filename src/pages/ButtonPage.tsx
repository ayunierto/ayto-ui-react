import {
  DocsCard,
  DocsDescription,
  DocsTemplate,
  DocsWrapper,
} from "../layout/docs/components";
import { Button, Icon } from "../packages";

const ButtonPage = () => {
  return (
    <DocsTemplate docTitle="Button">
      <DocsDescription>
        Los botones permiten a los usuarios realizar acciones al hacer click.
      </DocsDescription>

      <DocsWrapper>
        <DocsCard title="Default">
          <Button variant="solid">deafult</Button>
          <a href="#" className="button default medium">
            Link button
          </a>
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
        <DocsCard title="With Icon" className="items-center">
          <Button size="small" color="default" variant="solid">
            <Icon icon="home" size="small" />
            small
          </Button>
          <Button size="medium" color="default" variant="solid">
            <Icon icon="home" size="medium" />
            medium
          </Button>
          <Button size="large" color="default" variant="solid">
            <Icon icon="home" size="large" />
            large
          </Button>
        </DocsCard>
        <DocsCard title="Only Icon" className="items-center">
          <Button size="small" color="default" variant="solid">
            <Icon icon="home" size="small" />
          </Button>
          <Button size="medium" color="default" variant="solid">
            <Icon icon="home" />
          </Button>
          <Button size="large" color="default" variant="solid">
            <Icon icon="home" size="large" />
          </Button>
        </DocsCard>
        <DocsCard title="Active" className="flex-wrap">
          <Button color="default" variant="solid" className="active">
            default
          </Button>
          <a href="#" className="active">
            <Button color="default" variant="solid">
              <Icon icon="home" /> with icon
            </Button>
          </a>
          <a href="#" className="button default medium active">
            Link button active
          </a>
          <a href="#" className="button default medium active">
            <Icon icon="settings" /> Link button active and icon
          </a>
        </DocsCard>
      </DocsWrapper>
    </DocsTemplate>
  );
};

export default ButtonPage;
