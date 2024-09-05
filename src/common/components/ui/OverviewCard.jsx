import SimpleBarChart from "../layout/BarChart";
import StatCardSmall from "./StatCardSmall";
import PropTypes from "prop-types";

const OverviewCard = ({
  title = "Users Created",
  value = 20,
  PercentValue = 2.9,
  bgColor = "bg-customWhite",
  textColor = "text-customBlack",
}) => {
  return (
    <div className="w-full max-w-[40rem]">
      <StatCardSmall
        title={title}
        bgColor={bgColor}
        textColor={textColor}
        value={value}
        PercentValue={PercentValue}
      />

      <SimpleBarChart />
    </div>
  );
};

OverviewCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  PercentValue: PropTypes.number,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default OverviewCard;
