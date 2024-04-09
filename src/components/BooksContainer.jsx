import BookItem from "./BookItem"

function BooksContainer({ booksData, handleDelete, handleUpdateLikes, handleUpdateReads }) {

    // MAPPED BOOKS
    const mappedBooks = booksData.map( book => <BookItem key={book.id} id={book.id} book={book} handleDelete={handleDelete} handleUpdateLikes={handleUpdateLikes} handleUpdateReads={handleUpdateReads}/> )


    // RENDER
    return (
        <div className="flex-container">

            { mappedBooks }

        </div>
    )

}

export default BooksContainer