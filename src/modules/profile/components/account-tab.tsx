import { Button, Label, Select, TextInput } from "flowbite-react";

import OutlineCard from "@/shared/components/outline-card";

const AccountTab = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <OutlineCard>
            <h5 className="card-title">Change Profile</h5>
            <p className="card-subtitle -mt-1">
              Change your profile picture from hereeee
            </p>
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
                Allowed JPG, GIF or PNG. Max size of 800K
              </p>
            </div>
          </OutlineCard>
        </div>
        <div className="col-span-12 md:col-span-6">
          <OutlineCard>
            <h5 className="card-title">Change Password</h5>
            <p className="card-subtitle -mt-1">
              To change your password please confirm here
            </p>
            <div className="mt-3 flex flex-col gap-3">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="cpwd">Current Password</Label>
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
                  <Label htmlFor="npwd">New Password</Label>
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
                  <Label htmlFor="cfpwd">Confirm Password</Label>
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
            <h5 className="card-title">Personal Details</h5>
            <p className="card-subtitle -mt-1">
              To change your personal detail , edit and save from here
            </p>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-6">
                <div className="mt-3 flex flex-col gap-3">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="ynm">Your Name</Label>
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
                      <Label htmlFor="loc">Location</Label>
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
                      <Label htmlFor="store">Store Name</Label>
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
                      <Label htmlFor="curr">Currency</Label>
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
                      <Label htmlFor="ph">Phone</Label>
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
                    <Label htmlFor="add">Address</Label>
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
              <Button color={"primary"}>Save</Button>
              <Button color={"lighterror"}>Cancel</Button>
            </div>
          </OutlineCard>
        </div>
      </div>
    </>
  );
};

export default AccountTab;
