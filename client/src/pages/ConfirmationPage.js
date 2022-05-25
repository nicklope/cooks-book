import { useParams, useNavigate } from 'react-router-dom'
import trash from '../images/trashcan.png'
import axios from 'axios'

const ConfirmationPage = () => {
  let { ticketId } = useParams()
  let navigate = useNavigate()
  const deleteRecipe = async () => {
    await axios.delete(`/recipe/${ticketId}`)
    navigate('/')
  }

  return (
    <div>
      <div id="trashcan">
        <img src={trash} />
        <h1 id="confirm-title">Are you sure you want to delete this ticket?</h1>
        <div id="confirm-button-container">
          <button id="confirm-delete-button" onClick={() => deleteRecipe()}>
            Delete
          </button>
          <button
            id="confirm-goback-button"
            onClick={() => navigate(`/ticket/${ticketId}`)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
export default ConfirmationPage
