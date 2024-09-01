import { useSelector } from "react-redux";

export const ShowOnAdmin = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const userRole = useSelector((state) => state.auth.activeUser);

  if (
    isLoggedIn &&
    (userRole?.role === "admin" || userRole?.role === "pastor")
  ) {
    return <>{children}</>;
  }
  return null;
};
