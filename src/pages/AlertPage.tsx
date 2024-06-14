import { Flex } from "@/components/ui/flex";
import DocsCard from "../layout/docs/components/DocsCard";
import DocsDescription from "../layout/docs/components/DocsDescription";
import DocsTemplate from "../layout/docs/components/DocsTemplate";
import DocsWrapper from "../layout/docs/components/DocsWrapper";
import { Alert } from "../components/ui/alert";
import { Icon } from "../components/ui/icon/icon";

const AlertPage = () => {
  return (
    <DocsTemplate docTitle="Alert">
      <DocsDescription>
        Alerts allow users to display application statuses.
      </DocsDescription>

      <DocsWrapper>
        <DocsCard
          title="Default"
          code={`
            <Alert>
              <Icon icon="notifications" />
                This is an alert
            </Alert>
          `}
          scope={{ Alert, Icon }}
        />
        <DocsCard
          title="Variants"
          scope={{ Alert, Icon, Flex }}
          code={`
            <Flex>
              <Alert variant="primary">
                <Icon icon="notifications" />
                This is an alert primary
              </Alert>
              <Alert variant="success">
                <Icon icon="check_circle" />
                This is an alert success
              </Alert>
              <Alert variant="warning">
                <Icon icon="warning" />
                This is an alert warning
              </Alert>
              <Alert variant="error">
                <Icon icon="error" />
                This is an alert error
              </Alert>
            </Flex>
          `}
        />

        <DocsCard
          title="Sizes"
          scope={{ Alert, Icon, Flex }}
          code={`
          <Flex>
            <Alert variant="success" size="sm">
              <Icon icon="notifications" />
              This is an alert success
            </Alert>
            <Alert variant="warning" size="md">
              <Icon icon="notifications" />
              This is an alert warning
            </Alert>
            <Alert variant="error" size="lg">
              <Icon icon="notifications" />
              This is an alert error
            </Alert>
          </Flex>
          `}
        />
      </DocsWrapper>
    </DocsTemplate>
  );
};

export default AlertPage;
