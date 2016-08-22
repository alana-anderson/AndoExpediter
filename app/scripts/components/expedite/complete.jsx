import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';


/*
 * Complete Component
 * Displays 'picked-up' orders
 */
const CompletePropTypes = {
  complete: PropTypes.array.isRequired,
};

class Complete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     complete: this.props.complete,
   };
  }


  render() {
    return (
      <div>
        {this.state.complete.length != 0 ? (
          <div>
            {this.state.complete.map((card, idx) => (
              <div className="card complete" key={card.id}>
                <div className="row card-content">
                  <div className="col-md-10">
                    <h4><strong>Order #: </strong>000{card.id}</h4>
                    <p><strong>Address: </strong>{card.address}</p>
                    <p><strong>Courier: </strong>{card.courier}</p>
                  </div>

                  <div className="col-md-2">
                    <div><h4 className="right">&#x2713;</h4></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h3>No orders have been picked up</h3>
          </div>
        )}
      </div>
    );
  }
}

export default Complete;
