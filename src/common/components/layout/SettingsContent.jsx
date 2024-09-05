import CustomCollapse from "../ui/CustomCollapse";
import NewsLetter from "../ui/NewsLetter";
import CustomButton from "../ui/CustomButton";
const SettingsContent = () => {
  const handleClick = () => {
    alert("Subscribed");
  };
  return (
    <div className="max-w-[50rem] mx-auto mt-10">
      {/* <span>This Is Settings Content</span> */}
      <div className="w-full mb-16">
        <CustomCollapse />
      </div>
      <div>
        <NewsLetter />
        <div className="flex items-center justify-center mt-5">
          <CustomButton value="Subscribe" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;
