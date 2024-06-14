import { Input } from "@/components/ui/input";
import {
  DocsCard,
  DocsDescription,
  DocsTemplate,
  DocsWrapper,
} from "../layout/docs/components";
import { Icon } from "@/components/ui/icon";
import { Flex } from "@/components/ui/flex";

const InputPage = () => {
  return (
    <DocsTemplate docTitle="Button">
      <DocsDescription>Input allow users to enter texts.</DocsDescription>

      <DocsWrapper>
        <DocsCard
          title="Default"
          direction="col"
          scope={{ Input }}
          code={`
          <Input placeholder="I'm placeholder" />
          `}
        />

        <DocsCard
          title="With custom content"
          className="flex-wrap"
          scope={{ Input, Icon, Flex }}
          code={`
          <Flex>
            <div>
              <label htmlFor="searh">Searh</label>
              <Input contentAfter={<Icon hoverable icon="search" size={'sm'} />} id="searh" />
            </div>
            <div>
              <label htmlFor="amount">Amount</label>
              <Input contentBefore="$" contentAfter=".00" id="amount" />
            </div>
            <div>
              <label htmlFor="person">Username</label>
              <Input contentBefore={<Icon icon="person"  />} id="person" />
            </div>    
          </Flex>
          `}
        />

        <DocsCard
          title="Sizes"
          className="items-center flex-col"
          scope={{ Input, Icon, Flex }}
          code={`
          <Flex gap={2}>
            <Input
              size="sm"
              contentAfter={<Icon size="sm" hoverable icon="search" />}
            />
            <Input
              size="md"
              contentBefore="$"
              contentAfter=".00"
            />
            <Input
              size="lg"
              contentBefore={<Icon size="large" icon="person" />}
            />  
          </Flex>
          `}
        />
      </DocsWrapper>
    </DocsTemplate>
  );
};

export default InputPage;
