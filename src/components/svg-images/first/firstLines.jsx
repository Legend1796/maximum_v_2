import { useEffect } from "react";
import "../../promo/promo.css";

const FirstLines = () => {
  useEffect(() => {
    console.log(document.querySelector("#first-line").getTotalLength());
  }, []);
  return (
    <div>
      <svg width="63" height="191" viewBox="0 0 63 191" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="first-line"
          d="M0 0.5H27.0233M1 189.5H62.0526M0.5 1V190.011"
          stroke="#2FBAE5"
          attributeName="first-line"
          strokeDasharray="277">
          <animate
            attributeName="strokeDasharray"
            id="first-animation"
            begin="first-line.load"
            dur="4"
            repeatCount="1"
            from="0"
            to="189"
            calcMode="linear"
          />
        </path>
      </svg>
    </div>
  );
};

export default FirstLines;
