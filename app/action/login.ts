'use server'
import { cookies } from "next/headers"
import { redirect } from "next/navigation";
export async function Login(formData: FormData) {

    const role = formData.get('role') as string

    (await cookies()).set('role', role);
    (await cookies()).set('auth', 'true')

    redirect('/Dashboard')

}