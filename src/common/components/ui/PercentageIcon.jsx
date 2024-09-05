import "../../../index.css";
import PropTypes from "prop-types";

const PercentageIcon = ({ PercentValue = 2.3 }) => {
  return (
    <div className="flex items-center gap-1 text-customGreen text-xl font-bold">
      <span className="material-icons-outlined">arrow_outward</span>{" "}
      <span>{PercentValue}%</span>
    </div>
  );
};

PercentageIcon.propTypes = {
  PercentValue: PropTypes.string,
};
export default PercentageIcon;
