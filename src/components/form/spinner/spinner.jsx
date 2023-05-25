import logo from "../../../images/logo.svg";
import "./spinner.css";

const Spinner = ({ openSpinner }) => {
  return (
    <div className={openSpinner ? "spinner__overlay" : "spinner__overlay_inactive"}>
      <div className="spinner" />
      <img src={logo} alt="логотив внутри спинера" className="spinner__logo" />
    </div>
  );
};

export default Spinner;
