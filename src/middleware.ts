import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/request'

export function middleware(request: NextRequest) {
    const url = request.nextUrl
    const hostname = request.headers.get('host')

    // Define allowed domains (including localhost for development)
    const allowedDomains = ['essential.dumatechnology.com']

    // Check if the hostname matches our target subdomain
    if (hostname === 'essential.dumatechnology.com') {
        // Rewrite to the /essential directory
        return NextResponse.rewrite(new URL(`/essential${url.pathname}${url.search}`, request.url))
    }

    return NextResponse.next()
}

// Config to match all paths except for static files and api
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
