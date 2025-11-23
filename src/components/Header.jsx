import { Link, useLocation } from 'react-router-dom';
import CartIcon from './CartIcon';

function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className="navbar-brand" to="/">
            <span>Feane</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mx-auto ">
              <li className={`nav-item ${isActive('/')}`}>
                <Link className="nav-link" to="/">
                  Home {location.pathname === '/' && <span className="sr-only">(current)</span>}
                </Link>
              </li>
              <li className={`nav-item ${isActive('/menu')}`}>
                <Link className="nav-link" to="/menu">
                  Menu {location.pathname === '/menu' && <span className="sr-only">(current)</span>}
                </Link>
              </li>
              <li className={`nav-item ${isActive('/about')}`}>
                <Link className="nav-link" to="/about">
                  About {location.pathname === '/about' && <span className="sr-only">(current)</span>}
                </Link>
              </li>
              <li className={`nav-item ${isActive('/book')}`}>
                <Link className="nav-link" to="/book">
                  Book Table {location.pathname === '/book' && <span className="sr-only">(current)</span>}
                </Link>
              </li>
            </ul>
            <div className="user_option">
              <a href="" className="user_link">
                <i className="fa fa-user" aria-hidden="true"></i>
              </a>
              <a className="cart_link" href="#">
                <CartIcon />
              </a>
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
              <a href="" className="order_online">
                Order Online
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

