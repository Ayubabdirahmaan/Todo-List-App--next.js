'use server'

import { revalidatePath } from "next/cache"
import { deleteTodo } from "../lib/todo"

export async function deletedTodo(id: string) {
    if (!id) {
        console.error('Todo ID is required')
        return 
    }

    const success = await deleteTodo(id)

    if (!success) {
        console.log('Failed to delete todo')
        return 
    }

    revalidatePath('/')
}