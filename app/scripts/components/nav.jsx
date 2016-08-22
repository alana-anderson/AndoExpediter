import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import HelpModal from './modals/help.jsx';


/*
 * Navigation
 * Application top menu/nav functionality
 */
const NavigationPropTypes = {
  getKitchenOperationStatus: PropTypes.func.isRequired,
};

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      kitchenStatus: false,
    };

    [
      '_openModal',
      'closeModal',

      'handleKitchenStatus',
    ].forEach(method => { this[method] = this[method].bind(this); });
  }


  _openModal() {
    this.setState({ showModal: true });
  }


  closeModal() {
    this.setState({ showModal: false });
  }


  handleKitchenStatus(event) {
    const status = event.target.id;
    this.setState({ kitchenStatus: status });
    this.props.getKitchenOperationStatus(status);
    this.closeModal();
  }


  render() {
    return (
      <div>
        <div className="navbar navbar-default">
           <div className="navbar-header">
            <a className="navbar-brand" href="#"><strong>ANDO</strong> Expediter</a>
          </div>
          <ul className="nav navbar-nav right">
            <li>
              <a className="btn" onClick={this._openModal}>Help!</a>
            </li>
          </ul>
        </div>
        <div className={this.state.kitchenStatus + ' message'}>
          <p>Kitchen status: {Boolean(this.state.kitchenStatus) ? 'CLOSED': 'OPEN'}</p>
        </div>

        <HelpModal
          showModal={this.state.showModal}
          closeModal={this.closeModal}
          handleKitchenStatus={this.handleKitchenStatus}
        />
      </div>
    );
  }
}

export default Navigation;
