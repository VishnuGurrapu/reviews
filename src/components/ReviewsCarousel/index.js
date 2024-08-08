import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }

  onClickNext = () => {
    const {reviewsList} = this.props
    const l = reviewsList.length
    this.setState(prevState => {
      if (prevState.index === l - 1) {
        return {index: prevState.index}
      }
      return {index: prevState.index + 1}
    })
  }

  onClickPrev = () => {
    this.setState(prevState => {
      if (prevState.index === 0) {
        return {index: prevState.index}
      }
      return {index: prevState.index - 1}
    })
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[index]

    return (
      <div className="bgContainer">
        <h1 className="Heading">Reviews</h1>
        <div className="Container">
          <button
            data-testid="leftArrow"
            className="btn"
            onClick={this.onClickPrev}
          >
            <img
              className="arrow"
              alt="left arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
            />
          </button>
          <div className="reviewContainer">
            <h1 className="username">{username}</h1>
            <img className="profile" src={imgUrl} alt={username} />
            <h2 className="companyname">{companyName}</h2>
            <p className="description">{description}</p>
          </div>
          <button
            data-testid="rightArrow"
            className="btn"
            onClick={this.onClickNext}
          >
            <img
              className="arrow"
              alt="left arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
