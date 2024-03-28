import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const { username } = location.state || "Guest";
  const email = location.state?.email || "Guest";
  // const tasks = location.state?.tasks;
  return (
    <>
      <div>Hi, {username}</div>
      <div>{email}</div>
    </>
  );
}
