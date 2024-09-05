// import bg from "../../assets/images/bg.png";
import LoginForm from "../../common/components/ui/LoginForm";
import bgImage from "../../assets/images/bg-cart-large.jpg";
import SavyyLogo from "../../common/components/ui/SavyyLogo";

const Login = () => {
  return (
    <div
      className="h-full absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}>
      <section className="w-full md:w-1/2 h-[100vh] fixed right-0 bg-customGrey md:bg-black lg:bg-black flex flex-col items-center">
        <SavyyLogo width="30vh" />
        <div className="w-full flex items-center justify-center px-10">
          <LoginForm />
        </div>
      </section>
    </div>
  );
};

export default Login;
