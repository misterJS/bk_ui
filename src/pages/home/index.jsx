import { CarouselImage, Footer, Header } from "../../components";
import { MenusComponent } from "./utils";

function Home() {
  return (
    <div>
      <Header />
      <CarouselImage />

      {/* our menus */}
      <MenusComponent />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Home;
