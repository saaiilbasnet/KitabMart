import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import Card from "../components/Card"
import axios from "axios"

function HomePage(){

    const [books, setBooks] = useState([])

    const fetchBooks = async ()=>{
        const response = await axios.get("http://localhost:4000/books");
        setBooks(response.data.data);
        console.log(response.data.data);
    }

    useEffect(()=>{
        fetchBooks()
    },[])

    return (

        <>
        <NavBar />
        
        <div className="mt-5 flex flex-wrap gap-2">
                    {
            books.map(function(book){
                return(
                    <Card key={book.id} book={book} />
                )
            })
        }
        </div>

        </>

    )
}

export default HomePage