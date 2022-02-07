import React, { useEffect, useState } from 'react';
import './api.css'

const API = () => {
    const [state, setState] = useState({})
    const [names, setName] = useState('')
    const [filters, setFilter] = useState([])

    const { results } = state
    // console.log(results)

    const load = (e) => {
        fetch(`https://randomuser.me/api/?results=100`)
            .then(response => response.json())
            .then(data => {
                setState({ results: data.results })
            })
        console.log(results)
    }

    const handleFilter = () => {

        setFilter(() => {
            results.filter((item) => {
                const { name: { first } } = item
                console.log(first)
                return first == names
            })
        })
        console.log(filters)
    }



    useEffect(() => {
        load()
    }, [])


    return (
        <div className='Api'>

            <h1>API</h1>

            <input value={names} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleFilter}>Filter</button>

            <table className='main__table'>
                <tr>
                    <th>Name</th>
                    <th>DOB</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Image</th>
                </tr>

                {
                    results ?
                        results.map((item, index) => {

                            // console.log(item)
                            const { name: { first, last: lasts }, cell, dob: { date, age }, email, gender, id, picture: { large }, phone } = item


                            return (
                                <tr key={index}>
                                    {/* <td>{id}</td> */}
                                    <td>{first} {lasts}</td>
                                    <td>{date}</td>
                                    <td>{age}</td>
                                    <td>{gender}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>
                                    <td><img src={large} /></td>
                                </tr>
                            )
                        })
                        :
                        <h1>
                            Loading
                        </h1>
                }
            </table>
        </div>

    );
}


export default API;

