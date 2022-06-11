import type {MetaFunction} from '@remix-run/node'
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import LogoIcon from './components/icons/logo-icon'
import styles from './styles/app.css'

export function links() {
  return [{rel: 'stylesheet', href: styles}]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Abstract (Practice)',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  return (
    <Document title="Abstract (Practice)">
      <Layout />
      <Outlet />
    </Document>
  )
}

export function Document({
  title,
  children,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <html lang="en">
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

function Layout() {
  return (
    <div className="bg-black w-full flex justify-between px-32 py-5">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <LogoIcon className="w-8 h-8 " />
          <h1 className="text-white text-xl ml-1 font-medium">Abstract</h1>
        </Link>
        <Link to="/help-center" className="text-2xl text-white ml-2">
          | Help Center
        </Link>
      </div>
      <div className="flex">
        <button className="text-2xl text-white border-2 rounded-md px-5 font-light py-2">
          Submit a request
        </button>
        <button className="text-2xl text-white ml-4 bg-darkBlue rounded-md px-7 font-light py-2">
          Sign in
        </button>
      </div>
    </div>
  )
}
