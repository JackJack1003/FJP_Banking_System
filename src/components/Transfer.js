import React, { Component } from 'react';
// import tokenLogo from '../token-logo.png';
// import ethLogo from '../eth-logo.png';

class TransferForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: '0',
      transferAddress: '',
    };
  }

  render() {
    return (
      <form
        className="mb-3"
        onSubmit={(event) => {
          event.preventDefault();
          this.props.transferTokens(
            this.state.transferAddress,
            this.state.output
          );
        }}
      >
        <div>
          <label className="float-left">
            <b>Transfer Amount</b>
          </label>

          <span className="float-right text-muted">
            Balance: {window.web3.utils.fromWei(this.props.ethBalance, 'Ether')}
          </span>
        </div>
        <div className="input-group mb-4">
          <input
            type="text"
            onChange={(event) => {
              //let etherAmount2 = this.input.value.toString();
              //console.log(etherAmount2);
              this.setState({
                output: window.web3.utils.toWei('1', 'Ether'),
              });
            }}
            ref={(input) => {
              this.input = input;
            }}
            className="form-control form-control-lg"
            placeholder="0"
            required
          />
        </div>
        <label className="float-left">
          <b>To: </b>
        </label>
        <input
          type="text"
          onChange={(event) => {
            this.setState({
              transferAddress: this.input.value.toString(),
            });
          }}
          ref={(input) => {
            this.input = input;
          }}
          className="form-control form-control-lg"
          placeholder="0"
          required
        />
        <br />
        <button type="submit" className="btn btn-primary btn-block btn-lg">
          Transfer!
        </button>
      </form>
    );
  }
}

export default TransferForm;
