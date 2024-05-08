import Card from "../packages/card/Card";

const CardPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl">Card</h1>

      <p className="text-base">
        Las tarjetas es un contenedor para envolver otros elementos
        resaltandolos en la pantalla.
      </p>

      <hr className="opacity-20" />

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Default</h2>
          <Card
            variant="bordered"
            size="large"
            style={{ display: "flex", gap: "10px" }}
          >
            <Card>This is a Card</Card>
          </Card>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Sizes</h2>
          <Card variant="bordered" size="large" className="flex flex-col gap-2">
            <Card size="small">small</Card>
            <Card size="medium">medium</Card>
            <Card size="large">large</Card>
          </Card>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Variants</h2>
          <Card variant="bordered" size="large" className="flex flex-col gap-2">
            <Card variant="flat">flat</Card>
            <Card variant="solid">solid</Card>
            <Card variant="bordered">bordered</Card>
          </Card>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">With hover</h2>
          <Card variant="bordered" size="large" className="flex flex-col gap-2">
            <Card hoverable variant="flat">
              flat
            </Card>
            <Card hoverable variant="solid">
              solid
            </Card>
            <Card hoverable variant="bordered">
              bordered
            </Card>
          </Card>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Shadow</h2>
          <Card variant="bordered" size="large" className="flex flex-col gap-2">
            <Card shadow>bordered</Card>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
