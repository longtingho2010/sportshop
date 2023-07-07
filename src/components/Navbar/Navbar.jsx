import { Alert, Badge, Box, Menu, Modal } from "@mui/material";
import {
  ArrowDropDownRounded,
  Close,
  CloseRounded,
  MenuRounded,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartState } from "../../context/Context";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
  borderRadius: 2,
};

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { totalCartItems } = CartState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authUser, setAuthUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [mendropdown, setMenDropdown] = useState(false);
  const [womendropdown, setWoenDropdown] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const location = useLocation();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setError("");
    setEmail("");
    setPassword("");
  };

  const toggleMenu = () => {
    isMenuOpened ? setIsMenuOpened(false) : setIsMenuOpened(true);
  };

  const toggleDropdown = () => {
    mendropdown ? setMenDropdown(false) : setMenDropdown(true);
  };

  const womenToggleDropdown = () => {
    womendropdown ? setWoenDropdown(false) : setWoenDropdown(true);
  };

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userdetails) => {
        console.log(userdetails);
        setError("");
        handleClose();
        setEmail("");
        setPassword("");
        navigate("/");
      })
      .catch((error) => {
        setError("invalid usename or password");
        console.log(error);
      });
  };

  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log("signed Out ");
    });
  };

  useEffect(() => {
    const check = onAuthStateChanged(auth, (user) => {
      user ? setAuthUser(user) : setAuthUser(null);
    });

    return () => {
      check();
    };
  }, []);

  useEffect(() => {
    setIsMenuOpened(false);
  }, [location]);

  return (
    <div className={active ? "container active" : "container"}>
      <div className="wrapper">
        <div className="left">
          <div className="search-container">
            <input type="text" className={active ? "input active" : "input"} />
            <Search style={{ fontSize: 16 }} />
          </div>
        </div>
        <div className="center">
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            <h1 className="logo">Calvin Shop </h1>
          </Link>
        </div>
        <div className="right">
          {!authUser ? (
            <>
              <div className="right-item signOut-btn">
                <Link
                  to="signup"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Sign Up
                </Link>
              </div>
              <div className="right-item">
                <span className="signOut-btn" onClick={handleOpen}>
                  Sign In
                </span>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="Loginbox-container">
                      <Close className="close-btn" onClick={handleClose} />
                      <div className="Loginbox-content-container">
                        <h1>LOGIN</h1>
                        {error && (
                          <Alert style={{ margin: "20px" }} severity="error">
                            {error}
                          </Alert>
                        )}
                        <form onSubmit={signIn}>
                          <input
                            required
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <input
                            required
                            type="text"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <button>Log In</button>
                        </form>
                      </div>
                    </div>
                  </Box>
                </Modal>
              </div>
            </>
          ) : (
            <div onClick={userSignOut} className="right-item signOut-btn">
              Sign Out
            </div>
          )}

          <div className="right-item">
            <Link
              to="/shoppingcart"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <Badge
                badgeContent={totalCartItems > 0 ? totalCartItems : 0}
                color="primary"
              >
                <ShoppingCart />
              </Badge>
            </Link>
          </div>
          <div className="right-item menu-icon">
            {isMenuOpened ? (
              <CloseRounded onClick={toggleMenu} />
            ) : (
              <MenuRounded onClick={toggleMenu} />
            )}
          </div>
        </div>
      </div>
      {active ? (
        <>
          <hr />
          <div className="menu">
            <div className="menu-item">
              <Link style={{ textDecoration: "none" }} to="genres/specialItems">
                <p className="menu-item-title">Special Items</p>
              </Link>
              <div className="dropdown">
                <p className="menu-item-title">
                  <Link
                    to="genres/men"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    Men{" "}
                  </Link>{" "}
                </p>

                <div className="dropdown-item">
                  <Link to="genres/men/top" style={{ textDecoration: "none" }}>
                    <p>Top & T-shirt</p>
                  </Link>
                  <Link
                    to="genres/men/bottom"
                    style={{ textDecoration: "none" }}
                  >
                    <p>Bottom</p>
                  </Link>
                  <Link
                    to="genres/men/jacket"
                    style={{ textDecoration: "none" }}
                  >
                    <p>Jacket</p>
                  </Link>
                </div>
              </div>

              <div className="dropdown">
                <p className="menu-item-title">
                  <Link
                    to="genres/women"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    Women{" "}
                  </Link>
                </p>
                <div className="dropdown-item">
                  <Link
                    to="genres/women/top"
                    style={{ textDecoration: "none" }}
                  >
                    <p>Top & T-shirt</p>
                  </Link>
                  <Link
                    to="genres/women/bottom"
                    style={{ textDecoration: "none" }}
                  >
                    <p>Bottom</p>
                  </Link>
                  <Link
                    to="genres/women/jacket"
                    style={{ textDecoration: "none" }}
                  >
                    <p>Jacket</p>
                  </Link>
                </div>
              </div>

              <Link to="genres/kids" style={{ textDecoration: "none" }}>
                <p className="menu-item-title">Kids</p>
              </Link>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      {/************************** responsive menu *************************/}
      <div className={isMenuOpened ? "res-menu active" : "res-menu"}>
        <div className="res-menu-item">
          {!authUser ? (
            <>
              <div>
                <Link
                  to="signup"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <p className="res-menu-item-title ">Sign Up</p>
                </Link>
              </div>
              <div>
                <p className="res-menu-item-title " onClick={handleOpen}>
                  Sign In
                </p>
              </div>
            </>
          ) : (
            <div onClick={userSignOut} className="signOut-btn">
              <p className="res-menu-item-title">Sign Out</p>
            </div>
          )}

          <Link style={{ textDecoration: "none" }} to="genres/specialItems">
            <p className="res-menu-item-title">Special Items</p>
          </Link>
          <div className="res-dropdown">
            <p className="res-menu-item-title">
              <Link
                to="genres/men"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Men{" "}
              </Link>{" "}
              <span>
                <ArrowDropDownRounded
                  style={{ fontSize: 50 }}
                  onClick={toggleDropdown}
                  className="dropdown-btn"
                />
              </span>
            </p>
            {mendropdown ? (
              <div className="res-dropdown-item">
                <Link to="genres/men/top" style={{ textDecoration: "none" }}>
                  <p>Top & T-shirt</p>
                </Link>
                <Link to="genres/men/bottom" style={{ textDecoration: "none" }}>
                  <p>Bottom</p>
                </Link>
                <Link to="genres/men/jacket" style={{ textDecoration: "none" }}>
                  <p>Jacket</p>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="res-dropdown">
            <p className="res-menu-item-title">
              <Link
                to="genres/women"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Women{" "}
              </Link>
              <span>
                <ArrowDropDownRounded
                  style={{ fontSize: 50 }}
                  className="dropdown-btn"
                  onClick={womenToggleDropdown}
                />
              </span>
            </p>
            {womendropdown ? (
              <div className="res-dropdown-item">
                <Link to="genres/women/top" style={{ textDecoration: "none" }}>
                  <p>Top & T-shirt</p>
                </Link>
                <Link
                  to="genres/women/bottom"
                  style={{ textDecoration: "none" }}
                >
                  <p>Bottom</p>
                </Link>
                <Link
                  to="genres/women/jacket"
                  style={{ textDecoration: "none" }}
                >
                  <p>Jacket</p>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>

          <Link to="genres/kids" style={{ textDecoration: "none" }}>
            <p className="res-menu-item-title">Kids</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
