const arrayOfObj = [
    {
        title: 'title',
        price: 10
    },
    {
        title: 'title',
        price: 10
    },
    {
        title: 'title',
        price: 12
    },
    {
        title: 'title',
        price: 10
    },
    {
        title: 'title',
        price: 10
    },
    {
        title: 'title',
        price: 10
    },
    {
        title: 'title',
        price: 10
    },
]

const arr1 = ['sunday', 'monday', 'tuesday', 'wednesday', 'thrusday', 'friday', 'saturday']
const arr2 = ['10 Jan', '11 Jan', '12 Jan', '13 Jan', '13 Jan', '15 Jan', '16 Jan']
const arr3 = [10, 11, 12, 13, 13, 15, 16]

const calculate = (a, b) => {
    const add = a + b;
    const sub = a - b;
    const mul = a * b;
    const divi = a / b;
    return [add, sub, mul, divi]
}

const calculateObj = (a, b) => {
    const add = a + b;
    const sub = a - b;
    const mul = a * b;
    const divi = a / b;

    return { add, sub, mul, divi }
}



export { arr1, arr2, arr3, arrayOfObj, calculate, calculateObj }