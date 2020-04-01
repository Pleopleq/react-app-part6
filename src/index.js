import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const PrintNumbers = ({contact, index}) =>{
    return <li key={index}> {contact}</li>
}


const App = () =>{

    const [persons, setPersons] = useState([
        { name: 'Felix Anducho' }
    ]);
    const [ newName, setNewName ] = useState( 
        'a new note...'
    );


    const handleContactChange = ( event ) =>{
        setNewName(event.target.value)
    }

    const AddNumber = (event) =>{
        event.preventDefault();

        const contactObj = {
            name: newName

        }

        const onlyNames = persons.map(nameArr => nameArr.name);

        if(onlyNames.indexOf(newName) > -1){
            alert (`${newName} is already register`);
            return
        } else {
            setPersons(persons.concat(contactObj));
            setNewName('');
            
        }
    }


    return(
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={AddNumber}> 
                <div>
                    name: <input value={newName}
                        onChange={handleContactChange}
                    />
                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map((person, index)=>
                <PrintNumbers key={index} contact={person.name}/>
                )}
                <div>debug: {newName}</div>
            </ul>
        </div>
    )
}
ReactDOM.render(
    <App/>,
  document.getElementById('root')
);


export default App