import fullLogo from "../../assets/images/full-logo.png";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

function AdminHeader() {
  const { user, adminLogOut } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="mt-2">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid p-0">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-bs-target="navbarToggler"
          >
            <span>
              <i className="fa-solid fa-bars"></i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarToggler"
          >
            <ul className="navbar-nav mr-auto w-25"></ul>
            <a className="navbar-brand p-0" href="#">
              <img className="logo" src={fullLogo}></img>
            </a>
            <ul className="navbar-nav ml-auto w-25 justify-content-end">
              {/* <li className="nav-item dropdown-container">
                <a
                  className="btn dropdown-toggle nav-link"
                  href="#"
                  role="button"
                  id="languagesDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  En
                </a>
                <ul
                  className="dropdown-menu p-3"
                  aria-labelledby="languagesDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <p>English</p>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <p className="th-option">ไทย</p>
                    </a>
                  </li>
                </ul>
              </li> */}
              {user ? (
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      adminLogOut();
                      navigate("/admin/login");
                    }}
                
                  >
                    Log Out
                  </a>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AdminHeader;
