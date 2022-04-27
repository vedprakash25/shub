import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import Navigation from '../Navigation';
=======
import Nav from '../../Molecule/Nav';
>>>>>>> 66812e14c6d0906433aee41052061da2c05eced9
import './api.css'

const API = () => {
    const [state, setState] = useState([])
    const [filterState, setFilterState] = useState([])
    const [names, setName] = useState('')
    const [lastnames, setLastName] = useState('')
    const [genderState, setGender] = useState('')
    const [rangeState, setRange] = useState({})

    const { min, max } = rangeState


    const load = (e) => {
        fetch(`https://randomuser.me/api/?results=10`)
            .then(response => response.json())
            .then(data => {
                setState(data.results)
                setFilterState(data.results)
            })
        console.log(rangeState)
    }

    const handleFilter = () => {
        const filteredData = state.filter((item) => {
            const { name: { first, last }, gender, dob: { age } } = item;

            return (
                first.toLowerCase() == names.toLowerCase() ||
                last.toLowerCase() == lastnames.toLowerCase() ||
                gender == genderState ||
                rangeState == age
            )
        })
        console.log(filteredData)
        setFilterState(filteredData)
    }
    let name, value

    const onChangeGet = (e) => {
        const re = '^[0-9\b]+$';
        name = e.target.name
        value = e.target.value
        setRange({
            ...rangeState,
            [name]: value
        })
    }


    useEffect(() => {
        load()
    }, [])


    return (
        <div className='Api'>
<<<<<<< HEAD
            <Navigation />

=======
            <Nav />
>>>>>>> 66812e14c6d0906433aee41052061da2c05eced9
            <h1>API</h1>

            <input value={names} onChange={(e) => setName(e.target.value)} />
            <input value={lastnames} onChange={(e) => setLastName(e.target.value)} />

            <select onChange={(e) => setGender(e.target.value)}>
                <option value="male" >Male</option>
                <option value="female" >Female</option>
            </select>

            <input value={min} name="min" onChange={onChangeGet} />
            <input value={max} name="max" onChange={onChangeGet} />

            <br />

            <button onClick={handleFilter}>Filter</button>

            <table className='main__table'>
                <tbody>
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
                        state ?
                            filterState.map((item, index) => {

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
                            <tr>
                                Loading
                            </tr>
                    }
                </tbody>
            </table>
        </div>

    );
}


export default API;

