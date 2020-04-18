import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import personService from './services/persons'
import PrintNumbers from './components/PrintNumbers'
import SearchBar from './components/SearchBar'
import ContactForm from './components/ContactForm'

const App = () =>{

   useEffect(() =>{
    personService
       .getAll()
       .then(response => {
        setPersons(response.data);
       })
   }, [])
    const [ persons, setPersons] = useState([]);
    const [ newFilter , setNewFilter] = useState('');
    const [ newName, setNewName] = useState('');
    const [ newPhoneNum, setNewPhoneNum] = useState('');

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

    const handleDeleteButton = (event) =>{
        const contactSelected = event.target.id;
        const filteredContact = personService.getOneById(contactSelected, persons)
        const result = window.confirm(`Are you sure you want to delete ${filteredContact[0].name}`)
            if(result){
                personService
                .deleteContact(filteredContact[0].id)
                .then(response =>{
                    personService
                    .getAll()
                    .then(response => {
                     setPersons(response.data);
                    })
            })
        }
    }
    

    const AddNumber = (event) =>{
        event.preventDefault();

        const newContactObj = {
            name: newName,
            number: newPhoneNum
        }

        const onlyNames = persons.map(nameArr => nameArr.name);

        if(onlyNames.indexOf(newName) > -1 ){
            const result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
            if(result){
                const replaceOld = persons.filter(person => person.name === newName);
                personService
                .updateContact(replaceOld[0].id, newContactObj)
                .then(response =>{
                        personService
                        .getAll()
                        .then(response => {
                        setPersons(response.data);
                        setNewName('');
                        setNewPhoneNum('');
                    })
                })
            }
        } else {
            personService
            .create(newContactObj)
            .then(response =>{
                setPersons(persons.concat(response.data));
                setNewName('');
                setNewPhoneNum('');
            })
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
                <PrintNumbers contact={person.name} phone={person.number} onClick={handleDeleteButton} key={index} id={person.id}/>
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