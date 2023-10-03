export default function ErrorText({ id, text }) {
  return <p className={`error__${id}`}>{text}</p>;
}
