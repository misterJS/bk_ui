import { Footer, Header, Sidebar } from "../../components";
import { MenusDetailComponent } from "./utils";

function Detail() {
  return (
    <div>
      <Header />

      <div className="grid grid-flow-col gap-4 justify-center py-8 sm:px-24 lg:px-45">
        <Sidebar />
        <MenusDetailComponent />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Detail;
