import { Component } from "react";
import NumberList from "./NumberList/NumberList"
import { nanoid } from "nanoid";



import FormAddNumber from "./FormAddNumber/FormAddNumber";


export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount(){
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts !== null) {
      this.setState({
        contacts,
      }) 
    }
    
  }


  
  componentDidUpdate(prevProps, prevState) {
     const {contacts} = this.state
     if (prevState !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
     }
     
  }

  addContacts = (data) => {
    if(this.isDuplicate(data)) {
      return alert(`${data.name} - ${data.number} is already on the site`)
    }
    const newContacts = {
      id: nanoid(), 
      ...data
    }
    
    this.setState((prev) => {
      return {
        contacts: [...prev.contacts, newContacts]
      }
    })
  }


  removeContacts = (id) => {
    this.setState((prev) => {
      const newContacts = prev.contacts.filter((item) => item.id !== id)

      return {
        contacts: newContacts
      }
    })
  }

  handleChange = (e) => {
    const { name, value} = e.target;
    this.setState({
     [name]: value
    })
  }

  getFilterContacts(){
    const { contacts , filter } = this.state;

    if(!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    const filterContacts = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase()
      const normalizedNumber = number.toLocaleLowerCase()
      const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
      return result;
      
    })
    return filterContacts
  }


   isDuplicate({name, number}){
     const {contacts} = this.state;
     const result = contacts.find((item) => item.name === name || item.number === number);
     return result
   }


render(){
  const { addContacts, removeContacts,  handleChange } = this
  const { filter } = this.state
  const contacts = this.getFilterContacts();

return (
  <>
  <h1>Phonebook</h1>
  <FormAddNumber onSubmit={addContacts} />
  <div>  
  <h2>Contacts</h2>
  <label htmlFor="">Find contacts by name</label>
    <input type="text" name="filter"  onChange={handleChange} value={filter} />
  <NumberList items={contacts} removeContacts = {removeContacts} />
  </div>
  </>
  );
};

}
 

  











