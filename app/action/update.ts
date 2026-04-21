'use server'

import { revalidatePath } from "next/cache"
import { fetchTodoById, updateTodo } from "../lib/todo"
import { redirect } from "next/navigation"

export async function updateTodoAction(formData: FormData) {
 
        const id = formData.get('id') as string
        const  title = formData.get('title') as string

        if(!id  || !title ||  title.trim().length === 0) {
            console.error('Title is required')
                return 
        }

        const existingTodo = await fetchTodoById(id)

        if(!existingTodo) {
            console.error('Todo not found')
            return 
        }
        const success = await updateTodo(id, {title: title.trim()})

        if(!success) {
            console.error('Failed to update todo')
            return 
        }

        revalidatePath('/')
        redirect('/')
        
    
}