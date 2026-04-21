export type Todo = {
    _id: string,
    title: string,
    completed: boolean,
    createdAt: string,
    updatedAt?: string
}

export type createTodoInput = {
    title: string,
    completed?: boolean
    createdAt: string
    updatedAt: string
}

export type updateTodoInput = {
    title?: string,
    completed?: boolean
}