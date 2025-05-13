import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // Create a response object to modify and return
  const res = NextResponse.next()
  
  // Create authenticated Supabase client
  const supabase = createClient()
  
  // Refresh session if expired - required for Server Components
  const { data: { session } } = await supabase.auth.getSession()
  
  // If user is not signed in and the current path is a protected route
  // Redirect the user to /auth
  if (!session && isProtectedRoute(request.nextUrl.pathname)) {
    const redirectUrl = new URL('/auth', request.url)
    return NextResponse.redirect(redirectUrl)
  }
  
  // If user is signed in and trying to access auth pages (login/signup),
  // redirect them to the dashboard
  if (session && isAuthRoute(request.nextUrl.pathname)) {
    const redirectUrl = new URL('/dashboard', request.url)
    return NextResponse.redirect(redirectUrl)
  }
  
  return res
}

// Add your protected routes
function isProtectedRoute(pathname: string): boolean {
  const protectedRoutes = ['/dashboard']
  return protectedRoutes.some(route => pathname.startsWith(route))
}

// Add routes that should redirect to dashboard if user is already logged in
function isAuthRoute(pathname: string): boolean {
  const authRoutes = ['/auth']
  return authRoutes.some(route => pathname === route)
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public directory
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}