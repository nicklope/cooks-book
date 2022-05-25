import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const TagInput = () => {
  const {ticketId} = useParams()
  const navigate = useNavigate()
  const [formValue, setFormValue] = useState({
    tagName: ""
  })
  const [submitted, setSubmitted] = useState(false)
  
  const handleChange = (event) => {
    const { name, value } = event.target
    const newValues = (prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    }
    
    setFormValue(newValues)
    console.log(formValue)
  }

  const createTags = async (e) => {
    e.preventDefault()
    setSubmitted(true)
    axios.post(`/createtags/${ticketId}`, formValue)
    
  }

  const {tagName} = formValue
  return(
    
    <div> 
      {submitted ? ( console.log("submitted")) :(
      <form onSubmit={createTags}>     
        <input
    className="tag-form"
    id="tag-input"
    type="text"
    name="tagName"
    placeholder="tag, you're it!"
    onChange={handleChange}
    />
      <button id="submittags-button" type="submit">Submit</button>
    </form> )    
}
  </div>
  )
}
export default TagInput