import React from 'react'
import { useState } from 'react'

export default function Form({ addProduct }) {

    const [dailyCalories, setDailyCalories] = useState(0);
    const [total, setTotal] = useState(0);
    const textInput = React.useRef();
    const resetInput = () => (textInput.current.value = 0)
    //object with form details
    const [details, setDetails] = useState({
        name: '',
        calories: 0,
        serving: 0,
    }); 
    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value});
       };
    
    const handleCalculate = (e) => {
        e.preventDefault();
        addProduct(details);
        setTotal(total - (details.serving / 100 * details.calories))
        setDetails({ name: '', calories: 0, serving: 0 });
        setDailyCalories(dailyCalories);
    }
    const handleUpdateCalories = (e) => {
        setDailyCalories(e.target.value);
       };
    
    // const handlePrint = (e) => {
    //     e.preventDefault();
    //     setDailyCalories(dailyCalories);
    // }
    
    return (
        <>
            <form onSubmit={handleCalculate} className='lg:w-[50%] md:w-[70%] w-full lg:mr-[25%] md:mr-[15%] lg:ml-[25%] md:ml-[25% lg:text-[20px]]'>  
            <div className='grid lg:w-[100%] w-[100%] m-auto grid-cols-2 text-white gap-2 lg:text-[20px] text-sm'>
                <label>Set daily calories:</label><input className='text-black' type='number' ref={textInput} name='dailyKcal' required min={1000} onChange={handleUpdateCalories} />
                <label>Food name:</label> <input type='text' name='name' value={details.name} minLength={2} pattern="^[a-zA-Z ]*$" onChange={handleChange} placeholder ='food' required className='text-black'></input>
                <label>Calories per 100g:</label> <input type='number' name='calories' min={4} value={details.calories}  onChange={handleChange} required className='text-black'></input>
                <label>Serving size 	&#40; g	&#41;:</label> <input type='number' min={1} name='serving' value={details.serving}  onChange={handleChange} required className='text-black'></input>
            </div>
            <button type='submit' className="w-[50%] ml-[25%] mr-[25%] mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"> Add </button>
            <p className='text-[30px] text-center text-white font-bold mt-10'>Calories Left</p>
            <p className='text-[25px] text-center text-white'>{Math.round(dailyCalories-(-total))}</p>
            </form>
            
    </>  
  )
}
