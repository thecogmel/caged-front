import { Link } from "@tanstack/react-router";
import { Button, Label, TextInput } from "flowbite-react";

import { LeftSidebarPart } from "../components";

export function ForgotPassword() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="dark:bg-dark grid h-screen grid-cols-12 gap-3 bg-white">
        <div className="bg-lightprimary dark:bg-lightprimary relative col-span-12 hidden overflow-hidden lg:col-span-7 lg:block xl:col-span-8">
          <LeftSidebarPart />
        </div>
        <div className="col-span-12 p-5 sm:px-12 lg:col-span-5 xl:col-span-4">
          <div className="flex h-screen items-center justify-center px-3 lg:justify-start">
            <div className="mx-auto w-full max-w-[420px]">
              <h3 className="my-3 text-2xl font-bold">Forgot Password</h3>
              <p className="text-darklink text-sm font-medium">
                Please enter the email address associated with your account and
                We will email you a link to reset your password.
              </p>
              <form className="mt-6">
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="email">Email Address</Label>
                  </div>
                  <TextInput
                    id="emadd"
                    type="text"
                    sizing="md"
                    className="form-control"
                  />
                </div>
                <Button color={"primary"} className="w-full rounded-md">
                  Forgot Password
                </Button>
              </form>
              <Button
                color={"lightprimary"}
                as={Link}
                href="/auth/auth1/login"
                className="mt-4 w-full rounded-md"
              >
                Back to Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
