import React from 'react';
import { connect } from 'react-redux';
import { setContainer } from '../actions/calculator';


class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted : false,
      containers : props.containers,
      error : '',
      length: null,
      bredth: null,
      height: null
    };
  }

  onContainerChange = (e) => {
    const containers = parseInt(e.target.value);
    this.setState(() => ({ containers }));
  };
  
  onLengthChange = (e) => {
    const length = parseInt(e.target.value);
    this.setState(() => ({ length }));
  };

  onBredthChange = (e) => {
    const bredth = parseInt(e.target.value);
    this.setState(() => ({ bredth }));
  };

  onHeightChange = (e) => {
    const height = parseInt(e.target.value);
    this.setState(() => ({ height }));
  };

  setContainer = (e) => {
    e.preventDefault();
    let containers = this.state.containers;
    let length = this.state.length > 0 && this.state.length;
    let bredth = this.state.bredth > 0 && this.state.bredth;
    let height = this.state.height > 0 && this.state.height;
    if (!length || !bredth || !height ) {
      this.setState(() => ({
        error : 'Enter the values'
      }));
    } else {
      this.setState(() => ({
        error : ''
      }));
      this.props.dispatch(setContainer(length, bredth, height, containers));
    }
  };

  render() {
    return (
      <div className="add-container">
        <h2 id="title">Container Details</h2>
        <p id="Instruction">Add data :</p>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.setContainer}>
          <p>
            <input 
              type="number" 
              name="count" 
              placeholder="Containers"
              value={this.state.containers}
              onChange={this.onContainerChange}
              disabled="true"
            />
          </p>
          <p>
            <input 
              type="number" 
              name="length" 
              placeholder="Length"
              onChange={this.onLengthChange}
            />
          </p>
          <p>
            <input 
              type="number" 
              name="bredth" 
              placeholder="Bredth"
              onChange={this.onBredthChange}
            />
          </p>
          <p>
            <input 
              type="number" 
              name="height" 
              placeholder="Height"
              onChange={this.onHeightChange}
            />
          </p>
          <p><button>Submit details</button>
     </p>   </form>
      </div>
    );
  }
}

export default connect()(Container);