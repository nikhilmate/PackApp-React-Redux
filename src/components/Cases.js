import React from 'react';
import Case from './Case';
import uuid from 'uuid';
import { addCase, editCase, removeCase } from '../actions/calculator';
import { connect } from 'react-redux'; 

class Cases extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      case_total : 0,
      cases : []
    };
  }

  addCaseTotal = () => {
    let id = uuid();
    this.setState((prevState) => ({
      case_total : prevState.case_total < 1 ? 1 : (prevState.case_total + 1),
      cases : prevState.cases.concat([id])
    }));
    this.props.dispatch(addCase(id));
    console.log(this.state);
  };

  removeCaseTotal = () => {
    let Removeid = this.state.cases[this.state.cases.length - 1];
    this.setState((prevState) => ({
      case_total : prevState.case_total <= 1 ? 1 : (prevState.case_total - 1),
      cases : prevState.cases.filter((id) => id !== Removeid)
    }));
    this.props.dispatch(removeCase(Removeid));
  };

  EDITCASE = (l, b, h, cases, id) => {
    this.props.dispatch(editCase(l, b, h, cases, id));
  };

  render() {
    let casing = [];
    for(let i = 0; i < this.state.case_total; i++) {
      let id = this.state.cases[i];
      casing.push(<Case
        key={i+1}
        id={id}
        value={i+1}
        EDITCASE={this.EDITCASE}
      />);
    }

    return (
      <div className="cases">
        <h3 id="title">Case Details </h3>
        {casing.map((cases) => (cases))}

        <button onClick={this.addCaseTotal}>Add new case</button>
        {
          (this.state.case_total > 1) &&
          <button onClick={this.removeCaseTotal}>remove case</button>
        }
      </div>
    );
  }
}

export default connect()(Cases);
/*
Array.apply(null, Array(this.state.case_total).map(function(item) {
            return (<Cases id={uuid()}/>);
}))
*/