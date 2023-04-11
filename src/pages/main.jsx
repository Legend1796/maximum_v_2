// import About from "../../src/components/about/about";
// import Form from "../../src/components/form/form";
// import Promo from "../../src/components/promo/promo";
// import Steps from "../../src/components/steps/steps";
// import Why from "../../src/components/whyus/why";

import Doubts from "../components/doubts/doubts";
import Economy from "../components/economy/economy";
import Experience from "../components/experience/experience";
import Footer from "../components/footer/footer";
import Found from "../components/found/found";
import Manager from "../components/manager/manager";
import Promo from "../components/promo/promo";
import Seller from "../components/seller/seller";
import Title from "../components/title/title";
import Variants from "../components/variants/variants";

function Main({ pageWidth }) {
  return (
    <div className="Main">
      <Title />
      <Promo />
      <Experience />
      <Economy />
      <Manager />
      <Seller />
      <Variants />
      <Found />
      <Doubts />
      <Footer />
      {/* 
      <Form pageWidth={pageWidth} /> */}
    </div>
  );
}

export default Main;
