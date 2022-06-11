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
      <Footer />
    </Document>
  )
}

const footerLinks = [
  {header: 'Abstract', links: ['start trial', 'pricing', 'download']},
  {
    header: 'Resources',
    links: ['blog', 'help center', 'release notes', 'status'],
  },
  {
    header: 'Community',
    links: ['twitter', 'linkedIn', 'facebook', 'dribbble', 'podcast'],
  },
  {header: 'Company', links: ['about us', 'careers', 'legal']},
]

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

function Footer() {
  return (
    <div className="bg-black flex px-5 sm:px-10 sm:py-5">
      <div className="w-full relative sm:px-20 sm:pb-20 lg:pb-36 xl:pb-20">
        <div className="grid lg:grid-cols-4 grid-cols-2 w-full">
          {footerLinks.map(col => (
            <div key={col.header} className="w-fit lg:w-full">
              <h1 className="text-white text-2xl font-semibold mt-10">
                {col.header}
              </h1>
              <div className="flex flex-col">
                {col.links.map(link => (
                  <Link to={link} key={link} className="text-white">
                    {link}
                  </Link>
                ))}
              </div>
              {col.header === 'Company' ? (
                <>
                  <h1 className="font-bold text-white mt-3">Contact Us</h1>
                  <Link to="/" className="text-white hover:underline">
                    info@abstract.com
                  </Link>
                </>
              ) : null}
            </div>
          ))}
        </div>
        <div className="lg:absolute bottom-0 right-0 flex justify-end mt-10">
          <div className="w-fit">
            <LogoIcon className="w-10 h-10" />
            <p className="text-white mt-3">
              © Copyright 2022
              <br /> Abstract Studio Design, Inc. <br /> All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
