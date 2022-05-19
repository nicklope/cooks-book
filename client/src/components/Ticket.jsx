
import noimage from '../images/442344.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import fireLogo from '../images/firelogo.png'
import fireLogoRed from '../images/firelogored.png'
const Ticket = (props) => {
const [checked, setChecked] = useState(false)
const fireClickTrue = (ticketId) => {
  axios.put(`/togglefiretrue/${ticketId}`)
  setChecked(true)
}
const fireClickFalse = (ticketId) => {
  axios.put(`/togglefirefalse/${ticketId}`)
  setChecked(false)
}
useEffect(()=>{
  if(props.fire){
    setChecked(true)
  }
},[])
  return (
    <div id="ticket">
      <div id="ticket-start">
        <img id="ticket-image" src={props.ticketImage ? props.ticketImage : noimage}/>
      </div>
      <div id="ticket-middle">
        <h1 id="ticket-name">{props.ticketName}</h1>
        <h3 id="ticket-overview">{props.ticketOverview}</h3>
        <button id="view-ticket-button" onClick={props.onClick}>View Full Ticket</button>
      </div>
      <div id="ticket-end">
        <input type="checkbox"  id="myCheckbox"  checked={checked}/>
        <label for="myCheckbox" id="fire-checkbox"  >
          <img  id="fire-button" src={checked ? fireLogoRed : fireLogo} onClick={ checked ? () => fireClickFalse(props.imgKey) : () => fireClickTrue(props.imgKey)}/>
        </label>
        {/* <img id='fire-button' onClick={props.fireClick} src={props.src} key={props.imgKey}/> */}
      </div>
    </div>
  )
}
export default Ticket