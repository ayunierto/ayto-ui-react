import DocsCard from "../layout/docs/components/DocsCard";
import DocsDescription from "../layout/docs/components/DocsDescription";
import DocsTemplate from "../layout/docs/components/DocsTemplate";
import DocsWrapper from "../layout/docs/components/DocsWrapper";
import Alert from "../packages/alert/Alert";
import Icon from "../packages/icon/Icon";

const AlertPage = () => {
  return (
    <DocsTemplate docTitle="Alert">
      <DocsDescription>
        Los alertas permiten a los usuarios mostrar estados de la aplicación.
      </DocsDescription>

      <DocsWrapper>
        <DocsCard title="Default">
          <Alert>
            <Icon icon="notifications" />
            This is an alert
          </Alert>
        </DocsCard>
        <DocsCard title="Colors" direction="col">
          <Alert color="primary">
            <Icon icon="notifications" />
            This is an alert primary
          </Alert>
          <Alert color="success">
            <Icon icon="check_circle" />
            This is an alert success
          </Alert>
          <Alert color="warning">
            <Icon icon="warning" />
            This is an alert warning
          </Alert>
          <Alert color="error">
            <Icon icon="error" />
            This is an alert error
          </Alert>
        </DocsCard>
        <DocsCard title="Sizes" direction="col">
          <Alert color="primary" size="small">
            <Icon icon="notifications" />
            This is an alert primary
          </Alert>
          <Alert color="primary" size="medium">
            <Icon icon="notifications" />
            This is an alert primary
          </Alert>
          <Alert color="primary" size="large">
            <Icon icon="notifications" />
            This is an alert primary
          </Alert>
        </DocsCard>
      </DocsWrapper>
    </DocsTemplate>
  );
};

export default AlertPage;
