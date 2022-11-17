import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([ 'One Punch']);
  
  const onaddCategory = ( newCategory ) => {
    //add One Piece

    if ( categories.includes(newCategory) ) return;

    setCategories( current => [newCategory, ...current] );

  }
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory = { onaddCategory }
      />
        {
          categories.map( ( category ) => (
              <GifGrid key={ category } category={ category }/>
          ))
        }
    </>
  )
}
