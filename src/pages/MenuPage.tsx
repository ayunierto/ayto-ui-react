import DocsCard from "../layout/docs/components/DocsCard";
import DocsDescription from "../layout/docs/components/DocsDescription";
import DocsTemplate from "../layout/docs/components/DocsTemplate";
import DocsWrapper from "../layout/docs/components/DocsWrapper";
import Button from "../packages/button/Button";
import Icon from "../packages/icon/Icon";
import Menu from "../packages/menu/Menu";
import MenuList from "../packages/menu/MenuList";
import MenuTrigger from "../packages/menu/MenuTrigger";

const MenuPage = () => {
  return (
    <DocsTemplate docTitle="Menu">
      <DocsDescription>
        The menus allow users to see a list of options with some action
        clicking.
      </DocsDescription>

      <DocsWrapper>
        <DocsCard title="Default">
          <Menu>
            <MenuTrigger />
            <MenuList>
              <Button variant="flat" block contentLeft>
                Option 1
              </Button>
              <Button variant="flat" block contentLeft>
                Option 2
              </Button>
              <Button variant="flat" block contentLeft>
                Option 3
              </Button>
            </MenuList>
          </Menu>
        </DocsCard>
        <DocsCard title="Custom trigger">
          <Menu>
            <MenuTrigger>
              <Button
                variant="bordered"
                block
                style={{ justifyContent: "space-between" }}
              >
                <span className="flex gap-2">
                  <Icon icon="air_purifier" />
                  Custom trigger
                </span>
                <Icon icon="keyboard_arrow_down" />
              </Button>
            </MenuTrigger>
            <MenuList>
              <Button variant="flat" block contentLeft>
                Option 1
              </Button>
              <Button variant="flat" block contentLeft>
                Option 2
              </Button>
              <Button variant="flat" block contentLeft>
                Option 3
              </Button>
            </MenuList>
          </Menu>
        </DocsCard>

        <DocsCard title="Floating menu">
          <Menu>
            <MenuTrigger>
              <Button
                variant="bordered"
                block
                style={{ justifyContent: "space-between" }}
              >
                <span className="flex gap-2">
                  <Icon icon="air_purifier" />
                  Menu Left
                </span>
                <Icon icon="keyboard_arrow_down" />
              </Button>
            </MenuTrigger>
            <MenuList floating>
              <Button variant="flat" block contentLeft>
                Option 1
              </Button>
              <Button variant="flat" block contentLeft>
                Option 2
              </Button>
              <Button variant="flat" block contentLeft>
                Option 3
              </Button>
            </MenuList>
          </Menu>
          <Menu>
            <MenuTrigger>
              <Button
                variant="bordered"
                block
                style={{ justifyContent: "space-between" }}
              >
                <span className="flex gap-2">
                  <Icon icon="air_purifier" />
                  Menu Right
                </span>
                <Icon icon="keyboard_arrow_down" />
              </Button>
            </MenuTrigger>
            <MenuList floating position="right">
              <Button variant="flat" block contentLeft>
                Option 1
              </Button>
              <Button variant="flat" block contentLeft>
                Option 2
              </Button>
              <Button variant="flat" block contentLeft>
                Option 3
              </Button>
            </MenuList>
          </Menu>
        </DocsCard>
      </DocsWrapper>
    </DocsTemplate>
  );
};

export default MenuPage;
