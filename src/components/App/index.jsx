import React, { Component } from 'react';
const withComponent = WrappedComponent =>
class  extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step1: '',
      step2: '',
      step3: '',
      currentValue : 1
      };
  }
  setCurentValue = ({currentValue, stepValue}) => {
        switch(currentValue ) {
          case 0:
            this.setState({
              step1: '',
              step2: '',
              step3: '',
            })
            break;
        case 1:
          this.setState({ step1: stepValue });
          break;
          case 2:
          this.setState({ step2: stepValue });
          break;
          case 3:
          this.setState({ step3: stepValue });
          break;
          default :   this.setState({
            step1: 'error',
            step2: 'error',
            step3: 'error'
          })
        }
  }
      shouldComponentUpdate (nextProps, nextState){
        const {step1, step2, step3, currentValue} = this.state;
        if(step1 !== nextState.step1) return true;
        if(step2 !== nextState.step2) return true;
        if(step3 !== nextState.step3) return true;
        if(currentValue !== nextState.currentValue) return true;
        return false;
      }

  render() {
    return (
      <WrappedComponent setCurentValue={this.setCurentValue}   {...this.state}/>
      )
  }
}

export default withComponent;
