import { Alert } from "@material-tailwind/react";
import { Footer, Header, Sidebar } from "../../components";
import { MenusDetailComponent } from "./utils";
import { useState } from "react";

function Detail() {
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertTimeout, setAlertTimeout] = useState(null);

  const addCart = (message, timeout) => {
    setAlertMessage(message);
    setShowAlert(true);

    if (alertTimeout) {
      clearTimeout(alertTimeout);
    }

    const timeoutId = setTimeout(() => {
      setShowAlert(false);
      setAlertMessage("");
    }, timeout);

    setAlertTimeout(timeoutId);
  };
  return (
    <div>
      <Header />
      {showAlert && (
        <Alert className="rounded-none justify-center" color="green">
          {alertMessage}
        </Alert>
      )}

      <div className="grid grid-flow-col gap-4 justify-center py-8">
        <Sidebar />
        <MenusDetailComponent
          addToCart={() => addCart("The Item Added To Cart", 3000)}
        />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Detail;
