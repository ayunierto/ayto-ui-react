import Button from "./packages/button/Button";

const App = () => {
  return (
    <main>
      <h1>Button</h1>
      <p className="components__description">
        Los botones permiten a los usuarios realizar acciones al hacer click
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button variant="solid">deafult</Button>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h2>Colors</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button color="default" variant="solid">
            default
          </Button>
          <Button color="primary" variant="solid">
            primary
          </Button>
          <Button color="success" variant="solid">
            success
          </Button>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h2>Sizes</h2>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "start",
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
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h2>Variants</h2>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "start",
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
        </div>
      </div>
    </main>
  );
};

export default App;
