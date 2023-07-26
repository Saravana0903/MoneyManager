// Write your code here
import './index.css'

const TransactionItem = props => {
  const {itemDetails, clickDeleteBtn} = props
  const {title, amount, type, id} = itemDetails

  const delButton = () => {
    clickDeleteBtn(id)
  }
  return (
    <li className="list-tra-item">
      <p className="para1" style={{textAlign: 'center'}}>
        {title}
      </p>
      <p className="para1" style={{textAlign: 'center'}}>
        {amount}
      </p>
      <p className="para1" style={{textAlign: 'center'}}>
        {type}
      </p>
      <button
        className="para1 del-btn"
        type="button"
        onClick={delButton}
        style={{textAlign: 'center'}}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="del-icon"
        />
      </button>
    </li>
  )
}
export default TransactionItem
