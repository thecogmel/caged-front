import { Icon } from "@iconify/react";
import { TabItem, Tabs } from "flowbite-react";

import { Breadcrumb } from "@/shared/components";
import CardBox from "@/shared/components/card-box";

import AccountTab from "../components/account-tab";

export function ProfilePage() {
  const BCrumb = [
    {
      to: "/",
      title: "Home",
    },
    {
      title: "Account Setting",
    },
  ];
  return (
    <>
      <Breadcrumb title="Account Setting" items={BCrumb} />

      <CardBox className="px-0 py-0">
        <Tabs aria-label="Tabs with underline" variant="underline">
          <TabItem
            active
            title="Account"
            icon={() => <Icon icon="tabler:user-circle" height={20} />}
          >
            <div className="p-6">
              <AccountTab />
            </div>
          </TabItem>
        </Tabs>
      </CardBox>
    </>
  );
}
