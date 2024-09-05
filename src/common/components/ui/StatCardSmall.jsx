import PropTypes from "prop-types";
import PercentageIcon from "./PercentageIcon";

const StatCardSmall = ({
  title = "Users Created",
  value = 20,
  PercentValue = 2.9,
  bgColor = "bg-customPurple",
  textColor = "text-customWhite", // Default value for bgColor
}) => {
  return (
    <div
      className={`w-full max-w-[40rem] ${bgColor} px-4 py-5 rounded-2xl ${textColor}`}>
      <div>
        <p className="text-xl">{title}</p>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl">{value}k</h1>
        <PercentageIcon PercentValue={PercentValue} />
      </div>
    </div>
  );
};

StatCardSmall.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  PercentValue: PropTypes.number,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default StatCardSmall;
