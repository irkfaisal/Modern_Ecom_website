import React from 'react'
import Nav from './Components/Nav'
import { Hero, PopularProducts, SuperQuality } from './Sections'

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
    </main>

  )
}

export default App

