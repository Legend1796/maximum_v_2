import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "react-dadata/dist/react-dadata.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { FioSuggestions, EmailSuggestions } from "react-dadata";
import { Link } from "react-router-dom";
import axios from "axios";
import delFile from "../../images/delFile.svg";
import "./form.css";

const Form = ({ setIsLoading }) => {
  const dispatch = useDispatch();
  const [isValidForm, setIsValidForm] = useState(false);
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [checked, setChecked] = useState(true);
  const [files, setFiles] = useState([]);
  const [filesSizeValid, setFilesSizeValid] = useState(true);
  const maxFilesSize = 20; // 20Mb
  let addedFiles = [];
  let id = 0;

  const setPopupOpened = () => {
    dispatch({ type: "openPopup", payload: true });
  };

  const sendSuccess = () => {
    dispatch({ type: "sendSuccess", payload: true });
  };

  const sendError = () => {
    dispatch({ type: "sendError", payload: false });
  };

  function handleChangeFiles(e) {
    if (!e.target.files.length) {
      return;
    }
    const arr = Array.from(e.target.files);
    for (let i = 0; i < arr.length; i++) {
      arr[i]._id = id;
      if (id > 99) {
        id = 0;
      } else id++;
      addedFiles.push(arr[i]);
    }
    setFiles(addedFiles);
  }

  useEffect(() => {
    if (email && name) {
      setIsValidForm(email.value && phone.length > 10 && name.value && checked && filesSizeValid);
      console.log(filesSizeValid);
    }
  }, [name, email, phone, checked, filesSizeValid]);

  useEffect(() => {
    let filesSize = 0;
    files.forEach((file) => (filesSize = filesSize + file.size / 1024 / 1024));
    if (filesSize < maxFilesSize) {
      console.log("filesSize < maxFilesSize", filesSize);
      setFilesSizeValid(true);
    } else {
      console.log("filesSize > maxFilesSize", filesSize);
      setFilesSizeValid(false);
    }
  }, [files]);

  const handleDeleteFile = (file) => {
    setFiles(files.filter((data) => data._id !== file._id));
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("email", email.value);
    formData.append("phone", phone);
    formData.append("host", "maximum-logistic.ru");
    files.forEach((file) => {
      formData.append("files", file);
    });
    formData.append("comment", comment);
    try {
      const res = await axios.post("https://maximum-logistics.ru/api/v1/orders/", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      console.log(res.status);
      setPopupOpened();
      setIsLoading(false);
      sendSuccess();
    } catch (error) {
      setPopupOpened();
      setIsLoading(false);
      sendError();
    }
  };

  return (
    <form onSubmit={handleSubmit} id="form">
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
            isValid={(value) => {
              if (!value) {
                return `Invalid value`;
              }
              return true;
            }}
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
          <textarea
            className="form__textarea"
            name="textarea"
            id="textarea"
            cols="30"
            rows="5"
            onChange={(e) => setComment(e.target.value)}></textarea>
        </div>
        <p className="form__text">Техническое задание, Invoice, Packing list если есть</p>
        <div className="form__added">
          {files.map((file) => {
            return (
              <div className="form__selected" key={file._id}>
                <p className="form__added-text">{file.name}</p>
                <button className="form__delete-file" type="button" onClick={() => handleDeleteFile(file)}>
                  <img src={delFile} alt="delete file" />
                </button>
              </div>
            );
          })}
        </div>
        <p className={!filesSizeValid ? "form__size_active" : "form__size"}>
          Размер файлов не должен превышать {maxFilesSize} Мбайт
        </p>
        <button className="button__file" type="button">
          <input
            className="form__add-file-input"
            type="file"
            multiple
            onChange={handleChangeFiles}
            accept="image/*, .pdf, .xlsx, .xls, .png, .jpg, .doc, .docx, .txt, .ai, .dwg, .dwt, .dxf, .psd"
          />
          <p className="form__button-text">Загрузить файл</p>
        </button>
        <button type="submit" className="button" disabled={!isValidForm}>
          <p className="form__button-text">Оставить заявку</p>
        </button>
        <div className=" form__text form__text_agreement">
          Нажимая кнопку “Оставить заявку” вы соглашаетесь с&nbsp;
          <Link to="/personal-data" className="form__agreement-text-link" data-testid="personal-link">
            политикой конфиденциальности
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Form;
