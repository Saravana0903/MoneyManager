import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].displayText,
    balance: 0,
    income: 0,
    expenses: 0,
    transactionList: [],
  }

  changeType = event => {
    this.setState({type: event.target.value})
  }

  changeTitle = event => {
    this.setState({title: event.target.value})
  }

  changeAmount = event => {
    this.setState({amount: event.target.value})
  }

  clickDeleteBtn = id => {
    const {transactionList, balance, income} = this.state
    const dropItem = transactionList.filter(each => each.id === id)
    console.log(dropItem)
    const newList = transactionList.filter(each => each.id !== id)
    if (dropItem[0].type === 'Income') {
      console.log(balance - dropItem.amount)
      console.log('HI')
      this.setState({
        transactionList: newList,
        balance: parseInt(balance) - parseInt(dropItem[0].amount),
        income: parseInt(income) - parseInt(dropItem[0].amount),
      })
    } else {
      console.log('hi')
      this.setState(prev => ({
        transactionList: newList,
        balance: parseInt(prev.balance) + parseInt(dropItem[0].amount),
        expenses: parseInt(prev.expenses) - parseInt(dropItem[0].amount),
      }))
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const transaction = {
      id: v4(),
      title,
      amount,
      type,
    }
    if (type === 'Income') {
      this.setState(prev => ({
        title: '',
        amount: '',
        balance: parseInt(prev.balance) + parseInt(amount),
        income: parseInt(prev.income) + parseInt(amount),
        transactionList: [...prev.transactionList, transaction],
      }))
    } else {
      this.setState(prev => ({
        title: '',
        amount: '',
        balance: parseInt(prev.balance) - parseInt(amount),
        expenses: parseInt(prev.expenses) + parseInt(amount),
        transactionList: [...prev.transactionList, transaction],
      }))
    }
  }

  render() {
    const {
      title,
      amount,
      type,
      balance,
      income,
      expenses,
      transactionList,
    } = this.state
    console.log(balance, income, expenses)

    return (
      <div className="container bg-con">
        <div className="row">
          <div className="col-12 header-div">
            <h1 className="head text-success" style={{fontSize: 30}}>
              Hi, Saravana
            </h1>
            <p className="para">
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <div className="col-12 mt-4 mb-4">
            <MoneyDetails
              balance={balance}
              income={income}
              expenses={expenses}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div className="col-5 form-div">
              <h1 style={{fontSize: 36}}>Add Transaction</h1>
              <label htmlFor="title" className="labelEle">
                TITLE
              </label>
              <input
                type="text"
                className="inpEle form-control w-50"
                placeholder="TITLE"
                value={title}
                id="title"
                onChange={this.changeTitle}
              />
              <label htmlFor="amount" className="labelEle">
                AMOUNT
              </label>
              <input
                type="text"
                className="inpEle form-control w-50"
                placeholder="AMOUNT"
                value={amount}
                id="amount"
                onChange={this.changeAmount}
              />

              <select
                className="form-control w-50"
                onChange={this.changeType}
                defaultValue={type}
              >
                {transactionTypeOptions.map(each => (
                  <option id={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button
                className="btn btn-outline-primary w-50 mt-4"
                style={{alignSelf: 'center'}}
                type="submit"
                onClick={this.handleSubmit}
              >
                Add
              </button>
            </div>
            <div className="col-6 transaction-div">
              <h1 style={{fontSize: 36}}>History</h1>
              <ul className="list-con p-3">
                <li className="list-tra-item">
                  <p className="para1">title</p>
                  <p className="para1">amount</p>
                  <p className="para1">type</p>
                  <p className="para1">del</p>
                </li>
                {transactionList.map(each => (
                  <TransactionItem
                    itemDetails={each}
                    key={each.id}
                    clickDeleteBtn={this.clickDeleteBtn}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
