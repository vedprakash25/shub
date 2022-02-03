import React, { useEffect, useState } from 'react';


const API = () => {

    const [state, setState] = useState('Load')

    const load = () => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        fetch("https://randomuser.me/api/?results=50")
            .then(response => response.json())
            .then(data => {console.log(data.results[0])})
            
    }

    return (
        <div className='Api'>

            <h1>API</h1>

            <button onClick={load}>{state}</button>

        </div>
    );
}


export default API;

