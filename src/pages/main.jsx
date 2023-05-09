import { useState } from "react";
import Doubts from "../components/doubts/doubts";
import Economy from "../components/economy/economy";
import Experience from "../components/experience/experience";
import Feedback from "../components/feedback/feedback";
import Footer from "../components/footer/footer";
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

  const handleOpen = () => {
    setPopupOpen(true);
  };
  const handleClose = () => {
    setPopupOpen(false);
  };

  return (
    <div className="Main">
      <Title />
      <Promo pageWidth={pageWidth} />
      <NotSellers pageWidth={pageWidth} />
      <Experience pageWidth={pageWidth} />
      <Economy pageWidth={pageWidth} isOpen={handleOpen} />
      <Feedback />
      <Manager />
      <Seller pageWidth={pageWidth} />
      <Variants />
      <Found pageWidth={pageWidth} />
      <Individual />
      <Doubts pageWidth={pageWidth} />
      <Popup isOpen={popupOpen} onClose={handleClose} />
      {/* 
      <Form pageWidth={pageWidth} /> */}
    </div>
  );
}

export default Main;
