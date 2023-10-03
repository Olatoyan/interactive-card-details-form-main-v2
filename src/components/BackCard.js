export default function BackCard({ formData }) {
  return (
    <div className="back__card">
      <p className="back__number">{formData.cvc}</p>
    </div>
  );
}
