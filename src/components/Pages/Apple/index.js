import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Nav from '../../Molecule/Nav';

const Apple = () => {

    const [x, setx] = useState([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])
    const [findIt, setFindIt] = useState('')
    const [filteredArray, setFilteredArray] = useState([])

    const [replace, setReplace] = useState('')
    const [replacedArray, setReplacedArray] = useState([])


    const handleClick = () => {
        setFilteredArray(() => x.filter((item) => item == findIt))
    }

    const handleReplace = () => {
        x.push(replace)
        console.log(x)
    }


    return (                               
        <div className='Arrays'>
            <Nav />
            <h1>Array Method</h1>

            <h2>Array = [{
                x.map(item => item + ",")
            }]</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <input value={findIt} onChange={(e) => setFindIt(e.target.value)} />
                <button onClick={handleClick}>Filter</button>
                <h2>Returned Array = [{filteredArray.map(item => item + ",")}]</h2>
                <h2>Length = {filteredArray.length}</h2>
            </div>

 

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <input value={replace} onChange={(e) => setReplace(e.target.value)} />
                <button onClick={handleReplace}>Replace</button>
                <h2>Updated Array = [{x.map(item => item + ",")}]</h2>
                <h2>Length = {x.length}</h2>
            </div>
        </div>
    );
}


export default Apple;

