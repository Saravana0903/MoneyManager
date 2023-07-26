// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="main-con">
      <div className="col-3 card-con-green">
        <div className="img-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="icon"
          />
        </div>
        <div className="des-div">
          <p className="para">Your Balance</p>
          <p className="para">Rs {balance}</p>
        </div>
      </div>

      <div className="col-3 card-con-blue">
        <div className="img-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="icon"
          />
        </div>
        <div className="des-div">
          <p className="para">Your Income</p>
          <p className="para">Rs {income}</p>
        </div>
      </div>

      <div className="col-3 card-con-violet">
        <div className="img-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="icon"
          />
        </div>
        <div className="des-div">
          <p className="para">Your Expenses</p>
          <p className="para">Rs {expenses}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
