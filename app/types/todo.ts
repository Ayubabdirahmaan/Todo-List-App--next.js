export type Todo = {
    _id: string,
    title: string,
    completed: boolean,
    createdAt: string,
    updatedAt?: string
}

export type createTodo = {
    title: string,
    completed?: boolean
}

export type updateTodo = {
    title?: string,
    completed?: boolean
}