import Button from "../packages/button/Button";
import Card from "../packages/card/Card";

const ButtonPage = () => {
  return (
    <>
      <h1 className="text-4xl">Button</h1>

      <p className="text-base">
        Los botones permiten a los usuarios realizar acciones al hacer click.
      </p>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Card size="large" style={{ display: "flex", gap: "10px" }}>
            <Button variant="solid">deafult</Button>
          </Card>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl">Colors</h2>

          <Card size="large" style={{ display: "flex", gap: "10px" }}>
            <Button color="default" variant="solid">
              default
            </Button>

            <Button color="primary" variant="solid">
              primary
            </Button>

            <Button color="success" variant="solid">
              success
            </Button>
          </Card>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2 className="text-2xl">Sizes</h2>

          <Card
            size="large"
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              // alignItems: "start",
            }}
          >
            <Button size="small" color="default" variant="solid">
              small
            </Button>
            <Button size="medium" color="default" variant="solid">
              medium
            </Button>
            <Button size="large" color="default" variant="solid">
              large
            </Button>
          </Card>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2 className="text-2xl">Variants</h2>
          <Card
            size="large"
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Button color="primary" variant="flat">
              flat
            </Button>
            <Button color="primary" variant="solid">
              solid
            </Button>
            <Button color="primary" variant="bordered">
              bordered
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ButtonPage;
