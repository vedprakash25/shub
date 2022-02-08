import React, { useEffect, useState } from 'react';
import Nav from '../../Molecule/Nav/index.js';
import { arrayOfObj, arr1, arr2, arr3 ,calculate,calculateObj} from "./Function"

const ArrayMethods = () => {

    const [sumOfArray, setsumOfArray] = useState('')
    const [sumOfPrice, setSumOfPrice] = useState('')


    // const arraysCombined = [arr1 + arr2];    //combined array using Addition operator as single string
    // const arraysCombined = [...arr1, ...arr2];    //combine array using spread operator
    const arraysCombined = arr1.concat(arr2);    //combined using concat
    // console.log(arraysCombined)

    console.log("Includes", arraysCombined.includes('13 Jan')) // find & return true of false
    console.log("Filter(()=>)", arraysCombined.filter((ele) => ele == '13 Jan')) // find all & return a new array
    console.log("Filling(X ,from 2,to 4)", arraysCombined.fill("X replaced using fill( )", 2, 4)) // (fill, from, to) in a aray


    //destructuring
    // 'They are Keys/Indexes that is taking the value from **arr1**'
    const [Sunday, , , Tuesday, , Wednesday] = arr1;         //by adding commas we can break the contuinity
    console.log(Sunday, Tuesday, Wednesday);


    

    const [Addition, Subtraction, Multiplication, Division] = calculate(2, 4)
  
    const { add, sub, mul, divi, neg } = calculateObj(2, 8)


    const addObjectEle = (obj) => {
        let sum = 0;

        obj.forEach((item) => sum += item.price)
        setSumOfPrice(sum)
    }

    const addArrayEle = (arr) => {
        let sum = 0;

        arr.forEach((item) => sum += item)
        setsumOfArray(sum)
    }


    useEffect(() => {

        addObjectEle(arrayOfObj)
        addArrayEle(arr3)

    }, [])


    return (
        <div className='Api'>
            <Nav/>
            <h1>Array</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <h2>Array 1</h2>
                    {
                        arr1.map((item, index) => <h3 key={index}>{item}</h3>)
                    }
                </div>
                <div>
                    <h2>Array 2</h2>
                    {
                        arr2.map((item, index) => <h3 key={index}>{item}</h3>)
                    }
                </div>
                <div>
                    <h2>Combined Array</h2>
                    {
                        arraysCombined.map((item, index) => <h3 key={index}>{item}</h3>)
                    }
                </div>
            </div>


            <h1>Sum</h1>
            <span>Sum Of Array of Element : </span>
            [{
                arr3.map((item) => <span> {item} </span>)
            }] = <span>{sumOfArray}</span>


            <br />

            <span>Sum Of Array of Object of Element </span>
            [&#123;
            {
                arrayOfObj.map((item) => <span> price: {item.price}, </span>)
            }
            &#125;]
            = <span>{sumOfPrice}</span>

            <br />
            <br />
            <br />



            <div style={{ display: 'flex', border: '2px solid grey' }}>
                <h3 style={{ margin: '0% 1%' }}>Calculation been returned from a single function array:</h3>
                <h3 style={{ margin: '0% 1%' }}>{Addition}</h3>
                <h3 style={{ margin: '0% 1%' }}>{Subtraction}</h3>
                <h3 style={{ margin: '0% 1%' }}>{Multiplication}</h3>
                <h3 style={{ margin: '0% 1%' }}>{Division}</h3>
            </div>


            <div style={{ display: 'flex', border: '2px solid grey' }}>
                <h3 style={{ margin: '0% 1%' }}>Calculation been returned from a single function object:</h3>
                <h3 style={{ margin: '0% 1%' }}>{add}</h3>
                <h3 style={{ margin: '0% 1%' }}>{sub}</h3>
                <h3 style={{ margin: '0% 1%' }}>{mul}</h3>
                <h3 style={{ margin: '0% 1%' }}>{divi}</h3>
                <h3 style={{ margin: '0% 1%' }}>{neg}</h3>
            </div>



        </div>

    );
}


export default ArrayMethods;

