export default function NumberList({ items, removeContacts }) {
    console.log()
    const elements = items.map(({name, number, id}) => {
      
      
        return <li key={id}>{name} {number} <button onClick={() => removeContacts(id)}>Delet</button></li>
    })
  return (
    <ul>{elements}</ul>
  )
}
