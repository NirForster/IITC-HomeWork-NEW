import logo from "../assets/business-finder-logo.png";
import { LoginCardWithForm } from "../components/LoginCardForm";

const Login = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <a href="#" className="flex items-center gap-2 self-center font-medium">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <img
            src={logo}
            alt="logo"
            className="max-w-[55px] h-[25px] rounded-md"
          />
        </div>
        Dream Works Inc.
      </a>
      <LoginCardWithForm />
    </div>
  );
};

export default Login;
