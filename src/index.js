import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const PrintNumbers = ({contact, phone,  index}) =>{
    return <li key={index}> {contact} - {phone}</li>
}


const App = () =>{

    const [persons, setPersons] = useState([
        { name: 'Felix Anducho', number: '453929392' },
        { name: 'Cesar' , number: '453230232' },
        { name: 'Carlos' , number: '38929302'},
        { name: 'Derek' , number: '0929082309'},
        { name: 'Francisco' , number: '52345235'}
    ]);
    const [newFilter , setNewFilter ] = useState([
        'set a new filter'
    ])
    const [ newName, setNewName ] = useState( 
        'a new note...'
    );
    const [ newPhoneNum, setNewPhoneNum ] = useState(
        'Phone number'
    )


    const handleContactChange = event =>{
        setNewName(event.target.value);
    }

    const handlePhoneChange =  event =>{
        setNewPhoneNum(event.target.value);
    }
    const handleFilterChange = event =>{
        setNewFilter(event.target.value);
        let searchQuery = event.target.value;
    }
    

    const AddNumber = (event) =>{
        event.preventDefault();

        const contactObj = {
            name: newName,
            number: newPhoneNum
        }

        const onlyNames = persons.map(nameArr => nameArr.name);

        if(onlyNames.indexOf(newName) > -1 ){
            alert (`${newName} is already register`);
            return
        } else {
            setPersons(persons.concat(contactObj));
            setNewName('');
            setNewPhoneNum('');
        }
    }


    return(
        <div>
            <h1>Phonebook</h1>
            <div>
                Filter by name: <input
                value={newFilter} 
                onChange={handleFilterChange}/>
            </div>
            <form onSubmit={AddNumber}> 
                <div>
                    <h2>Add a new contact</h2>
                    name: <input value={newName}
                        onChange={handleContactChange}
                    />
                    phone: <input value={newPhoneNum}
                        onChange={handlePhoneChange}
                    />
                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map((person, index)=>
                <PrintNumbers key={index} contact={person.name} phone={person.number}/>
                )}
            </ul>
            <div>debug: {newFilter}</div>
        </div>
    )
}
ReactDOM.render(
    <App/>,
  document.getElementById('root')
);


export default App