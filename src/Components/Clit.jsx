/* eslint-disable react/prop-types */
import "../assets/css/components/clit.css";
function Clit(props) {
  return (
    <>
      <div className="clit-wrapper">
        <a>{props.tagName || "anjan"}</a>
      </div>
    </>
  );
}
export default Clit;
