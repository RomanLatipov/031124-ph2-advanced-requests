import { useState, useEffect } from 'react'
import BooksContainer from './BooksContainer'
import BookForm from './BookForm'

function App() {


  // BOOKS STATE
  const [booksData, setBooksData] = useState( [] )


  // FETCH ALL BOOKS
  useEffect(() => {
      fetch("http://localhost:3003/books")
      .then(res => res.json())
      .then(data => setBooksData(data))
  }, [])

  function handleDelete(id) {
    const filteredBooks = booksData.filter(book => book.id != id);
    setBooksData(filteredBooks);

    fetch('http://localhost:3003/books/'+id, { 
        method: 'DELETE' })
    .then()
  }
  function handleUpdateLikes(book) {
    fetch("http://localhost:3003/books/"+book.id, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            likes: book.likes+1,
        })
    })
    .then(res => res.json())
    .then(updatedBook => {
        const updatedBookData = booksData.map(book => {
          if (book.id !== updatedBook.id) {
            return book
          }
          else {
            return updatedBook
          }
        })
        setBooksData(updatedBookData);
    })
  }
  function handleUpdateReads(book) {
    fetch("http://localhost:3003/books/"+book.id, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            reads: book.reads+1,
        })
    })
    .then(res => res.json())
    .then(updatedBook => {
        const updatedBookData = booksData.map(book => {
          if (book.id !== updatedBook.id) {
            return book
          }
          else {
            return updatedBook
          }
        })
        setBooksData(updatedBookData);
    })
  }


  // RENDER
  return (
    <div className="App">

      <h1>Advanced Fetch Requests</h1>

      <main>

        <BooksContainer booksData={booksData} handleDelete={handleDelete} handleUpdateLikes={handleUpdateLikes} handleUpdateReads={handleUpdateReads}/>

        <BookForm booksData={booksData} setBooksData={setBooksData}/>
      
      </main>



    </div>
  )
}

export default App