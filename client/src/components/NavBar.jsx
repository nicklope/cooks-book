import logo from '../images/481490.png'
import firelogo from '../images/firelogo.png'
import firelogored from '../images/firelogored.png'
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
    <h1>cooksbook</h1>
    <img 
      id="navicon" 
      src ={(logo)} 
      alt ="logo"
      onClick={()=>navigate('/')}
      />
    
    </div>
    
    <div  id="search-form">
      <img id='fireicon' src={props.firelogored ? props.firelogored : firelogo} onClick={()=>navigate("/firerail")}/>
      <h1 id='search-title'>search:</h1>
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