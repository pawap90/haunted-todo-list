import { useState } from "react";
import { TodoItem } from "../types/TodoItem";

const KEY = 'todo-items';

function useTodoItemStorage() {

    const [items, setItems] = useState<TodoItem[]>(getTodoItems());

    function getTodoItems(): TodoItem[] {
        const dbItems = localStorage.getItem(KEY);
        return dbItems ? JSON.parse(dbItems) : [];
    }

    function addTodoItem(item: Omit<TodoItem, 'id'>) {
        const newTodoItem = {
            id: items.length + 1,
            ...item
        };
        const newItems = [...items, newTodoItem];
        setItems(newItems);
        localStorage.setItem(KEY, JSON.stringify(newItems));
    }

    return {
        items,
        addTodoItem
    }
}

export default useTodoItemStorage;