import Img from "./Img";

export default function SuccessBox({ onReload }) {
  return (
    <div className="success">
      <Img
        src="icon-complete.svg"
        alt="success__logo"
        className="success__logo"
      />
      <p className="success__heading">Thank you!</p>
      <p className="success__text">We've added your card details</p>
      <button className="btn continue" onClick={onReload}>
        Continue
      </button>
    </div>
  );
}
