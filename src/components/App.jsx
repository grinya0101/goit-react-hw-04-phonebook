import NumberList from "./NumberList/NumberList"
import { nanoid } from "nanoid";
import FormAddNumber from "./FormAddNumber/FormAddNumber";
import { useState, useEffect } from "react";



export default function App() {
  const [contacts, setContacts] = useState(() => {
    const value = JSON.parse(localStorage.getItem("contacts"));
    return value ?? [];
  })
  const [filter, setFilter] = useState('')

  useEffect(() =>{
    localStorage.setItem("contacts", JSON.stringify(contacts));

  }, [contacts])




  const addContacts = (data) => {
    if(isDuplicate(data)) {
      return alert(`${data.name} - ${data.number} is already on the site`)
    }
    const newContacts = {
      id: nanoid(), 
      ...data
    }
    
    setContacts((prev) => [...prev, newContacts])

  
  }


  const removeContacts = (id) => {
    setContacts((prev) => {
      const newContacts = prev.filter((item) => item.id !== id)

      return newContacts
      
    })
    
  }

  const handleChange = (e) => {
    const { value} = e.target;
    setFilter(value);
   
  };


  const isDuplicate = ({name, number}) => {
    const result = contacts.find((item) => item.name === name || item.number === number);
    return result
  };


  const getFilterContacts = () => {


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

  const filteredContacts = getFilterContacts();


 
  return (
    <>
    <h1>Phonebook</h1>
    <FormAddNumber onSubmit={addContacts} />
    <div>  
    <h2>Contacts</h2>
    <label htmlFor="">Find contacts by name</label>
      <input type="text" name="filter"  onChange={handleChange} value={filter} />
    <NumberList items={filteredContacts} removeContacts = {removeContacts} />
    
    </div>
    </>
    );

  
}





  











