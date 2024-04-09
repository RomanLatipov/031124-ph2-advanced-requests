import { useState } from 'react'

function BookForm({booksData, setBooksData}) {


    // INPUT STATE
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")


    // HANDLE SUBMIT
    function handleSubmit(event) {
        event.preventDefault();

        fetch("http://localhost:3003/books", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title, 
                author, 
                likes: 0, 
                reads: 0
            })
        })
        .then(res => res.json())
        .then(newBookObj => {
            setBooksData([...booksData, newBookObj])
        })
        
    }


    // RENDER
    return (
        <form onSubmit={handleSubmit}>

            <h2>Add New Book</h2>

            {/* Title Input */}
            <input type="text" 
            name="title"
            placeholder="title"
            onChange={e => setTitle(e.target.value)}
            value={title} />

            {/* Author Input */}
            <input type="text" 
            name="author"
            placeholder="author"
            onChange={e => setAuthor(e.target.value)}
            value={author} />

            {/* Submit Button */}
            <input type="submit" value="Add Book" />

        </form>
    )

}

export default BookForm