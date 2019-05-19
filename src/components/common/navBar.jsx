import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }
  state = {
    classes: {
      showMenu: false,
      classMenubtn: "menu-btn",
      classMenu: "menu",
      classMenuNav: "menu-nav",
      classMenuBranding: "menu-branding",
      classNavItem: "nav-item",
      classNavLink: "nav-link"
    },
    navItems: [
      {
        to: "/home",
        text: "Home"
      },
      {
        to: "/about",
        text: "About-me"
      },
      {
        to: "/work",
        text: "My Work"
      },
      {
        to: "/contactMe",
        text: "How to Reach me"
      }
    ]
  };

  toggleMenu() {
    const classes = { ...this.state.classes };
    if (!classes.showMenu) {
      classes.showMenu = true;
      classes.classMenubtn = "menu-btn close";
      classes.classMenu = "menu show";
      classes.classMenuNav = "menu-nav show";
      classes.classMenuBranding = "menu-branding show";
      classes.classNavItem = "nav-item show";
    } else {
      classes.showMenu = false;
      classes.classMenubtn = "menu-btn";
      classes.classMenu = "menu";
      classes.classMenuNav = "menu-nav";
      classes.classMenuBranding = "menu-branding";
      classes.classNavItem = "nav-item";
    }
    this.setState({ classes });
    //console.log(this.state.classes);
  }
  hideMenu() {
    const classes = { ...this.state.classes };
    classes.showMenu = false;
    classes.classMenu = "menu";
    classes.classMenubtn = "menu-btn";
    classes.classMenuNav = "menu-nav";
    classes.classMenuBranding = "menu-branding";
    classes.classNavItem = "nav-item";
    this.setState({ classes });
    console.log("test");
  }
  render() {
    return (
      <React.Fragment>
        <div
          className={this.state.classes.classMenubtn}
          onClick={this.toggleMenu}
        >
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>
        <nav className={this.state.classes.classMenu}>
          <div className={this.state.classes.classMenuBranding}>
            <div className="portrait" />
          </div>
          <ul className={this.state.classes.classMenuNav}>
            {this.state.navItems.map((navItem, i) => (
              <li
                key={i}
                className={this.state.classes.classNavItem}
                onClick={this.hideMenu}
              >
                <NavLink to={navItem.to} className="nav-link">
                  {navItem.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
