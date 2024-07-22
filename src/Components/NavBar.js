import React, { useEffect } from 'react'
import { Link,useLocation } from 'react-router-dom'


const NavBar = () => {
  const location=useLocation();
  useEffect(() => {
  }, [location])
  

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link className={`nav-link ${location.pathname==='/home'?"active":""}`} to="/home">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/business'?"active":""}`} to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/entertainment'?"active":""}`} to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/health'?"active":""}`} to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/science'?"active":""}`} to="/science">Science</Link>
            </li> <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/sports'?"active":""}`} to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/technology'?"active":""}`} to="/technology">Technology</Link>
            </li>
            <li className="nav-item">
              {/* <Link className={`nav-link ${location.pathname==='/home'?"active":""}`} to="/about">About</Link> */}
            </li>
          </ul>
        </div>
      </nav>
    </>
  )

}

export default NavBar
