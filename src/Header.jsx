import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-content">
        <Link to="/" className="logo">
          Blog App
        </Link>
      </div>
    </header>
  );
}
