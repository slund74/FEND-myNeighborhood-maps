import React, {Component} from 'react'
import './App.css'

class CardList extends Component {

  render() {
    return (

      <div className="row">
        <div className="card-deck mx-auto col-sm-12 col-lg-12">
          {this.props.markerList.map((card, index) =>
           /* <div className="col-sm-12 col-lg-6" key={card.id}> */
              <div className="card" key={card.id}>
                  <h5 className="card-header">{card.type}</h5>
                    <div className="card-body">
                      <h5 className="card-title">{card.name}</h5>
                      <p className="card-text">{card.address}</p>
                      <button type="button" tabIndex={3 + index} className="btn btn-primary" onClick={() => this.props.openInfoWindow(card.id, card.zip)}>More Information</button>
                    </div>

            </div>)}
        </div>
      </div>

    )
  }
}

export default CardList