import ErrorText from "./ErrorText";

export default function InputBox({
  label,
  placeholder,
  id,
  maxLength,
  errorText,
  onChange,
  value,
  isValid,
}) {
  return (
    <div className="name__box gap">
      <label className="input-name uppercase" htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        className="input__details"
        id={id}
        placeholder={placeholder}
        maxLength={maxLength}
        name={id}
        onChange={onChange}
        value={value}
      />
      {!isValid && <ErrorText id={id} text={errorText} />}
    </div>
  );
}
