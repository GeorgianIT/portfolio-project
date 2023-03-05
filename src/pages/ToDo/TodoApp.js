import Todo from './components/Todo'
import { AiOutlinePlus } from 'react-icons/ai'
import { useState, useEffect } from 'react';
import { db } from '../Travel/firebase'
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore'
import BackButton from '../BackButton';

const style = {
  container: 'bg-slate-100 max-w-[500px] w=full m-auto rounded-md shadow-xl p-4',
  heading: 'text-3xl font-bold text-center text-gray-800 p-2',
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl break-words`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
}

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //create todo
  const createTodo = async (e) => {
    e.preventDefault(e)
    if (input === '') {
      alert('Please enter a valid todo!')
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    })
    setInput('')
  };

  //read todo from firebas
  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id })
      });
      setTodos(todosArr)
    })
    return () => unsubscribe()
  });
  //update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    });
  };

  //delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }


  return (
    <>
    <BackButton/>
    <div className='h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]'>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type='text'
            placeholder='Add todo'
          />
          <button className={style.button}><AiOutlinePlus/></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
          ))}
        </ul>
        {todos.length<1? null : <p className={style.count}>{`You have ${todos.length} todos`}</p> }
        
      </div>
      </div>
    </>
  );
}

export default TodoApp;
