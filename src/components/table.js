import React from "react";

function Table({ visibleEmployees, handleQuery }) {
    const [AscendingMap, setAscendingMap] = React.useState({ name: true, phone: true, email: true, dob: true })
    const handleSortChange = (query) => {
        handleQuery(query, !AscendingMap[query])
        setAscendingMap({
            ...AscendingMap,
            [query]:!AscendingMap[query]            
        })

}
return (
    <table className="table table-striped table-hover table-fluid">

        <thead >
            <tr>
                <th scope="col">Image</th>
                <th onClick={() => handleSortChange('name')} scope="col">Name</th>
                <th onClick={() => handleSortChange('phone')} scope="col">Phone</th>
                <th onClick={() => handleSortChange('email')} scope="col">Email</th>
                <th onClick={() => handleSortChange('dob')} scope="col">DOB</th>
            </tr>
        </thead>
        <tbody>

            {visibleEmployees.map((employee, idx) => {
                return (<tr key={idx}>
                    <td>
                        <img src={employee.picture.thumbnail} alt='employee thumbnail' ></img>
                    </td>
                    <td> {employee.name.first} {employee.name.last} </td>
                    <td> {employee.phone} </td>
                    <td> {employee.email} </td>
                    <td> {new Date(employee.dob.date).toLocaleDateString()} </td>
                </tr>)

            })}

        </tbody>

    </table>
)
}


export default Table;