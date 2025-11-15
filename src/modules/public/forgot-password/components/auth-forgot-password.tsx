import { Button, Label, TextInput } from "flowbite-react";

export function AuthForgotPassword() {
  return (
    <>
      <form className="mt-6">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="emadd">Endereço de e-mail</Label>
          </div>
          <TextInput
            id="emadd"
            type="text"
            sizing="md"
            className="form-control"
          />
        </div>
        <Button color={"primary"} className="w-full rounded-md">
          Esqueci minha senha
        </Button>
      </form>
    </>
  );
}
