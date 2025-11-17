import { Button } from "flowbite-react";

import CardBox from "@/shared/components/card-box";
import OutlineCard from "@/shared/components/outline-card";

import { CurrentYear, ExpanseChart, IncomeChart } from ".";

export function CurrentValue() {
  return (
    <>
      <CardBox>
        <div className="flex items-end justify-between">
          <h5 className="card-title">Current Value</h5>
          <div className="flex gap-3">
            <Button color={"primary"}>Buy</Button>
            <Button color={"outlineprimary"}>Sell</Button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <OutlineCard className="shadow-none">
              <IncomeChart />
            </OutlineCard>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <OutlineCard className="shadow-none">
              <ExpanseChart />
            </OutlineCard>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <OutlineCard className="shadow-none">
              <CurrentYear />
            </OutlineCard>
          </div>
        </div>
      </CardBox>
    </>
  );
}
