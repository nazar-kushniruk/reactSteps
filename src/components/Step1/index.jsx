import React, { Component } from 'react';
import Step from '../Step';

export default class extends Component {
  state = {
    inputValue: 'Step'
  }

  setValue = e => this.setState({ inputValue: e.target.value });

  render() {

    return (
      <div className="Step1">
        <Step count={0}  currentValue={this.props.currentValue} stepValue={this.state.inputValue}>
          <input type='text' value={this.state.inputValue} onChange={this.setValue} />
        </Step>
      </div>
    );
  }
} ;
