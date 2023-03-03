import { useState } from 'react'
import Form from './components/Form'
import ProductList from './components/ProductList';

function CaloriesTrackerApp() {

  const [row, setRow] = useState([]);

  const addProduct = (productInfo) => {
    setRow([...row, productInfo]);
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-neutral-800">
      <p className='text-center text-white text-[30px] pt-10 font-bold'>Calories Tracker</p>
      <div className='lg:w-[40%] w-[100%] m-auto mt-10'>
        <Form addProduct={addProduct} />
        <ProductList row={row} />
      </div>
    </div>
  );
}

export default CaloriesTrackerApp;
