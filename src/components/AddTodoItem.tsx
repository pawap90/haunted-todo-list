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
            <div className="flex space-x-4 bg-slate-900 p-4 rounded-lg">
                <div className="border-2 mt-2 border-pink-300 rounded-lg w-6 h-5"></div>
                <div className="flex flex-col w-full">
                    <input
                        type="text"
                        className="bg-transparent w-full py-1 rounded-md focus:outline-none"
                        placeholder="Title"
                        value={title}
                        onChange={handleTitleSave}
                    />
                    <input
                        type="text"
                        className="bg-transparent w-full py-1 rounded-md focus:outline-none"
                        placeholder="Description"
                        value={description}
                        onChange={handleDescriptionSave}
                    />
                </div>
                <button type="submit" className="self-end bg-pink-600 px-2 py-1 rounded text-sm hover:bg-pink-500">Add</button>
            </div>           
        </form>
    );
}

export default AddTodoItem;