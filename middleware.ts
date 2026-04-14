import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const auth = request.cookies.get('auth')?.value
    const role = request.cookies.get('role')?.value

    if (request.nextUrl.pathname.startsWith('/Dashboard') && !auth) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/admin') && role !== 'Admin') {
        return NextResponse.redirect(new URL('/Dashboard', request.url))
    }
    return NextResponse.next()
}