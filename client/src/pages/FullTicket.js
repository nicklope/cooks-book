import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import noimage from '../images/442344.png'
const FullTicket = () => {
  let navigate = useNavigate()
  let { ticketId } = useParams()

  const [selectedTicket, setSelectedTicket] = useState([])
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [selectedTags, setSelectedTags] = useState([])

  const getTicketById = async () => {
    const response = await axios.get(`/recipe/${ticketId}`)
    setSelectedTicket(response.data.recipe)
    setSelectedIngredients(response.data.recipe.recipeIngredients)
    setSelectedTags(response.data.recipe.tags)
    console.log(response.data.recipe)
  }

  useEffect(() => {
    getTicketById()
  }, [])

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div id="fullticket-container">
        <img
          id="fullticket-image"
          src={
            selectedTicket.recipeImage ? selectedTicket.recipeImage : noimage
          }
        />
        <h1 id="fullticket-title">{selectedTicket.recipeName}</h1>
        <h2 id="fullticket-overview">{selectedTicket.recipeOverview}</h2>
        <hr />
        <div id="fullticket-info-container">
          <div id="fullticket-ingredient-container">
            <h1>Ingredients</h1>
            <ul>
              {selectedIngredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div id="fullticket-instruction-container">
            <h1>Instructions</h1>
            <h3 id="fullticket-instructions">
              {selectedTicket.recipeInstructions}
            </h3>
          </div>
          <div id="fullticket-tag-flexcontainer">
            <h1>Tags</h1>
            <div id="fullticket-tag-container">
              <ul id="fullticket-tag-list">
                {selectedTags.map((tag) => (
                  <li>{tag.tagName}</li>
                ))}
              </ul>
            </div>
            <button
              id="add-tag-button"
              onClick={() => navigate(`/addtags/${ticketId}`)}
            >
              Tags +
            </button>
          </div>
        </div>
      </div>
      <div
        id="update-button-container"
        onClick={() => navigate(`/updateticket/${ticketId}`)}
      >
        <button id="update-button">Update Ticket</button>
      </div>
      <div id="delete-button-container">
        <button
          onClick={() => navigate(`/confirm/${ticketId}`)}
          id="delete-button"
        >
          Delete Ticket
        </button>
      </div>
    </div>
  )
}

export default FullTicket
