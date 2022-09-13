import React from 'react'
import Book from './Book'

const Books = ({data}) => {
  return (
    <div className="row">
    
    

        {data.map(book =>{
            return <div className="col-3"> 
            
            
                <Book book={book} />

            </div>
        })}
    

    </div>
  )
}

export default Books