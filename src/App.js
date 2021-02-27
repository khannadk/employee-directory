import './App.css';
import React, { useEffect } from 'react';
import { getEmployees } from './util/api';
import SearchBar from './components/searchbar'
import Header from './components/header'
import Table from './components/table'

function App() {
  const [employees, setEmployees] = React.useState([])
  const [searchQuery, setSearchQuery] = React.useState('')
  const handleQuery = (query, sortAscending) => {
    const sortedEmployees = employees.slice()
    switch (query) {
      case 'name':
        sortedEmployees.sort((a, b) => {
          const fullNameA = `${a.name.first} ${a.name.last}`.toLowerCase()
          const fullNameB = `${b.name.first} ${b.name.last}`.toLowerCase()
          return sortAscending ? fullNameB.localeCompare(fullNameA) : fullNameA.localeCompare(fullNameB)
        })
        break;
      case 'phone':
        sortedEmployees.sort((a, b) => {
          return sortAscending ? b.phone.localeCompare(a.phone) : a.phone.localeCompare(b.phone)
        })
        break;
      case 'email':
        sortedEmployees.sort((a, b) => {
          return sortAscending ? b.email.localeCompare(a.email) : a.email.localeCompare(b.email)
        })
        break;
      case 'dob':
        sortedEmployees.sort((a, b) => {
          const dobA = new Date (a.dob.date).getTime()
          const dobB = new Date (b.dob.date).getTime()
          return sortAscending ? dobB - dobA : dobA - dobB
        })
        break;
    }

    setEmployees(sortedEmployees)
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    getEmployees().then((results) => {
      setEmployees(results)
    })
  }, [])
  const visibleEmployees = employees.filter((employee) => {
    const fullName = `${employee.name.first} ${employee.name.last}`.toLowerCase()
    const query = searchQuery.toLowerCase()
    return fullName.includes(query)
  })
  return (
    <div className="App">
      <Header />
      <SearchBar search={searchQuery} handleInputChange={handleSearchChange} />
      <Table
        visibleEmployees={visibleEmployees}
        handleQuery={handleQuery} />
    </div>
  );
}

export default App;