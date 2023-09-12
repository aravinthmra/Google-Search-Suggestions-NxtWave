import './index.css'

const SuggestionItem = props => {
  const {suggestion, onExpandInput} = props
  const clickFillArrow = () => {
    onExpandInput(suggestion)
  }
  return (
    <li className="list-element1">
      <p>{suggestion}</p>
      <img
        className="fillArrow-image1"
        alt="arrow"
        onClick={clickFillArrow}
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}

export default SuggestionItem
