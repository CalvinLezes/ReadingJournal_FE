import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>ReadingJournal</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Books</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
          <li>
            <Link to="/serieses">Serieses</Link>
          </li>
          <li>
            <Link to="/stats">Statistics</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
