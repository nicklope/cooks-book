import NavBar from '../components/NavBar'
import tagImage from '../images/tag.png'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import TagInput from '../components/TagInput'
const AddTags = () => {
  const navigate = useNavigate()
  const { ticketId } = useParams()
  const [tagInputs, setTagInputs] = useState([])
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div id="addtags-image-container">
        <img id="addtags-image" src={tagImage} />
      </div>
      <div id="addtags-content-container">
        <h1 id="addtags-title">Add Tags</h1>
        <div id="tag-form">{tagInputs}</div>
        <div id="add-subtract-container">
          <button
            id="add-taginput-button"
            onClick={() => setTagInputs([...tagInputs, <TagInput />])}
          >
            +
          </button>
          <button
            id="subtract-taginput-button"
            onClick={() => setTagInputs([...tagInputs].splice(1))}
          >
            -
          </button>
        </div>
        <div id="submittags-button-container"></div>
        <div id="goback-button-container">
          <button
            onClick={() => navigate(`/ticket/${ticketId}`)}
            id="goback-button"
          >
            Back to Ticket
          </button>
        </div>
      </div>
    </div>
  )
}
export default AddTags
