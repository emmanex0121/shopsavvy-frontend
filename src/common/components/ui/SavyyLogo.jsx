import PropTypes from "prop-types";
import savvyLogoPurple from "../../../assets/images/shopsavvy-logo.png";
import savvyLogoWhite from "../../../assets/images/shopsavvy-white.svg";
import bgImage from "../../../assets/images/bg-cart-large.jpg";

const SavyyLogo = ({ width = "20vh", widthSm = "100%" }) => {
  return (
    <>
      <div className="hidden md:block lg:block text-center" style={{ width }}>
        <img
          className="hidden w-full h-auto md:block lg:block"
          src={savvyLogoPurple}
          alt="shopsavvy-logo"
        />
      </div>
      <div
        className="flex items-center justify-center h-[20vh] md:hidden lg:hidden mb-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          width: widthSm,
          overflow: "hidden",
          objectFit: "contain",
        }}>
        <img
          className="block h-auto"
          src={savvyLogoWhite}
          alt="shopsavvy-logo"
        />
      </div>
    </>
  );
};

// Define PropTypes
SavyyLogo.propTypes = {
  width: PropTypes.string,
  widthSm: PropTypes.string,
};

export default SavyyLogo;
