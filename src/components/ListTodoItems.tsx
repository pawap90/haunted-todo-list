import { TodoItem } from "../types/TodoItem";

type ListTodoItemsProps = {
    items: TodoItem[];
};

const ListTodoItems: React.FC<ListTodoItemsProps> = ({ items }) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </li>
            ))}
        </ul>
    );
};

export default ListTodoItems;