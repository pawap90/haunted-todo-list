import { useState } from "react";
import { TodoItem } from "../types/TodoItem";

type AddTodoItemProps = {
    onSave: (item: Omit<TodoItem, 'id'>) => void;
}

const AddTodoItem: React.FC<AddTodoItemProps> = ({ onSave }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleSave = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleDescriptionSave = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    }

    const handleOnSubimit = (event: React.FormEvent) => {
        event.preventDefault();
        onSave({ title, description });

        // Clear form
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={handleOnSubimit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleTitleSave}
            />
            <br />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={handleDescriptionSave}
            />
            <br />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoItem;