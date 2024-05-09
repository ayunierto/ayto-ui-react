import DocsCard from "../layout/docs/components/DocsCard";
import DocsDescription from "../layout/docs/components/DocsDescription";
import DocsTemplate from "../layout/docs/components/DocsTemplate";
import DocsWrapper from "../layout/docs/components/DocsWrapper";
import Icon from "../packages/icon/Icon";

const IconPage = () => {
  return (
    <DocsTemplate docTitle="Icon">
      <DocsDescription>
        Con los iconos podemos representar visualmente acciones.
      </DocsDescription>

      <DocsWrapper>
        <DocsCard title="Default">
          <Icon icon="home" />
        </DocsCard>
        <DocsCard title="Sizes">
          <Icon icon="search" size="small" />
          <Icon icon="search" size="medium" />
          <Icon icon="search" size="large" />
        </DocsCard>
        <DocsCard title="With Hover">
          <Icon icon="search" size="small" hoverable />
          <Icon icon="search" size="medium" hoverable />
          <Icon icon="search" size="large" hoverable />
        </DocsCard>
      </DocsWrapper>
    </DocsTemplate>
  );
};

export default IconPage;
