import logo from "../assets/business-finder-logo.png";
import { SignUpCardForm } from "../components/SignUpCardForm";

const Signup = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <img
        src={logo}
        alt="logo"
        className="max-w-[325px] h-[150px] rounded-md"
      />
      <div className="p-4">
        <SignUpCardForm />
      </div>
    </div>
  );
};

export default Signup;
