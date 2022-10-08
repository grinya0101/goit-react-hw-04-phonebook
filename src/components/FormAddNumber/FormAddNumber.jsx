import { nanoid } from "nanoid";
import { useState } from "react";

const initialState = {
  contacts: [],
        name: '',
        number: ''
}

export default function FormAddNumber({onSubmit}) {
  const [state, setState] = useState(initialState);

  const name = nanoid();
  const number = nanoid();

  const handleChange = (e) =>{
    const {name, value} = e.target
    setState((prev) => {
       return{
        ...prev,
      [name]: value

       }
    })
   
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number} = state;
    onSubmit({name, number})
    setState(initialState)
  }

  return (
    
    <form onSubmit={handleSubmit}>
<label htmlFor={name}>Name</label>
<input
id={name}
minLength={3}
value={state.name}
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
value={state.number}
onChange={handleChange} />
<button>Add contact</button>
</form>

  
)
}










// export default class FormAddNumber extends Component {
//     state = {
//         contacts: [],
//         name: '',
//         number: ''
//       }
    
//       name = nanoid();
//       number = nanoid();

//       handleChange = (e) =>{
//         const {name, value} = e.target
//         this.setState({
//           [name]: value
//         })
//       }

//       handleSubmit = (e) => {
//         e.preventDefault();
//         const { name, number} = this.state
//         this.props.onSubmit({name, number})
//         this.setState({
//           name: '',
//           number: '',
//         })
//       }


//   render() {
//     const {name, number, handleSubmit, handleChange} = this;
//     return (
      
//         <form onSubmit={handleSubmit}>
//    <label htmlFor={name}>Name</label>
//     <input
//     id={name}
//     minLength={3}
//     value={this.state.name}
//     onChange={handleChange}
//     type="text"
//     name="name"
//     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//     required/>

//     <label htmlFor={number}>Number</label>
//     <input 
    
//     id={number}
//     minLength={3}
//     type="number"
//     name="number" 
//     value={this.state.number}
//     onChange={handleChange} />
//     <button>Add contact</button>
//     </form>
    
      
//     )
//   }
// }
