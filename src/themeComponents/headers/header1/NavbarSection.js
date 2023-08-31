import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Menu from "./assets/images/menu.svg";
import BagIcon from "./assets/images/bag.svg";
import Search from "./assets/images/search.svg";
import Like from "./assets/images/like.svg"
import User from "./assets/images/user.svg"
import { useRouter } from "next/router";
import logo from "./assets/images/logo.png";
import Link from "next/link";
import Image from "next/future/image";
import React, { useState } from "react";
import CartSideBar from "./CartSideBar";
import SearchModal from "./SearchModal";
import { FormattedMessage } from "react-intl";
import MobileNav from "./MobileNav";

const NavbarSection = (props) => {
  const { pathname } = useRouter();
  const [showHiddenSidebars, setShowHiddenSidebars] = useState(false);
  const toggleDropdown = () => setShowHiddenSidebars(!showHiddenSidebars);

  //search state
  const [searchShow, setSearchShow] = useState(false);

  //cart Sidebar state
  const [showSideCart, setShowSideCart] = useState(false);
  const toggleSideCart = () => setShowSideCart(!showSideCart);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navi">
        <Container>
          <div className="navbar-section">

            <Link href="/">
              <a className="navbar-brand">
              <Image src={logo} alt="logo image" width={100} height={60} />

              </a>
            </Link>
            {/* <Navbar.Brand href="/">
            </Navbar.Brand> */}
            <Nav className="nav-list">
              <Link href="/">
                <a
                  className={pathname === "/" ? "nav-link active" : "nav-link"}
                >
                  <FormattedMessage id="home" />
                </a>
              </Link>
              <Link href="/products">
                <a
                  className={
                    pathname === "/products" ? "nav-link active" : "nav-link"
                  }
                >
                  <FormattedMessage id="products" />
                </a>
              </Link>
              <Link href="/about">
                <a
                  className={
                    pathname === "/about" ? "nav-link active" : "nav-link"
                  }
                >
                  <FormattedMessage id="about" />
                </a>
              </Link>
              <Link href="/rules">
                <a
                  className={
                    pathname === "/rules" ? "nav-link active" : "nav-link"
                  }
                >
                  <FormattedMessage id="terms" />
                </a>
              </Link>
              <Link href="/blogs">
                <a
                  className={
                    pathname === "/blogs" ? "nav-link active" : "nav-link"
                  }
                >
                  <FormattedMessage id="blog" />
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className={
                    pathname === "/contact" ? "nav-link active" : "nav-link"
                  }
                >
                  <FormattedMessage id="contact" />
                </a>
              </Link>
            </Nav>


            <div className="search-box">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="اكتب بحثك هنا" className="form-control"/>
                  <span><Search/></span>
                </div>
              </form>

            </div>

            <div className="navbar-details">
              <div className="sub-details">
                <Link href="/login">
                  <a className="nav-login">
                    <User />
                  </a>
                </Link>
              </div>

              <div className="sub-details">
                <button className="salla-link" onClick={toggleSideCart}>
                  <div className="salla-notification">
                    <Like />
                    <span>1</span>
                  </div>
                </button>
              </div>

              <div className="sub-details">
                <button className="salla-link" onClick={toggleSideCart}>
                  <div className="salla-notification">
                    <BagIcon />
                    <span>1</span>
                  </div>
                </button>
              </div>

              <div className="sub-details toggle-btn">
                <button onClick={toggleDropdown}>
                  <Menu />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>

      {/* <CartSideBar
        toggleSideCart={toggleSideCart}
        showSideCart={showSideCart}
      />

      <MobileNav
        showHiddenSidebars={showHiddenSidebars}
        setShowHiddenSidebars={setShowHiddenSidebars}
      />

      {searchShow && <SearchModal setSearchShow={setSearchShow} />} */}
    </>
  );
};

export default NavbarSection;
