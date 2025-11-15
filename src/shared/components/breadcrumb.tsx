import background from "@/assets/images/breadcrumb/ChatBc.png";

import CardBox from "./card-box";

interface BreadcrumbItem {
  to?: string;
  title: string;
}

interface BreadCrumbType {
  subtitle?: string;
  items?: BreadcrumbItem[];
  title: string;
}

export function Breadcrumb({ title }: BreadCrumbType) {
  return (
    <>
      <CardBox
        className={`bg-lightinfo dark:bg-darkinfo mb-6 overflow-hidden rounded-md border-none py-4 !shadow-none dark:!shadow-none`}
      >
        <div className="grid grid-cols-12 items-center gap-6">
          <div className="col-span-9">
            <h4 className="text-dark mb-3 text-xl font-semibold dark:text-white">
              {title}
            </h4>
            <ol
              className="flex items-center whitespace-nowrap"
              aria-label="Breadcrumb"
            >
              <li className="flex items-center">
                <a
                  className="text-link dark:text-darklink text-sm leading-none opacity-80"
                  href="@@webRoot/main/index.html"
                >
                  Home
                </a>
              </li>
              <li>
                <div className="bg-dark dark:bg-darklink mx-2.5 flex items-center rounded-full p-0.5"></div>
              </li>
              <li
                className="text-link dark:text-darklink flex items-center text-sm leading-none"
                aria-current="page"
              >
                {title}
              </li>
            </ol>
          </div>
          <div className="col-span-3 -mb-10 flex justify-center">
            <img src={background} alt="" className="-mb-4 md:-mb-[31px]" />
          </div>
        </div>
      </CardBox>
    </>
  );
}
