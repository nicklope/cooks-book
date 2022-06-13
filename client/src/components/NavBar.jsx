import logo from '../images/481490.png'
import firelogo from '../images/firelogo.png'
import serveicon from '../images/4483612.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const NavBar = (props) => {
 
  const navigate = useNavigate()

  const [searchQuery, setSearchQuery] = useState('')
  

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }
  
  return (
  <div id="navbar">
    <div id={"logo"}>
    <h1 id="nav-title">cooksbook</h1>
    <img 
      id="navicon" 
      src ={(logo)} 
      alt ="logo"
      onClick={()=>navigate('/')}
      />
    <img
      id="serveicon"
      src={serveicon}
      />
    </div>
    <img id='fireicon' src={props.firelogored ? props.firelogored : firelogo} onClick={()=>navigate("/firerail")}/>
    <div  id="search-form">
      
    <img
      
      src={serveicon}
      />
      <form>
        <div id='search-input'>
          <label>
            <input type="text" name="search" id="search-bar" onChange={(e) => handleChange(e)} />
          </label>
          <input type="submit" value="go" id="submit-button" onClick={()=> navigate(`/search/${searchQuery}`)}/>
        </div>
      </form>
    </div>
  </div>
  )
}
export default NavBar