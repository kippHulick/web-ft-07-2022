import React from 'react'

// https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/
const Book = ({book}) => {
  return (
    <>

    <img src={"https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/" + book.imageLink} alt="" />
    </>
  )
}

export default Book