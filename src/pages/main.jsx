// import About from "../../src/components/about/about";
// import Form from "../../src/components/form/form";
// import Promo from "../../src/components/promo/promo";
// import Steps from "../../src/components/steps/steps";
// import Why from "../../src/components/whyus/why";

import Doubts from "../components/doubts/doubts";
import Economy from "../components/economy/economy";
import Experience from "../components/experience/experience";
import Feedback from "../components/feedback/feedback";
import Footer from "../components/footer/footer";
import Found from "../components/found/found";
import Individual from "../components/individual/individual";
import Manager from "../components/manager/manager";
import NotSellers from "../components/not-sellers/not-sellers";
import Promo from "../components/promo/promo";
import Seller from "../components/seller/seller";
import Title from "../components/title/title";
import Variants from "../components/variants/variants";

function Main({ pageWidth }) {
  return (
    <div className="Main">
      <Title />
      <Promo pageWidth={pageWidth} />
      <NotSellers pageWidth={pageWidth} />
      <Experience pageWidth={pageWidth} />
      <Economy pageWidth={pageWidth} />
      <Feedback />
      <Manager />
      <Seller />
      <Variants />
      <Found />
      <Individual />
      <Doubts />
      <Footer />
      {/* 
      <Form pageWidth={pageWidth} /> */}
    </div>
  );
}

export default Main;
