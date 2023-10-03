import { useState } from "react";
import BackCard from "./components/BackCard";
import FrontCard from "./components/FrontCard";
import Img from "./components/Img";
import SuccessBox from "./components/SuccessBox";
import  InputBox  from "./components/InputBox";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });
  const [formattedCardNumber, setFormattedCardNumber] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [nameValid, setNameValid] = useState(true);
  const [numberValid, setNumberValid] = useState(true);
  const [monthValid, setMonthValid] = useState(true);
  const [yearValid, setYearValid] = useState(true);
  const [cvcValid, setCvcValid] = useState(true);

  const validateForm = () => {
    const nameCard = formData.name.trim();
    const numberCard = formData.number.trim();
    const monthExpiry = Number(formData.month.trim());
    const yearExpiry = Number(formData.year.trim());
    const cvcNumber = formData.cvc.trim();
    const isNameValid = /^[a-zA-Z\s]*$/.test(nameCard) && nameCard.length >= 2;
    const isNumberValid = /^\d+$/.test(numberCard) && numberCard.length === 16;
    const isMonthValid =
      /^\d+$/.test(monthExpiry) && monthExpiry > 0 && monthExpiry < 13;
    const isYearValid =
      /^\d+$/.test(yearExpiry) && yearExpiry > 23 && yearExpiry < 28;
    const isCvcValid = /^\d+$/.test(cvcNumber) && cvcNumber.length === 3;
    setNameValid(isNameValid);
    setNumberValid(isNumberValid);
    setMonthValid(isMonthValid);

    setYearValid(isYearValid);
    setCvcValid(isCvcValid);

    if (
      isNameValid &&
      isNumberValid &&
      isMonthValid &&
      isYearValid &&
      isCvcValid
    ) {
      setIsSubmitted(true);
    }
  };

  if (!formData.name.trim()) {
    formData.name = "";
  }
  if (!formData.number.trim()) {
    formData.number = "";
  }
  if (!formData.month.trim()) {
    formData.month = "";
  }
  if (!formData.year.trim()) {
    formData.year = "";
  }
  if (!formData.cvc.trim()) {
    formData.cvc = "";
  }

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "number") {
      const cleanValue = value.replace(/\D/g, "");

      let formattedValue = "";
      for (let i = 0; i < cleanValue.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formattedValue += " ";
        }
        formattedValue += cleanValue.charAt(i);
      }

      setFormData({
        ...formData,
        [name]: cleanValue,
      });
      setFormattedCardNumber(formattedValue);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    validateForm();
  }

  function handleReload() {
    setFormData({ name: "", number: "", month: "", year: "", cvc: "" });
    setFormattedCardNumber("");
    setNameValid(true);
    setNumberValid(true);
    setMonthValid(true);
    setYearValid(true);
    setCvcValid(true);
    setIsSubmitted(false);
  }

  return (
    <div>
      <div className="forms">
        <div className="img__box">
          <Img src="bg-main-desktop.png" alt="background" className="bg--img" />
        </div>
        <div className="form__container">
          {!isSubmitted && (
            <form className="form__box" onSubmit={handleSubmit}>
              <InputBox
                label="Cardholder name"
                placeholder="e.g. Jane Appleseed"
                id="name"
                maxLength="100"
                errorText="Wrong format, letters only or Name is too short"
                onChange={handleChange}
                value={formData.name}
                isValid={nameValid}
              />
              <InputBox
                label="Card number"
                placeholder="e.g. 1234 5678 0123 0000"
                id="number"
                maxLength="19"
                errorText="Wrong format, numbers only or Number is not complete"
                onChange={handleChange}
                value={formattedCardNumber}
                isValid={numberValid}
              />
              <div className="info__box">
                <div className="expiry gap">
                  <label className="uppercase">Exp. Date (MM/YY)</label>
                  <div className="expiry__box">
                    <InputBox
                      label=""
                      id="month"
                      placeholder="MM"
                      maxLength="2"
                      errorText="Month is not valid"
                      onChange={handleChange}
                      value={formData.expiryMonth}
                      isValid={monthValid}
                    />

                    <InputBox
                      label=""
                      id="year"
                      placeholder="YY"
                      maxLength="2"
                      errorText="Year is not valid"
                      onChange={handleChange}
                      value={formData.expiryYear}
                      isValid={yearValid}
                    />
                  </div>
                </div>
                <div className="cvc__box">
                  <InputBox
                    label="Cvc"
                    placeholder="e.g. 123"
                    id="cvc"
                    maxLength="3"
                    errorText="Wrong format, numbers only or Number is not complete"
                    onChange={handleChange}
                    value={formData.cvc}
                    isValid={cvcValid}
                  />
                </div>
              </div>
              <button className="btn">Confirm</button>
            </form>
          )}
          {isSubmitted && <SuccessBox onReload={handleReload} />}
        </div>
      </div>
      <FrontCard
        formData={formData}
        formattedCardNumber={formattedCardNumber}
      />
      <BackCard formData={formData} />
    </div>
  );
}
