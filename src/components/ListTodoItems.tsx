import { TodoItem } from "../types/TodoItem";

type ListTodoItemsProps = {
    items: TodoItem[];
};

const ListTodoItems: React.FC<ListTodoItemsProps> = ({ items }) => {
    if (items.length === 0) {
        return (
            <div className="flex bg-gray-900 p-4 rounded-lg justify-center space-x-2 text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                <p>No items found</p>
            </div>
        );
    }
    return (
        <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold font-display text-gray-100">Items</h2>
            <ul className=" flex flex-col space-y-2">
                {items.map((item) => (
                    <li key={item.id} className="bg-gray-900 flex space-x-4 rounded-lg p-4">
                        <div className="border-2 mt-2 border-pink-300 rounded-lg w-6 h-5"></div>
                        <div className="flex flex-col w-full">
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-gray-200">{item.description}</p>
                        </div> 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListTodoItems;