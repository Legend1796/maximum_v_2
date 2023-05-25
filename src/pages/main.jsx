import { useState } from "react";
import Doubts from "../components/doubts/doubts";
import Economy from "../components/economy/economy";
import Experience from "../components/experience/experience";
import Feedback from "../components/feedback/feedback";
import FormPopup from "../components/form/formPopup/formPopup";
import Spinner from "../components/form/spinner/spinner";
import Found from "../components/found/found";
import Individual from "../components/individual/individual";
import Manager from "../components/manager/manager";
import NotSellers from "../components/not-sellers/not-sellers";
import Popup from "../components/popup/popup";
import Promo from "../components/promo/promo";
import Seller from "../components/seller/seller";
import Title from "../components/title/title";
import Variants from "../components/variants/variants";

function Main({ pageWidth }) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = () => {
    setPopupOpen(true);
  };
  const handleClose = () => {
    setPopupOpen(false);
  };

  return (
    <div className="Main">
      <Title />
      <Promo setIsLoading={setIsLoading} />
      <NotSellers />
      <Experience />
      <Economy isOpen={handleOpen} />
      <Feedback />
      <Manager />
      <Seller setIsLoading={setIsLoading} />
      <Variants />
      <Found setIsLoading={setIsLoading} />
      <Individual />
      <Doubts setIsLoading={setIsLoading} />
      <Popup isOpen={popupOpen} onClose={handleClose} />
      <Spinner openSpinner={isLoading} />
      <FormPopup />
    </div>
  );
}

export default Main;
