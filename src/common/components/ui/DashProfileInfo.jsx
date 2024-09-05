import ProfileIcon from "./ProfileIcon";

const toTitleCase = (str) => {
  return str
    .toLowerCase() // Convert the entire string to lowercase first
    .split(" ") // Split the string into an array of words
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1) // Capitalize the first letter and append the rest of the word
    )
    .join(" "); // Join the words back into a single string
};

const DashProfileInfo = () => {
  const firstName = sessionStorage.getItem("firstName") || "";
  const lastName = sessionStorage.getItem("lastName") || "";

  // Combine names and convert to title case
  const fullName = `${firstName} ${lastName}`;
  const formattedName = toTitleCase(fullName);

  const email = sessionStorage.getItem("email");
  return (
    <div className="flex items-center gap-4">
      <ProfileIcon />
      <div>
        <h2 className="text-l">{formattedName}</h2>
        <p className="text-sm">{email}</p>
      </div>
    </div>
  );
};

export default DashProfileInfo;
