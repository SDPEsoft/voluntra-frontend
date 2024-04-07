import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { useDispatch } from "react-redux";
import { updateToast } from "../../redux/toast";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("Protected Route", user);

  useEffect(() => {
    if (user === null) {
      dispatch(
        updateToast({
          show: "true",
          message: "Please Login",
          status: "error",
          variant: "danger",
        })
      );
      navigate("/", { replace: true });
    }
  }, [navigate, user]);

  if (!user) return null;
  return children;
}
