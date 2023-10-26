import { memo } from "react";
import menus from "../../mock/menu.json";
import { Button, Input } from "@material-tailwind/react";
import { Link, useParams } from "react-router-dom";

const SidebarMemo = () => {
  const { categoryName } = useParams();

  return (
    <div className="hidden sm:block">
      <div className="relative flex w-full max-w-[24rem] mb-7">
        <Input
          type="search"
          label="Search Menu...."
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          className="!absolute right-0 primary-button top-0 rounded text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </Button>
      </div>
      <div className="grid grid-flow-row gap-3">
        {menus.map((menu) => {
          return (
            <Link to={`/menus/${menu.code}`}>
              <div
                className={
                  categoryName === menu.code
                    ? "primary-button-active p-4 rounded-md cursor-pointer"
                    : "bg-orange-100 p-4 rounded-md cursor-pointer"
                }
              >
                <p className="primary-font">{menu.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const Sidebar = memo(SidebarMemo);
