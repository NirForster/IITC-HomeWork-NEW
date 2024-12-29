import { useAuth } from "../context/AuthContext";

const Account = () => {
  const { user, logout } = useAuth();

  return (
    <div className="p-6">
      {user ? (
        <div>
          <h1 className="text-2xl">Welcome, {user.name}!</h1>
          <p>Email: {user.email}</p>
          <p>Current Plan: {user.plan}</p>
          <button onClick={logout} className="mt-4 btn btn-danger">
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
