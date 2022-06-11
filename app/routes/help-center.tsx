import type {LoaderFunction} from '@remix-run/node'
import {Form, Link, useLoaderData} from '@remix-run/react'
import ArrowRight from '~/components/icons/arrow-right'
import {type Category, getCategories} from '~/utils/categories'

type LoaderData = {categories: Category}

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {categories: getCategories()}
  return data
}

export default function HelpCenter() {
  const {categories} = useLoaderData<LoaderData>()
  return (
    <div>
      <div className="bg-primaryBg">
        <div className="max-w-2xl mx-auto py-32 flex flex-col items-center">
          <h1 className="text-7xl">How can we help?</h1>
          <Form action="post" className="w-full flex items-center">
            <input
              className="w-full mt-10 text-xl px-5 py-4 rounded-md ring-1 ring-black outline-none"
              type="search"
              name="query"
              id="query"
              placeholder="Search"
              aria-label="Search"
            />
            <ArrowRight className="mt-10 h-7 w-9 -ml-11" />
          </Form>
        </div>
      </div>
      <div className="grid grid-cols-2 px-48 py-28">
        {categories.map(category => (
          <div className="flex mr-2 my-12" key={category.header}>
            <img
              className="w-24 h-24 mx-10"
              src={category.img}
              alt={category.header}
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold">{category.header}</h1>
              <p className="text-2xl mt-4 font-light">{category.info}</p>
              <Link
                className="text-xl flex items-center text-darkBlue mt-4 font-light"
                to=""
              >
                Learn More
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
