import React, { useEffect, useState } from 'react'
import {Navbar} from './components/navbar'
import { Hero } from './components/hero'
import { FormSearch } from './components/formSearch';
import { Banner } from './components/banner';

const App = () => {
  return (
  <> 
    <Navbar />
    <Hero title="Alquiler de Carros Miami">
      <FormSearch />
    </Hero>
    <Banner />
  </>
  )
}

export default App