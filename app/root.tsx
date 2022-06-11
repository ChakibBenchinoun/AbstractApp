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
import clsx from 'clsx'
import React from 'react'
import LogoIcon from './components/icons/logo-icon'
import MenuIcon from './components/icons/menu-icon'
import SearchIcon from './components/icons/search-icon'
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
  const [showMobileMenu, setShowMobileMenu] = React.useState(true)
  return (
    <div>
      <div className="bg-zinc-900 w-full flex justify-between px-5  md:px-24 py-5">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <LogoIcon className="w-8 h-8" />
            <h1 className="text-gray-400 text-xl ml-2 font-medium">Abstract</h1>
          </Link>
          <Link to="/help-center" className="text-2xl text-gray-400 ml-2">
            | Help Center
          </Link>
        </div>
        <div className="lg:flex hidden">
          <button className="text-2xl text-white border-2 rounded-md px-5 font-light py-2">
            Submit a request
          </button>
          <button className="text-2xl text-white ml-4 bg-darkBlue rounded-md px-7 font-light py-2">
            Sign in
          </button>
        </div>
        <div className="lg:hidden flex items-center">
          <SearchIcon className="text-white w-10 h-10 my-1 mr-3" />
          <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <MenuIcon
              isOpen={showMobileMenu}
              className="text-white w-10 h-10"
            />
          </button>
        </div>
      </div>
      <div
        className={clsx(
          showMobileMenu ? 'block' : 'hidden',
          'bg-zinc-900 border-t border-gray-400 p-10 absolute w-full',
        )}
      >
        <div className="flex items-center justify-center flex-col max-w-sm mx-auto">
          <Link
            to="/"
            className="text-2xl text-gray-400 border-b border-gray-400 py-5 w-full text-center"
          >
            Submit a request
          </Link>
          <Link to="/" className="text-2xl text-gray-400 py-5">
            Sign in
          </Link>
        </div>
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
