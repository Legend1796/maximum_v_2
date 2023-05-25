import { useDispatch, useSelector } from "react-redux";
import success from "../../../images/icons/success.svg";
import error from "../../../images/icons/error.svg";
import Button from "../../ui/button";
import "./formPopup.css";

const FormPopup = () => {
  const dispatch = useDispatch();
  const openPopup = useSelector((state) => state.open.openPopup);
  const sendSuccess = useSelector((state) => state.success.sendSuccess);

  const setPopupClosed = () => {
    dispatch({ type: "closePopup", payload: false });
  };

  return (
    <div className={openPopup ? "form-popup form-popup_opened" : "form-popup"}>
      <button onClick={setPopupClosed} className="form-popup__overlay" />
      <div className="form-popup__container">
        {sendSuccess ? (
          <>
            <img src={success} alt="иконка попапа" />
            <h4 className="form-popup__title">Спасибо!</h4>
            <p className="form-popup__text">Ваша заявка отправлена. В ближайшее время мы с вами свяжемся.</p>
            <div className="form-popup__button" onClick={setPopupClosed}>
              <Button type="button" typeButton="primary">
                <p>Ок</p>
              </Button>
            </div>
          </>
        ) : (
          <>
            <img src={error} alt="иконка попапа" />
            <h4 className="form-popup__title">К сожалению ваша заявка не оформлена</h4>
            <p className="form-popup__text">Ваша заявка отправлена. В ближайшее время мы с вами свяжемся.</p>
            <div className="form-popup__button" onClick={setPopupClosed}>
              <Button type="button" typeButton="primary">
                <p>Ок</p>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FormPopup;
