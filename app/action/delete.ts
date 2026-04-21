'use server'

import { revalidatePath } from "next/cache"
import { deleteTodo } from "../lib/todo"

export async function deletedTodo(id: string) {
    if (!id) {
        return 'Todo ID is required'
    }

    const success = await deleteTodo(id)

    if (!success) {
        return 'Failed to delete todo'
    }

    revalidatePath('/')
}