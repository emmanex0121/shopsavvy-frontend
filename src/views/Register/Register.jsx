// import bg from "../../assets/images/bg.png";
import RegisterForm from "../../common/components/ui/RegisterForm";
import bgImage from "../../assets/images/bg-cart-large.jpg";
import SavyyLogo from "../../common/components/ui/SavyyLogo";

const Register = () => {
  return (
    <div
      className="h-full absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}>
      <section className="w-full md:w-1/2 h-[100vh] fixed right-0 bg-black flex flex-col items-center px-5">
        <SavyyLogo width="10vh" />
        <RegisterForm />
      </section>
    </div>
  );
};

export default Register;
