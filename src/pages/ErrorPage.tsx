import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold dark:text-white tracking-widest">
        404
      </h1>

      <div className="bg-primary rotate-12 absolute px-4 py-1 rounded-lg text-white">
        Page Not Found
      </div>

      <Link to="/" className="mt-5">
        <Button variant={"primary"}>Go back</Button>
      </Link>
    </main>
  );
};

export default ErrorPage;
