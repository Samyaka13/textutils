import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        {/*If we have to make navbar dark we can make it by replacing light with dark */}
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type = "button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {/* Contact Us */}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0"> */}

          {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
          {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
          {/* </form>  */}
          {/* <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div> */}
          {/* <div className="form-check text-light">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault" >
              Enable darkmode 
            </label>
          </div> */}
        </div>
        <div className= {`p-4 form-check  form-switch text-${props.mode==='light'?'dark':'light'}`}>
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode}/>
    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable dark Mode </label>
  </div>
  {/* <div className={`p-4 form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.color1}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked </label>
</div> */}

     </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Enter title",
  // about: "Write About text here"
};
