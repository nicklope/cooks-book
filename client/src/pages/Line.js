import { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import Ticket from '../components/Ticket'
import LineHeader from '../components/LineHeader'
import Landing from '../components/Landing'
import { useNavigate } from 'react-router-dom'
import logo from '../images/481490.png'

const Line = () => {
  const [recipes, setRecipes] = useState([])
  const [fireChecker, setFireChecker] = useState(false)
  const [checked, setChecked] = useState(false)

  const grabRecipes = async () => {
    const response = await axios.get('/recipes')
    console.log(response.data.recipe)
    setRecipes(response.data.recipe)
  }
  useEffect(() => {
    grabRecipes()
    console.log('change')
  }, [])

  let navigate = useNavigate()

  const showTicket = (ticket) => {
    navigate(`/ticket/${ticket}`)
  }
  const navNewTicket = () => {
    navigate(`/newticket`)
  }
  const fireClickTrue = (ticketId) => {
    axios.put(`/togglefiretrue/${ticketId}`)
    setFireChecker(true)
  }
  const fireClickFalse = (ticketId) => {
    axios.put(`/togglefirefalse/${ticketId}`)
    setFireChecker(false)
  }

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Landing />
      <div id="timeline">
        <LineHeader
          title={'Tickets on the Rail'}
          onClick={() => {
            navNewTicket()
          }}
        />
        <div id="ticket-line">
          {recipes
            .slice(0)
            .reverse()
            .map((recipe) => (
              <Ticket
                ticketImage={recipe.recipeImage}
                ticketName={recipe.recipeName}
                ticketOverview={recipe.recipeOverview}
                onClick={() => {
                  showTicket(recipe._id)
                }}
                imgKey={recipe._id}
                src={recipe.fireLogo}
                key={recipe._id}
                fire={recipe.fire}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
export default Line
