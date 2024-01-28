import {Component} from 'react'
import './index.css'
class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  OnIncrement = () => {
    this.setState(prevState => {
      return {count: prevState.count + Math.ceil(Math.random() * 10)}
    })
  }

  render() {
    const {count} = this.state
    let value
    if (count % 2 === 0) {
      value = <p className="para">Count is Even</p>
    } else{
      value = <p className="para">Count is Odd</p>
    }

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          {value}
          <div className="button-container">
            <button className="button" onClick={this.OnIncrement}>
              Increment
            </button>
          </div>
          <p className="lower-para">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
