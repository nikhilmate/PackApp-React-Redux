import React from 'react';
import Container from './Container';
import Cases from './Cases';
import { connect } from 'react-redux';

class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Containers : 1
    };
  }
  
  finalCalculation = (e) => {
    console.log(this.props.calculator);
    
  };
  render() {
    return (
      <div>
        <h2>Calculate The packs!</h2>
        <Container
          containers={this.state.Containers}
        />
        <Cases />
        <button onClick={this.finalCalculation}>Calculate</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    calculator : state.calculator
  };
};
export default connect(mapStateToProps)(Calculate);