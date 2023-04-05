// import About from "../../src/components/about/about";
// import Form from "../../src/components/form/form";
// import Promo from "../../src/components/promo/promo";
// import Steps from "../../src/components/steps/steps";
// import Why from "../../src/components/whyus/why";

import Economy from "../components/economy/economy";
import Experience from "../components/experience/experience";
import Manager from "../components/manager/manager";
import Promo from "../components/promo/promo";
import Title from "../components/title/title";

function Main({ pageWidth }) {
  return (
    <div className="Main">
      <Title />
      <Promo />
      <Experience />
      <Economy />
      <Manager />
      {/* 
      <About pageWidth={pageWidth} />
      <Steps pageWidth={pageWidth} />
      <Why />
      <Form pageWidth={pageWidth} /> */}
    </div>
  );
}

export default Main;
