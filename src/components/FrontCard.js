import Img from "./Img";

export default function FrontCard({ formData, formattedCardNumber }) {
  return (
    <div className="front__card">
      <Img src="card-logo.svg" alt="card logo" className="card__logo" />
      <div className="card__details">
        <p className="details__number">
          {formattedCardNumber ? formattedCardNumber : "0000 0000 0000 0000"}
        </p>
        <div className="details__name-box">
          <p className="details__name">
            {formData.name ? formData.name : "Jane Appleseed"}
          </p>
          <p className="details__expiry">
            <span className="details__expiry--month">
              {formData.month ? formData.month : "00"}
            </span>
            /
            <span className="details__expiry--year">
              {formData.year ? formData.year : "00"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
