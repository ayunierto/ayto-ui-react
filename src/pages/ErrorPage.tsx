import { Link } from "react-router-dom";
import Button from "../packages/button/Button";
import Card from "../packages/card/Card";

const ErrorPage = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>

      <Card size="small" className="rotate-12 absolute py-1" shadow>
        Page Not Found
      </Card>

      <Link to="/" className="mt-5">
        <Button color="primary">Go back</Button>
      </Link>
    </main>
  );
};

export default ErrorPage;
