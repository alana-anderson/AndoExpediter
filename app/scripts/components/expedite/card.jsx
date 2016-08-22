import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';


/*
 * Card
 * Displays card details
 */
const CardPropTypes = {
  details: PropTypes.object.isRequired,
  handleCardPickUpStatus: PropTypes.func.isRequired,
};

class Card extends React.Component {

  render() {
    const card = this.props.details;

    return (
      <div className="card" key={card.id}>
        <div className="row card-content">
          <div className="col-md-10">
            <h4><strong>Order #: </strong>000{card.id}</h4>
            <p><strong>Customer: </strong>{card.customer}</p>
            <p><strong>Address: </strong>{card.address}</p>
            <hr />
            <p><strong>Courier: </strong>{card.courier}</p>
            <p><strong>ETA: </strong>{card.eta} mins</p>
          </div>

          <div className="col-md-2">
            <a
              id={card.id}
              className="btn brand full-width"
              onClick={this.props.handleCardPickUpStatus}
            >
              Picked Up
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
