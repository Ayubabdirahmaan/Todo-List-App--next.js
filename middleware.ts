import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
        const auth = request.cookies.get('auth')
        const role = request.cookies.get('role')

        if(request.nextUrl.pathname.startsWith('/Dashboard') && !auth) {
            return NextResponse.redirect(new URL ('/login', request.url))
        }
    return NextResponse.next()
}