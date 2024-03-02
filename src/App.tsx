import { useState } from 'react'
import './App.css'
import AddTodoItem from './components/AddTodoItem'
import useTodoItemStorage from './hooks/useTodoItemStorage'
import ListTodoItems from './components/ListTodoItems';

function App() {
  const [showAddItem, setShowAddItem] = useState(false);
  const { items, addTodoItem } = useTodoItemStorage();
  return (
    <>
      <h1>TOBOO</h1>
      <h3>Welcome to the (haunted) TODO List App</h3>

      <button onClick={() => setShowAddItem(!showAddItem)}>Add Item</button>
        {showAddItem && <AddTodoItem onSave={addTodoItem} />}
      
      <ListTodoItems items={items} />
    </>
  )
}

export default App
