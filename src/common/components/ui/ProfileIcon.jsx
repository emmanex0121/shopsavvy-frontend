import { UserOutlined } from "@ant-design/icons";

const ProfileIcon = () => {
  return (
    <div className="flex justify-center w-10 h-10 rounded-full object-contain bg-customPurple">
      <div>
        <UserOutlined className="w-full h-full text-3xl" />
      </div>
    </div>
  );
};

export default ProfileIcon;
