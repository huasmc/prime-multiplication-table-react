import React from 'react';
import TableContainer from '../TableContainer/TableContainer.js'

class InputContainer extends React.Component {
 constructor(props) {
  super(props);

  this.state = {
   number: 0,
  }
  this.updateNumber = this.updateNumber.bind(this);
}

updateNumber(evt) {
 // if(evt.key === 'Enter') {
   this.setState({
    number: evt.target.value
   })
  // }
}

 render() {
  return(
   <form className="get-number-form">
    <p className="display-input-text">{ this.state.number }</p>
    <input className="get-number-input" onChange={ this.updateNumber }/>
    <TableContainer number={ this.state.number }/>
   </form>
   );
  }
 }

export default InputContainer;
