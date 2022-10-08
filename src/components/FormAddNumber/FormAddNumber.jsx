import React, { Component } from 'react'
import { nanoid } from "nanoid";

export default class FormAddNumber extends Component {
    state = {
        contacts: [],
        name: '',
        number: ''
      }
    
      name = nanoid();
      number = nanoid();

      handleChange = (e) =>{
        const {name, value} = e.target
        this.setState({
          [name]: value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault();
        const { name, number} = this.state
        this.props.onSubmit({name, number})
        this.setState({
          name: '',
          number: '',
        })
      }


  render() {
    const {name, number, handleSubmit, handleChange} = this;
    return (
      
        <form onSubmit={handleSubmit}>
   <label htmlFor={name}>Name</label>
    <input
    id={name}
    minLength={3}
    value={this.state.name}
    onChange={handleChange}
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required/>

    <label htmlFor={number}>Number</label>
    <input 
    
    id={number}
    minLength={3}
    type="number"
    name="number" 
    value={this.state.number}
    onChange={handleChange} />
    <button>Add contact</button>
    </form>
    
      
    )
  }
}
