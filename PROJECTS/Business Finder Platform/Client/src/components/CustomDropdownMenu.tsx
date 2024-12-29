import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { AvatarDemo } from "./CustomAvatar";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CustomDropdownMenu = () => {
  const { logout } = useAuth(); // Access logout method from AuthContext
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout method
      navigate("/login"); // Redirect to login page
    } catch (err) {
      console.error("Failed to logout:", err);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <AvatarDemo></AvatarDemo>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>Log Out</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropdownMenu;
