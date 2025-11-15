import { Button, Label, Select, TextInput } from "flowbite-react";

import OutlineCard from "@/shared/components/outline-card";

const AccountTab = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <OutlineCard>
            <h5 className="card-title">Mudar perfil</h5>
            <p className="card-subtitle -mt-1">Mude sua foto de perfil aqui</p>
            <div className="mx-auto mt-5 text-center">
              <img
                src="/images/profile/user-1.jpg"
                alt="logo"
                height="120"
                width="120"
                className="mx-auto rounded-full"
              />
              <div className="flex justify-center gap-3 py-6">
                <Button color={"primary"}>Upload</Button>
                <Button color={"lighterror"}>Reset</Button>
              </div>
              <p className="text-darklink text-sm">
                Permitido JPG, GIF ou PNG. Tamanho máximo de 800K
              </p>
            </div>
          </OutlineCard>
        </div>
        <div className="col-span-12 md:col-span-6">
          <OutlineCard>
            <h5 className="card-title">Mudar senha</h5>
            <p className="card-subtitle -mt-1">
              Para mudar sua senha, por favor confirme aqui
            </p>
            <div className="mt-3 flex flex-col gap-3">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="cpwd">Senha atual</Label>
                </div>
                <TextInput
                  id="cpwd"
                  type="password"
                  sizing="md"
                  className="form-control"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="npwd">Nova senha</Label>
                </div>
                <TextInput
                  id="npwd"
                  type="password"
                  sizing="md"
                  className="form-control"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="cfpwd">Confirmar senha</Label>
                </div>
                <TextInput
                  id="cfpwd"
                  type="password"
                  sizing="md"
                  className="form-control"
                />
              </div>
            </div>
          </OutlineCard>
        </div>

        <div className="col-span-12">
          <OutlineCard>
            <h5 className="card-title">Detalhes pessoais</h5>
            <p className="card-subtitle -mt-1">
              Para mudar seus detalhes pessoais, edite e salve aqui
            </p>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-6">
                <div className="mt-3 flex flex-col gap-3">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="ynm">Seu nome</Label>
                    </div>
                    <TextInput
                      id="ynm"
                      type="text"
                      sizing="md"
                      placeholder="Mathew Anderson"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="loc">Localização</Label>
                    </div>
                    <Select id="countries" className="select-md" required>
                      <option selected>United States</option>
                      <option>Canada</option>
                      <option>France</option>
                      <option>Germany</option>
                    </Select>
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="ynm">Email</Label>
                    </div>
                    <TextInput
                      id="em"
                      type="email"
                      placeholder="info@materialm.com"
                      sizing="md"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="mt-3 flex flex-col gap-3">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="store">Nome da loja</Label>
                    </div>
                    <TextInput
                      id="store"
                      type="text"
                      sizing="md"
                      placeholder="Macima Studio"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="curr">Moeda</Label>
                    </div>
                    <Select id="curr" className="select-md" required>
                      <option defaultValue={"India"}>India (INR)</option>
                      <option value="1">US Dollar ($)</option>
                      <option value="2">United Kingdom (Pound)</option>
                      <option value="3">India (INR)</option>
                      <option value="3">Russia (Ruble)</option>
                    </Select>
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="ph">Telefone</Label>
                    </div>
                    <TextInput
                      id="ph"
                      type="text"
                      sizing="md"
                      placeholder="+91 1234567895"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12 -mt-4">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="add">Endereço</Label>
                  </div>
                  <TextInput
                    id="add"
                    type="text"
                    sizing="md"
                    placeholder="814 Howard Street, 120065, India"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-5">
              <Button color={"primary"}>Salvar</Button>
              <Button color={"lighterror"}>Cancelar</Button>
            </div>
          </OutlineCard>
        </div>
      </div>
    </>
  );
};

export default AccountTab;
