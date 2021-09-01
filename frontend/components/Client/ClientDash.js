import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Feed from "./feed/Feed";
import Rightbar from "./rightbar/Rightbar";
import "./clientDash.css"

export default function ClientDash(setAuth) {
  return (
    <div>
      <Navbar  setAuth={setAuth} />
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbar/>
      </div>
    </div>
  );
}