import ManageBusinesses from "../components/ManageBusinesses";
import NavBar from "../components/NavBar";
import { useAuth } from "../context/AuthContext";

const Account = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <NavBar />
      {user ? (
        <div className="flex flex-col items-center w-full justify-evenly">
          <header className="py-6">
            <h1 className="text-2xl font-bold text-center">
              Welcome, {user.name}!
            </h1>
            <h1 className="font-semibold text-center">Manage My Businesses</h1>
          </header>
          <ManageBusinesses />
          <button onClick={logout} className="mt-4 btn btn-danger ">
            Logout
          </button>
        </div>
      ) : (
        <p>Please log in to view your account details.</p>
      )}
    </div>
  );
};

export default Account;
