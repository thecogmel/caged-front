import { Link } from "@tanstack/react-router";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

import { LeftSidebarPart } from "@/shared/components";

export function LoginPage() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="dark:bg-dark grid h-screen grid-cols-12 gap-3 bg-white">
        <div className="bg-lightprimary dark:bg-lightprimary relative col-span-12 hidden overflow-hidden lg:col-span-7 lg:block xl:col-span-8">
          <LeftSidebarPart />
        </div>
        <div className="col-span-12 p-5 sm:px-12 lg:col-span-5 xl:col-span-4">
          <div className="flex h-screen items-center justify-center px-3 lg:justify-start">
            <div className="mx-auto w-full max-w-[420px]">
              <h3 className="text-2xl font-bold">Bem vindo ao CAGED!</h3>
              <p className="text-darklink text-sm font-medium">
                Seu painel administrativo para sua ED
              </p>

              <form className="mt-6">
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="Username">E-mail</Label>
                  </div>
                  <TextInput
                    id="username"
                    type="text"
                    sizing="md"
                    className="form-control"
                  />
                </div>
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="userpwd">Password</Label>
                  </div>
                  <TextInput
                    id="userpwd"
                    type="password"
                    sizing="md"
                    className="form-control"
                  />
                </div>
                <div className="my-5 flex justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="accept" className="checkbox" />
                    <Label
                      htmlFor="accept"
                      className="cursor-pointer font-normal opacity-90"
                    >
                      Permanecer logado
                    </Label>
                  </div>
                  <Link
                    to="/perfil"
                    className="text-primary text-sm font-medium"
                  >
                    Esqueceu sua senha?
                  </Link>
                </div>
                <Button
                  color={"primary"}
                  href="/"
                  as={Link}
                  className="bg-primary hover:bg-primaryemphasis w-full rounded-md text-white"
                >
                  Entrar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
