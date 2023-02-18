import React from 'react'
import { useState } from 'react'
// import { useForm } from 'react-hook-form';


const style = {
    form: 'mt-10 text-[20px] text-center',
    button: 'mt-10 w-full px-6 py-2.5 w-[50%] ml-[25%] mr-[25%] bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out',
    container: 'w-[40%]',
}

const BMRform = () => {
   const [details, setDetails] = useState({
    age: 15,
    gender: '',
    height: 55,
    weight:35 
   }) 
    const [readValue, setReadValue] = useState(0)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value };
        });
    };
    // const { reset } = useForm();
    const handleCalculate = (e) => {
        e.preventDefault();
        let readValue = 0;
        if (details.gender === 'Male')
            readValue = ((10 * details.weight) + (6.25 * details.height) - (5 * details.age) + 5);
        else if (details.gender === 'Female')
            readValue = ((10 * details.weight) + (6.25 * details.height) - (5 * details.age) - 161);
        else
            alert('Select a gender');
        console.log(details.gender, readValue)
        setReadValue(readValue)
    };
    return (     
    <div className={style.container}>
    <form onSubmit={handleCalculate} className={style.form}>
            <div className='grid grid-cols-2 gap-4 w-[80%] m-auto'>
                <label >Age:</label>
                <input name='age' onChange={handleChange} required className='w-[150px]' type='number' min="15" max="80" />
                
                <label>Gender:</label>
                <div className='form-groups space-x-2 flex justify-start'>        
                    <input name='gender' value='Male' onChange={handleChange} type="radio"></input><span>Male</span>
                    <input name='gender' value='Female' onChange={handleChange} type="radio"></input><span>Female</span>
                </div>
                
                <label>Height:</label>
                <div className='form-groups flex justify-between'>  
                    <input name='height' onChange={handleChange} required className='w-[150px]' type='number' min="55" max="236" /><span className='text-slate-500'>cm</span>
                </div>
                <label>Weight:</label>
                 <div className='form-groups flex justify-between'>    
                    <input name='weight' onChange={handleChange} required className='w-[150px]' type='number' min="35" max="635"/><span className='text-slate-500'>kg</span>
                    </div>
                </div> 
                <button type='submit' className={style.button}>Calculate</button>
            </form>
            <p className='text-center'>{` BMR = ${readValue} calories/day`}</p>
        </div>   
  )
}

export default BMRform