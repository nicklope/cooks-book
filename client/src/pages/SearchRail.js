import NavBar from '../components/NavBar'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Ticket from '../components/Ticket'
import LineHeader from '../components/LineHeader'
import { useParams } from 'react-router-dom'
import firelogored from '../images/firelogored.png'

const SearchRail = () => {
  const { searchQuery } = useParams()
  console.log(searchQuery)
  const [recipes, setRecipes] = useState([])
  const [fireChecker, setFireChecker] = useState(false)

  const grabRecipes = async () => {
    const response = await axios.get(`/search/${searchQuery}`)
    console.log(response.data.selectedRecipe)
    setRecipes(response.data.selectedRecipe)
  }
  useEffect(() => {
    grabRecipes()
    console.log('change')
  }, [fireChecker])

  let navigate = useNavigate()

  const showTicket = (ticket) => {
    navigate(`/ticket/${ticket}`)
  }
  const navNewTicket = () => {
    navigate(`/newticket`)
  }
  const fireClickTrue = (ticketId) => {
    axios.put(`/togglefiretrue/${ticketId}`)
  }
  const fireClickFalse = (ticketId) => {
    axios.put(`/togglefirefalse/${ticketId}`)
  }
  let fire = true
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div id="timeline">
        <div id="firerail-header">
          <LineHeader
            title={'Tickets on the Search Rail'}
            onClick={() => {
              navNewTicket()
            }}
          />
        </div>
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
                fireClick={async () => {
                  const response = await axios.get(`/recipe/${recipe._id}`)

                  if (response.data.recipe.fire == false) {
                    fireClickTrue(recipe._id)
                    fire = !fire
                    setFireChecker(fire)
                    console.log(fireChecker)
                  } else {
                    fireClickFalse(recipe._id)
                    fire = !fire
                    setFireChecker(fire)
                    console.log(fireChecker)
                  }
                }}
                src={recipe.fireLogo}
                key={recipe._id}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
export default SearchRail
