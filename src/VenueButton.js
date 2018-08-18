import React, {Component} from 'react'
import './App.css'

class VenueButton extends Component {

  render() {
    return (

      <div className="row no-gutters" style={{background: "#6c757d"}}>
        <div className="col-sm-12">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary" tabIndex="1" onClick={this.props.allList}>All</button>
            <button type="button" className="btn btn-secondary" tabIndex="2" onClick={this.props.wineryList}>Winery</button>
            <button type="button" className="btn btn-secondary" tabIndex="3" onClick={this.props.retailList}>Retail</button>
          </div>
        </div>
      </div>

    )
  }
}

export default VenueButton