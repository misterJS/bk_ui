import { memo, useState } from "react";
import { CardPriceComponent } from "../../../../components";
import menus from "../../../../mock/menu.json";
import { Button, Card, Input } from "@material-tailwind/react";
import { useParams } from "react-router-dom";

function MenusDetailComponentMemo() {
  const [detail, setDetail] = useState(false);
  const { categoryName } = useParams();

  const filteredVariant = menus.filter((menu) => menu.code === categoryName)[0]
    .variant;
  return (
    <div className="grid justify-center text-center">
      {!detail ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredVariant?.map((menu) => (
            <div onClick={() => setDetail(true)}>
              <CardPriceComponent
                imageUrl={menu.imageUrl}
                imageAlt={menu.imageAlt}
                title={menu.title}
                price={menu.price}
              />
            </div>
          ))}
        </div>
      ) : (
        <Card className="grid grid-flow-row sm:grid-flow-col col-span-1 divide-x">
          <div className="p-5 text-center">
            <h1 className="text-3xl mb-4">Paket Crispy</h1>
            <p>
              1 pc Ayam Crispy + Nasi + Frestea Jasmine Tea Medium [ Rasa Baru,
              Enaknya sampe gigitan terakhir ! ] 𝘗𝘰𝘵𝘰𝘯𝘨𝘢𝘯 𝘢𝘺𝘢𝘮 𝘺𝘢𝘯𝘨 𝘵𝘦𝘳𝘴𝘦𝘥𝘪𝘢
              𝘵𝘦𝘳𝘨𝘢𝘯𝘵𝘶𝘯𝘨 𝘬𝘦𝘵𝘦𝘳𝘴𝘦𝘥𝘪𝘢𝘢𝘯 𝘥𝘪 𝘵𝘰𝘬𝘰 𝘱𝘢𝘥𝘢 𝘴𝘢𝘢𝘵 𝘱𝘦𝘮𝘦𝘴𝘢𝘯𝘢𝘯/𝘱𝘦𝘯𝘨𝘪𝘳𝘪𝘮𝘢𝘯
            </p>
            <img
              className="w-48 mt-6"
              src="https://3.bp.blogspot.com/-m8OJNrd4JG4/XlzfWwQztGI/AAAAAAAAd0E/LJY7t7xNzhwqWwSvaTO-0ILX2b6SbNo0wCLcBGAsYHQ/s1600/bk_0302hd.jpg"
            />
            <div className="text-left mt-8">
              <h1 className="text-2xl mb-4 primary-font">Add Extras</h1>
            </div>
            <p>no item</p>
          </div>
          <div className="p-5 text-left">
            <h1 className="text-3xl mb-4">Rp. 25,000</h1>
            <p>Add On -</p>
            <div className="relative flex w-full max-w-[24rem] mb-7 mt-6">
              <Button
                size="sm"
                className="!absolute left-1 primary-orange-font bg-transparent top-1 rounded"
              >
                -
              </Button>
              <Input
                type="number"
                className="text-center"
                containerProps={{
                  className: "min-w-0",
                }}
              />
              <Button
                size="sm"
                className="!absolute right-1 primary-orange-font bg-transparent top-1 rounded"
              >
                +
              </Button>
            </div>
            <Button size="md" className="primary-button rounded w-full">
              Add To Cart
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}

export const MenusDetailComponent = memo(MenusDetailComponentMemo);
