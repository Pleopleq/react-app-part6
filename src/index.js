import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import PrintNumbers from './components/PrintNumbers'
import SearchBar from './components/SearchBar'
import ContactForm from './components/ContactForm'

const App = () =>{

    const [persons, setPersons] = useState([
        { name: 'Felix Anducho', number: '453929392' },
        { name: 'Cesar' , number: '453230232' },
        { name: 'Carlos' , number: '38929302'},
        { name: 'Derek' , number: '0929082309'},
        { name: 'Francisco' , number: '52345235'}
    ]);

    const [newFilter , setNewFilter ] = useState('');

    const [ newName, setNewName ] = useState( 
        'a new note...'
    );

    const [ newPhoneNum, setNewPhoneNum ] = useState(
        'Phone number'
    )
    
    //Search bar//

    let contactsToShow = persons;
    const searchQuery = newFilter;
    const searchQueryToUpper = searchQuery.charAt(0).toUpperCase() + searchQuery.substring(1);

    const filterPersons = contactsToShow.filter(el => el.name.includes(searchQueryToUpper));
    contactsToShow = filterPersons;

    //Search bar //

    const handleContactChange = event =>{
        setNewName(event.target.value);
    }

    const handlePhoneChange =  event =>{
        setNewPhoneNum(event.target.value);
    }

    const handleFilterChange = event =>{
     setNewFilter(event.target.value);
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
            <SearchBar value={newFilter} onChange={handleFilterChange}/>

            <h2>Add a new contact</h2>
            
            <ContactForm valueName={newName} 
            onChangeName={handleContactChange}
            valueNumber={newPhoneNum}
            onChangeNum={handlePhoneChange}
            onSubmit={AddNumber}/>

            <h2>Numbers</h2>
            <ul>
                {contactsToShow.map((person, index)=>
                <PrintNumbers key={index} contact={person.name} phone={person.number}/>
            )}
            </ul>
        </div>
    )
}

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);


export default App