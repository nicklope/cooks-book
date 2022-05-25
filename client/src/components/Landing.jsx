import logo from '../images/481490.png'
import homeCook from '../images/2729063.png'
import restaurant from '../images/4483612.png'
import { useNavigate } from 'react-router-dom'
const Landing = () => {
  const navigate = useNavigate()
  const navAbout = () => {
    navigate('/about')
  }
  return (
  <div>
    <div id='landing'> 
      <img id="homecook-landing-image"src={homeCook}/>
      <img 
        id="logo-landing-image"src={logo}
        onClick={()=> navAbout()}
        />
      <img id="restaurant-landing-image"src={restaurant}/>
    </div>
    <h1 id='landing-title'>the foodie network</h1>
  </div>
)
}
export default Landing