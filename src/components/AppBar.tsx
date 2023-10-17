import { Link } from "react-router-dom";

function AppBar() {
  return (
    <nav>
      <Link to="/stopwatch">StopWatch</Link>
      <Link to="/countdown">CountDown</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default AppBar;
