const LineHeader = (props) => {
  return (
  <div id="lineheader">
    <div id="lineheader-title">
      <h4>{props.title}</h4>
    </div>
    <div 
      onClick={props.onClick}
      id="newpost-button">
      New Ticket +
    </div>
  </div>
  )
}
export default LineHeader