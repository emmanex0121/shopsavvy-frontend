import DropDownSelect from "../ui/DropDownSelect";
import OverviewCard from "../ui/OverviewCard";
import StatCardSmall from "../ui/StatCardSmall";
// import DashboardLayout from "./DashboardLayout";
import "../../../index.css";

const PlatformPerfomance = () => {
  return (
    <div>
      <div className="flex gap-5 items-center justify-between my-6 wrap-at-338px">
        <h1 className="text-3xl font-bold">Platform Perfomance</h1>
        <DropDownSelect />
      </div>
      <div className="flex items-center gap-6 wrap-at-400px">
        <StatCardSmall title="Users Created" value={21.9} />
        <StatCardSmall
          title="Products Created"
          value={21.9}
          PercentValue={19.1}
        />
      </div>
      <h1 className="text-3xl font-bold mt-10 mb-8">Overview</h1>
      <div className="flex gap-6 items-center wrap-at-500px">
        <OverviewCard />
        <OverviewCard title="Products Created" />
      </div>
    </div>
  );
};

export default PlatformPerfomance;
