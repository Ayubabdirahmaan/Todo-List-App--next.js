import { updateTodoAction } from "@/app/action/update";
import { fetchTodoById } from "@/app/lib/todo";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function EditeTodo({ params }: { params: { id: string } }) {
    const todo = await fetchTodoById(params.id)
    if (!todo) {
        return notFound
    }

    return (
        <main className="max-w-2xl mx-auto mt-10 p-6">
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Edit Todo</h1>
                    <Link href={'/'} className="text-rose-600 hover:text-rose-800 transition-colors">
                        ← Back to Todos
                    </Link>
                </div>
                <form action={updateTodoAction}>
                    <input type="hidden" name="id" value={todo?._id} />
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Todo Title</label>
                        <input type="text"
                            id="title"
                            name="title"
                            defaultValue={todo.title}
                            placeholder="Enter your todo..."
                            className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                            maxLength={200}
                            autoFocus
                        />
                        <p>Maximum 200 characters</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex-1 bg-rose-600 text-white py-2 px-4 rounded-m hover:bg-rose-700 focus:outline-none 
                                    focus:ring-2 focus:ring-rose-500 transition-colors">Update Todo</button>
                        <Link href={'/'} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"> Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    )
}