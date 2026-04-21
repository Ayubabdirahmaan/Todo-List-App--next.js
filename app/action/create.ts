'use server'

import { revalidatePath } from "next/cache"
import { createTodo } from "../lib/todo"
import { redirect } from "next/navigation"

export async function createTodoAction(formData: FormData) {
    const title = formData.get('title') as string

    if (!title || title.trim().length === 0) {
        return
    }

    const todoId = await createTodo({ title : title.trim() , createdAt: new Date().toISOString() , updatedAt: new Date().toISOString() })

    if (!todoId) {
        return
    }

    revalidatePath('/')
    redirect('/')
}