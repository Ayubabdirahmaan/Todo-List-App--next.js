import { ObjectId } from "mongodb";
import { createTodoInput, Todo } from "../types/todo";
import { getTodoCollection } from "./db";
// fetch todos all todos
export async function fetchTodos(): Promise<Todo[]> {
    try {
        const collection = await getTodoCollection();
        const todos = await collection.find().toArray();

        return todos.map((todo) => ({
            _id: todo._id.toString(),
            title: todo.title,
            completed: todo.completed,
            createdAt: todo.createdAt.toISOString(),
            updatedAt: todo.updatedAt?.toISOString()
        }));
    } catch (error) {
        console.error('Error fetching todos:', error)
        return []
    }
}

export async function fetchTodoById(id: string): Promise<Todo | null> {
    try {
        const collection = await getTodoCollection()
        const todo = await collection.findOne({ _id: new ObjectId(id) })

        if (!todo) {
            return null
        }
        return {
            _id: todo._id.toString(),
            title: todo.title,
            completed: todo.completed,
            createdAt: todo.createdAt.toISOString(),
            updatedAt: todo.updatedAt?.toISOString()

        }
    } catch (error) {
        console.error('Error fetching todo by id:', error)
        return null

    }
}

export async function createTodo(todo: createTodoInput): Promise<string | null> {
    try {
        const collection = await  getTodoCollection()
        const result = await collection.insertOne(todo)
        return result.insertedId.toString()
        
    } catch (error) {
        console.error('error creared todo', error)
        return null
    }
}