import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createCard } from '../../helpers';
import Card from './card.jsx';


/*
 * Orders Component
 * Handles order card creation
 */
const OrdersPropTypes = {
  getTotalOrders: PropTypes.func.isRequired,
  getPickedUpCards: PropTypes.func.isRequired,
  isKitchenClosed: PropTypes.bool.isRequired,
};

class Orders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      isKitchenClosed: false,
    };

    this.interval;

    [
      '_handleCardCreation',
      'handleCardPickUpStatus'
    ].forEach(method => { this[method] = this[method].bind(this); });
  }


  componentDidMount() {
    // Create cards on dom load
    this.interval = setInterval(this._handleCardCreation, 15000);
  }


  componentWillUpdate() {
    // Will stop interval if condition is met
    if (this.props.isKitchenClosed === true) {
      clearInterval(this.interval);
    }
  }


  _handleCardCreation() {
    // Adds card obj to cards array
    const cards = this.state.cards;
    const card = createCard();
    cards.push(card);
    this.setState({ cards: cards });
    this.props.getTotalOrders(this.state.cards.length);
  }


  handleCardPickUpStatus(event) {
    // Function will remove card from orders and transfer to completed
    const id = event.target.id;
    let cards = this.state.cards;

    // Retrieves one card object
    const result = cards.find(card => card.id == event.target.id);
    this.props.getPickedUpCards(result);

    // Return new cards array
    cards = cards.filter(card => card.id != event.target.id);
    this.setState({ cards: cards });
    this.props.getTotalOrders(this.state.cards.length - 1);
  }


  render() {
    return (
      <div>
        {this.state.cards.length != 0 ? (
          <div>
            {this.state.cards.map((card, idx) => (
              <Card
                key={idx}
                details={card}
                handleCardPickUpStatus={this.handleCardPickUpStatus}
              />
          ))}
          </div>
        ) : (
          <div className="empty">
            <h3>You currently have no orders ☹</h3>
          </div>
        )}
      </div>
    );
  }
}

export default Orders;
