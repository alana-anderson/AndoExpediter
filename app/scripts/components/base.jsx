import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './nav.jsx';
import Orders from './expedite/orders.jsx';
import Complete from './expedite/complete.jsx';


/*
 * Base
 * Base entry jsx component
 */
class Base extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalOrders: 0,
      completeOrders: [],
      isKitchenClosed: false,
    };

    [
      'getPickedUpCards',
      'getTotalOrders',
      'getKitchenOperationStatus',
    ].forEach(method => { this[method] = this[method].bind(this); });
  }


  getKitchenOperationStatus(bool) {
    // Checks for kitchen open/closed status
    const status = Boolean(bool);
    this.setState({ isKitchenClosed: status });
  }


  getTotalOrders(amount) {
    this.setState({ totalOrders: amount });
  }


  getPickedUpCards(card) {
    // Grabs 'completed' cards and places into 'Picked Up'
    const completed = this.state.completeOrders;
    completed.push(card);
    this.setState({ completeOrders: completed });
  }


  render() {
    return (
      <div>
        <Navigation
          getKitchenOperationStatus={this.getKitchenOperationStatus}
        />

        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>Orders ({this.state.totalOrders})</h2>
              <Orders
                getTotalOrders={this.getTotalOrders}
                getPickedUpCards={this.getPickedUpCards}
                isKitchenClosed={this.state.isKitchenClosed}
              />
            </div>

            <div className="col-lg-4">
              <h2>Picked Up ({this.state.completeOrders.length})</h2>
              <Complete
                complete={this.state.completeOrders}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Base />, document.getElementById('base'))
