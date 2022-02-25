import React from 'react' //import component
import ReactDom from 'react-dom' //import dom manipulation

// CSS
import './index.css'
import { greeting } from './testing/testing'

import { data } from './books'
import SpecificBook from './Book'

function BookList() {
  console.log(greeting)
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>
      })}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
