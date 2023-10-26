import { memo } from "react";
import { CardComponent } from "../../../../components";
import menus from "../../../../mock/menu.json";
import { Link } from "react-router-dom";

function MenusComponentMemo() {
  return (
    <div className="grid justify-center text-center">
      <h3 className="text-4xl my-8 primary-font">Our Menus</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {menus.map((menu) => (
          <Link to={`/menus/${menu.code}`}>
            <CardComponent
              imageUrl={menu.imageUrl}
              imageAlt={menu.imageAlt}
              title={menu.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export const MenusComponent = memo(MenusComponentMemo);
