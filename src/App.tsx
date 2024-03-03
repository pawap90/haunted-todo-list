import { useState } from 'react'
import AddTodoItem from './components/AddTodoItem'
import useTodoItemStorage from './hooks/useTodoItemStorage'
import ListTodoItems from './components/ListTodoItems';
import Separator from './components/Separator';

function App() {
  const [showAddItem, setShowAddItem] = useState(false);
  const { items, addTodoItem } = useTodoItemStorage();
  return (
    <div className='container space-y-4 mx-auto mt-16'>
      
      <header>
        <h1 className='text-5xl font-bold font-display'>ToBoo</h1>
        <h2 className='text-gray-200'>A completely normal TODO List App. Definitely not managed by a victorian ghost child.</h2>
      </header>

      <Separator></Separator>

      <button className='flex items-center space-x-2 group' onClick={() => setShowAddItem(!showAddItem)}>
        <div className='bg-primary p-[2px] rounded-lg group-hover:bg-primary-dark'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </div>
        <span className='text-gray-200 group-hover:text-gray-100'>Add Item</span>
      </button>

      {showAddItem && <AddTodoItem onSave={addTodoItem} />}
      
      <Separator></Separator>
      
      <ListTodoItems items={items} />
    </div>
  )
}

export default App
