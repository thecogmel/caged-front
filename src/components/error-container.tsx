import { Button } from "flowbite-react";

import ErrorImg from "@/assets/images/backgrounds/errorimg.svg";

interface ErrorContainerProps {
  message?: string;
}

export function ErrorContainer({ message }: ErrorContainerProps) {
  console.error("Error message:", message);
  return (
    <div className="dark:bg-dark flex h-screen items-center justify-center bg-white">
      <div className="text-center">
        <img src={ErrorImg} alt="error" className="mb-4" width={500} />
        <h1 className="text-ld mb-6 text-4xl">Opps!!!</h1>
        <h6 className="text-ld text-xl">
          This page you are looking for could not be found.
        </h6>
        <Button
          color={"primary"}
          href="/"
          className="mx-auto mt-6 w-fit rounded-md"
        >
          Go Back to Home
        </Button>
      </div>
    </div>
  );
}
