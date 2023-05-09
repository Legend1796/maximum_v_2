import React from "react";
import "react-phone-input-2/lib/style.css";
import "./form.css";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { FioSuggestions, EmailSuggestions } from "react-dadata";
import { Link } from "react-router-dom";
import Button from "../ui/button";

const Form = () => {
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [checked, setChecked] = useState(true);

  function handleChangeFiles(e) {
    console.log(e.target.files);
    setSelectedFile(e.target.files.length);
  }

  useEffect(() => {
    if (email && name) {
      setIsValid(email.value && phone.length > 10 && name.value && checked);
    }
  }, [name, email, phone, checked]);

  return (
    <form>
      <div className="form__container">
        <h4 className="form__title">Подберем максимальное количество предложений по интересующей Вас продукции</h4>
        <div className="form__subtitle">Перезвоним в течение 15 минут, чтобы уточнить детали. Заполните форму</div>
        <div className="input__container">
          <FioSuggestions
            inputProps={{
              placeholder: "Имя",
              required: true,
              autoFocus: true,
            }}
            selectOnBlur="true"
            containerClassName="form__input"
            id="name"
            name="name"
            type="NAME"
            token="469678a76f51fa567ff874967776f95d2082fdfc"
            value={name}
            onChange={setName}
          />
          <PhoneInput
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
              placeholder: "Телефон",
            }}
            disableDropdown
            disableSearchIcon
            enableAreaCodes={false}
            onlyCountries={["ru"]}
            id="phone"
            type="text"
            inputClass="form__input-phone"
            buttonClass="form__input-phone-button"
            country={"ru"}
            value={phone}
            onChange={setPhone}
          />
          <EmailSuggestions
            selectOnBlur="true"
            containerClassName="form__input"
            id="email"
            name="email"
            type="email"
            token="469678a76f51fa567ff874967776f95d2082fdfc"
            value={email}
            onChange={setEmail}
            inputProps={{
              placeholder: "Почта",
              required: true,
              autoFocus: true,
            }}
          />
          <textarea className="form__textarea" name="textarea" id="textarea" cols="30" rows="5"></textarea>
        </div>
        <p className="form__text">Техническое задание, Invoice, Packing list если есть</p>
        <button className="button__file" type="button">
          <input
            className="form__add-file-input"
            type="file"
            multiple
            onChange={handleChangeFiles}
            accept="image/*, .pdf, .xlsx, .xls, .png, .jpg, .doc, .docx"
          />
          <p>Загрузить файл</p>
        </button>
        <Button type="button" typeButton="primary">
          <p>Оставить заявку</p>
        </Button>
        <div className=" form__text form__text_agreement">
          Нажимая кнопку “Оставить заявку” вы соглашаетесь с&nbsp;
          <Link to="/personal-data" className="form__agreement-text-link">
            политикой конфиденциальности
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Form;
