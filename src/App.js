import { useState } from 'react';

const Filter = ({ search, handleSearchChange }) => {
  return (
    <div>
      filter shown with: <input value={search} onChange={handleSearchChange} />
    </div>
  );
};

const Name = ({ newName, handleNameChange }) => {
  return (
    <div>
        name: <input value={newName} onChange={handleNameChange} />
    </div>
  )
}

const Number = ({ newNumber, handleNumberChange }) => {
  return (
    <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const filteredPersons = persons.filter((person) =>
    person.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )

  const setName = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    const personExist = persons.some((person) => person.name === newPerson.name);

    if (personExist) {
      alert(`${newName} is already added to the phonebook.`);
    } else {
      setPersons([...persons, newPerson]);
      setNewName('');
      setNewNumber('');
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearchChange={handleSearchChange} />
      <form onSubmit={setName}>
        <Name newName={newName} handleNameChange={handleNameChange} />
        <Number newNumber={newNumber} handleNumberChange={handleNumberChange} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {filteredPersons.map((person) => (
          <div key={person.number}>
            {person.name} {person.number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
