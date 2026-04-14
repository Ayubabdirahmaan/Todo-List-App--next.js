"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export async function login(forData: FormData) {
    const role = forData.get("role") as string;

    (await cookies()).set("auth", "true");
    (await cookies()).set('role', role)

    redirect('/Dashboard')
}
