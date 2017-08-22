import React, { Component } from 'react';



class Form extends Component {
  constructor(props){
    super(props);

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleChange(event){
      this.setState({value: event.target.value});
    }
    handleSubmit(event) {
      alert('A Item was submitted: ' + this.state.value);
      event.preventDefault();
    }
  render(){
    return(

        <form onSubmit={this.handleSubmit}>
          <label>
            SKU:
            <input
              type="number"
              name="sku"
              onChange={this.handleInputChange}/>
            Item Name:
            <input
              type="text"
              name="itemName"
              onChange={this.handleInputChange}/>
            Land Cost:
            <input
              type="number"
              name="cost"
              onChange={this.handleInputChange}/>
          </label>

          <input type="submit" value="Submit" />
        </form>

    );
  }
}

export default Form;
