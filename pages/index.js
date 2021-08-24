import Head from 'next/head'
import { useCallback } from 'react';

export default function Home() {

  var is_nav_hidden = true;

  const toggleClick = useCallback(()=>{ 
    console.log("click") 
    console.log(is_nav_hidden) 
    is_nav_hidden = !is_nav_hidden
  }, [is_nav_hidden])

  console.log(is_nav_hidden)

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-300">
      <Head>
        <title>Martin's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <header className="flex pt-2 pb-10 px-2 font-bold">Martin Mena
      </header>
      <main className="flex px-5">

        <nav className="flex-none">
          <button onClick={toggleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"  >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="hidden md:block" >
            <Navbar></Navbar>
          </div>
        </nav>
        <article className="px-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae dui et tellus elementum mollis. Suspendisse vel aliquam magna. Phasellus et nisl et quam finibus pulvinar eget euismod massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec augue tellus, sagittis gravida magna ac, interdum viverra sem. Pellentesque tempor, purus vel placerat ullamcorper, urna est semper dui, ac tincidunt massa nunc eu augue. Donec fringilla urna vel congue aliquam. Quisque porttitor vulputate finibus. Donec rutrum pulvinar dui, nec viverra elit semper a. Curabitur pharetra in libero non suscipit. Nulla cursus non turpis quis commodo. Nulla nulla leo, cursus et laoreet non, venenatis sed tellus. Ut sit amet eleifend ex. Etiam vestibulum tincidunt euismod.

          Maecenas laoreet sit amet nulla eget posuere. Curabitur sed eros quam. Proin ac pharetra augue. Vestibulum vestibulum, metus vestibulum condimentum tincidunt, mi urna venenatis lectus, faucibus consectetur orci nisl ut leo. Donec quis facilisis nisi, quis porta dui. Quisque non nisl ut sapien lobortis vulputate id iaculis magna. Duis ut blandit nisl. Morbi fermentum purus vel purus posuere, vel hendrerit ipsum faucibus.
        </article>
      </main>
      <footer className="flex-1 p-10 text-2xl font-bold justify-center align-center">
        footer goes here
      </footer>
    </div>

  )
}


function Navbar(props){
  return [
  <a href="" className="block py-2.5 px-4">a link goes here</a>,
  <a href="" className="block py-2.5 px-4">a link goes here</a>,
  <a href="" className="block py-2.5 px-4">a link goes here</a>,
  <a href="" className="block py-2.5 px-4">a link goes here</a>]
}