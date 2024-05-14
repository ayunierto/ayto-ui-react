import {
  DocsCard,
  DocsDescription,
  DocsTemplate,
  DocsWrapper,
} from "../layout/docs/components";
import { Icon, Input } from "../packages";

const InputPage = () => {
  return (
    <DocsTemplate docTitle="Button">
      <DocsDescription>Input allow users to enter texts.</DocsDescription>

      <DocsWrapper>
        <DocsCard title="Default" direction="col">
          <Input placeholder="I'm placeholder" />
        </DocsCard>

        <DocsCard title="With custom content" className="flex-wrap">
          <div>
            <label htmlFor="searh">Searh</label>
            <Input contentAfter={<Icon hoverable icon="search" />} id="searh" />
          </div>
          <div>
            <label htmlFor="amount">Amount</label>
            <Input contentBefore="$" contentAfter=".00" id="amount" />
          </div>
          <div>
            <label htmlFor="person">Amount</label>
            <Input contentBefore={<Icon icon="person" />} id="person" />
          </div>
        </DocsCard>

        <DocsCard title="Sizes" className="items-center flex-col">
          <Input
            size="small"
            contentAfter={<Icon size="small" hoverable icon="search" />}
            id="searh"
          />
          <Input
            size="medium"
            contentBefore="$"
            contentAfter=".00"
            id="amount"
          />
          <Input
            size="large"
            contentBefore={<Icon size="large" icon="person" />}
            id="person"
          />
        </DocsCard>
      </DocsWrapper>
    </DocsTemplate>
  );
};

export default InputPage;
