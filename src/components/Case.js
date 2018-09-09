import React from 'react';
import { connect } from 'react-redux';

class Case extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted : false,
      case : props.value,
      error : '',
      cases: null,
      case_id: props.id,
      length: null,
      bredth: null,
      height: null
    };
  };
  onCasesChange = (e) => {
    const cases = parseInt(e.target.value);
    this.setState(() => ({ cases }));
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

  onSubmit = (e) => {
    e.preventDefault();
    let cases = this.state.cases;
    let length = this.state.length > 0 && this.state.length;
    let bredth = this.state.bredth > 0 && this.state.bredth;
    let height = this.state.height > 0 && this.state.height;
    let id = this.state.case_id;
    if (!length || !bredth || !height ) {
      this.setState(() => ({
        error : 'ENter the values'
      }));
    } else {
      this.setState(() => ({
        error : ''
      }));
      this.props.EDITCASE(length, bredth, height, cases, id);
      //this.props.onSubmit(length, bredth, height, cases, id);
    }
  };
  render() {
    return (
      <div className="add-case">
        <p id="Instruction">case {this.state.case} :</p>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <p>
            <input 
              type="number" 
              placeholder="Cases" 
              name="count"
              onChange={this.onCasesChange}
            />
          </p>
          <p>
            <input 
              type="number" 
              placeholder="Length" 
              name="length"
              onChange={this.onLengthChange} 
            />
          </p>
          <p>
            <input 
              type="number" 
              placeholder="Bredth" 
              name="bredth"
              onChange={this.onBredthChange}
            />
          </p>
          <p>
            <input
              type="number" 
              placeholder="Height" 
              name="height"
              onChange={this.onHeightChange}
            />
          </p>
          <p><button>Submit details</button></p>
        </form>
      </div>
    );
  }
}

export default connect()(Case);