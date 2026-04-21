'use server'

import { revalidatePath } from "next/cache"
import { fetchTodoById, updateTodo } from "../lib/todo"
import { redirect } from "next/navigation"

export async function updateTodoAction(formData: FormData) {
    try {
        const id = formData.get('id') as string
        const  title = formData.get('title') as string

        if(!id  || !title ||  title.trim().length === 0) {
                return 'Title is required'
        }

        const existingTodo = await fetchTodoById(id)

        if(!existingTodo) {
            return 'Todo not found'
        }
        const success = await updateTodo(id, {title: title.trim()})

        if(!success) {
            return 'Failed to update todo'
        }

        revalidatePath('/')
        redirect('/')
        
    } catch (error) {
        console.error('Error updating todo:', error)
        return 'Failed to update todo'
    }
}