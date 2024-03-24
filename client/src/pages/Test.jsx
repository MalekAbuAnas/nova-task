import { useLocation } from "react-router-dom";

export default function Test() {
  const location = useLocation();
  const username = location.state?.username || "Guest";

  return <div>Hi, {username}</div>;
}
