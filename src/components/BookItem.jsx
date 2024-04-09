function BookItem({ book, handleDelete, handleUpdateLikes, handleUpdateReads }) {


    // RENDER
    return (
        <div className="flex-item book-item">

            <h2>{book.title}</h2>

            <h3>By {book.author}</h3>

            <button onClick={() => handleUpdateLikes(book)}>{book.likes} Likes</button>

            <button onClick={() => handleUpdateReads(book)}>Read by {book.reads} people</button>

            <button onClick={() => handleDelete(book.id)}>Remove Book</button>

        </div>
    )

}

export default BookItem