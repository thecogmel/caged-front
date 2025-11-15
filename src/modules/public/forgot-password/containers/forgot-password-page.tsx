import { Link } from "@tanstack/react-router";
import { Button } from "flowbite-react";

import { LeftSidebarPart } from "@/shared/components";

import { AuthForgotPassword } from "../components";

export function ForgotPasswordPage() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="dark:bg-dark grid h-screen grid-cols-12 gap-3 bg-white">
        <div className="bg-lightprimary dark:bg-lightprimary relative col-span-12 hidden overflow-hidden lg:col-span-7 lg:block xl:col-span-8">
          <LeftSidebarPart />
        </div>
        <div className="col-span-12 p-5 sm:px-12 lg:col-span-5 xl:col-span-4">
          <div className="flex h-screen items-center justify-center px-3 lg:justify-start">
            <div className="mx-auto w-full max-w-[420px]">
              <h3 className="my-3 text-2xl font-bold">Esqueci minha senha</h3>
              <p className="text-darklink text-sm font-medium">
                Por favor, insira o endereço de e-mail associado à sua conta e
                enviaremos um link para redefinir sua senha.
              </p>
              <AuthForgotPassword />
              <Button
                color={"lightprimary"}
                as={Link}
                to="/login"
                className="mt-4 w-full rounded-md"
              >
                Voltar para o Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
