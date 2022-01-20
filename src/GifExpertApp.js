
//Componente (GIFExpertApp)

import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch']);

  return ( 
  <>
    <h2>Gif Expert App</h2>
    <AddCategory setCategories = { setCategories }/>
    <hr></hr>


    <ol>
      {
        //ciclos for..(similar)
        categories.map( category => (
          <GifGrid 
            key={category}
            category={ category }
          />
        ))
      }
    </ol>
  </>
  )
};
