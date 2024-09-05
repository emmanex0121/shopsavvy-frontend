import { useState } from "react";

const InputCurrency = () => {
  const [value, setValue] = useState("");

  // Format the input value as currency
  const formatCurrency = (value) => {
    const formattedValue = value.replace(/\D/g, ""); // Remove non-numeric characters
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(formattedValue / 100); // Divide by 100 to handle cents
  };

  // Handle input change and update value
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(formatCurrency(inputValue));
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className="bg-transparent border-customBlack border-2 rounded-xl w-full min-w-[7rem] p-2" // Customize styles as needed
      placeholder="₦ 0.00"
    />
  );
};

export default InputCurrency;
