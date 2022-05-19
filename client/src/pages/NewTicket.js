import axios from 'axios'
import NavBar from '../components/NavBar'
import homeCook from '../images/2729063.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import firelogoblack from '../images/firelogo.png'

const NewTicket = () => {
  const navigate = useNavigate()
  const [formValue, setFormValue] = useState({
    recipeName: '',
    recipeOverview: '',
    recipeIngredients: [],
    recipeInstructions: '',
    recipeImage: '',
    fire: false,
    fireLogo: firelogoblack
  })
  const handleChange = (event) => {
    const { name, value } = event.target
    console.log(name)
    const newValues = (prevState) => {
      if (name === 'recipeIngredients') {
        const arr = event.target.value.split(',')
        console.log(arr)
        return {
          ...prevState,
          [name]: [...arr]
        }
      }
      return {
        ...prevState,
        [name]: value
      }
    }
    setFormValue(newValues)
  }

  const createRecipe = async () => {
    axios.post('http://localhost:3001/createrecipe', formValue)
    navigate('/')
  }

  const {
    recipeName,
    recipeOverview,
    recipeInstructions,
    recipeImage,
    recipeIngredients
  } = formValue
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div id="newticket-image-container">
        <img id="newticket-image" src={homeCook} />
      </div>
      <div id="newticket-content-container">
        <h1 id="newticket-title">Post a New Ticket</h1>
        <section id="input-section">
          <h2>Name</h2>
          <input
            className="form"
            id="recipe-name-input"
            type="text"
            name="recipeName"
            placeholder="Name of the Recipe"
            value={recipeName}
            onChange={handleChange}
          />
          <h2>Image</h2>
          <input
            className="form"
            id="recipe-image-input"
            type="text"
            name="recipeImage"
            placeholder="Image URL"
            value={recipeImage}
            onChange={handleChange}
          />
          <h2>Overview (2-3 sentences)</h2>
          <textarea
            className="form"
            id="recipe-overview-input"
            type="textarea"
            name="recipeOverview"
            placeholder="Share a Brief overview of the recipe"
            value={recipeOverview}
            onChange={handleChange}
          />

          <h2>Ingredients (Seperated by commas)</h2>
          <textarea
            className="form"
            id="recipe-ingredient-input"
            type="text"
            name="recipeIngredients"
            placeholder="Add Ingredients and measurements seperated by commas (ingredient1, ingredient2, etc)..."
            value={recipeIngredients}
            onChange={handleChange}
          />
          <h2>Instructions</h2>
          <textarea
            className="form"
            id="recipe-instructions-input"
            type="text"
            name="recipeInstructions"
            placeholder="Instructions go here..."
            value={recipeInstructions}
            onChange={handleChange}
          />
          <div id="new-button-box">
            <button id="new-ticket-submit" onClick={() => createRecipe()}>
              Submit
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
export default NewTicket
