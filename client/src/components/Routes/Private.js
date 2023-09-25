import { useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get("/api/v1/auth/user-auth");
        if (!res.data.ok) {
          // If the user is not authenticated, you can redirect them to a login page
          // For example, you can use React Router's `useNavigate` to navigate to a login page
          // Or you can set a state variable to handle unauthorized access
        }
      } catch (error) {
        // Handle any errors that occur during the request
        console.error(error);
      }
    };

    if (auth?.token) authCheck();
  }, [auth?.token]);

  // Render the Outlet directly when the user is authenticated
  return auth?.token ? <Outlet /> : <Spinner />;
}
