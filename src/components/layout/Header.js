import fullLogo from "../../assets/images/full-logo.png";
import { CartItemContext } from "../../contexts/CartItemContext";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Header() {
  const { user, logOut } = useContext(AuthContext);
  const { categories } = useContext(CategoriesContext);
  const { itemCount, setItemCount } = useContext(CartItemContext);

  return (
    <>
      {/* ----- Header ----- */}
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
              <ul className="navbar-nav mr-auto w-25">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown-container">
                  <a
                    className="btn dropdown-toggle nav-link"
                    href="#"
                    role="button"
                    id="productsDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <ul
                    className="dropdown-menu p-3"
                    aria-labelledby="productsDropdown"
                  >
                    {/* <li>
                      <a className="dropdown-item" href="#">
                        <p>
                          <strong>New Arrivals</strong>
                        </p>
                      </a>
                    </li> */}
                    {categories.map((category) => (
                      <li>
                        <a
                          className="dropdown-item"
                          href={`/categories/${category.id}`}
                        >
                          <p>{category.nameEn}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/about-us">
                    About Us
                  </a>
                </li>
              </ul>
              <a className="navbar-brand p-0" href="/">
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
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fas fa-search"></i>
                  </a>
                </li> */}
                {user ? (
                  <>
                    <li className="nav-item">
                      <a
                        className="nav-link position-relative px-3"
                        href="/cart"
                      >
                        <i className="fas fa-shopping-cart text-dark"></i>
                        {itemCount ? (
                          <span className="cart-count position-absolute">
                            {itemCount <= 10 ? itemCount : "10+"}
                          </span>
                        ) : null}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/profile">
                        <i className="fas fa-user-circle"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={logOut} href="/">
                        Log Out
                      </a>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      Log In
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
