import "./popup.css";
import Table from "./table/table";

const Popup = ({ onClose, isOpen }) => {
  return (
    <div className={isOpen ? "popup popup_opened" : "popup"}>
      <Table onClose={onClose} />
    </div>
  );
};

export default Popup;
