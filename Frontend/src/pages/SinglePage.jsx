import { Link, useNavigate, useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import axios from "axios";
import { useEffect, useState } from "react";

function SinglePage(){

    const {id} = useParams();
    const navigate = useNavigate();

    const [book, setBook] = useState({});

    const fetchSingleBook = async ()=>{
        const response = await axios.get("http://localhost:4000/books/"+id);
        setBook(response.data.data);
        console.log(response);
    }

    const deleteBook = async ()=>{
        const response = await axios.delete("http://localhost:4000/books/"+id);
        if(response.status === 200){
            navigate('/');
            alert("Book Deleted");
        }
        else{
            alert("Something went wrong");
        }
    }

    useEffect(()=>{
        fetchSingleBook();
    },[])

    return (
        <>
        <NavBar />

        {/* single card */}

<div className="bg-white min-h-screen flex items-center justify-center p-6">
  <div className="bg-gray-50 dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden max-w-4xl w-full grid md:grid-cols-2">
    {/* Recipe Image */}
    <div className="h-64 md:h-auto">
      <img src={book.bookImage} alt="Delicious Recipe" className="w-full h-full object-cover" />
    </div>
    {/* Recipe Content */}
    <div className="p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold font-sans text-gray-800 dark:text-white mb-2">{book.bookName}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Description: {book.bookDescription}</p>
        {/* Instructions */}
        <p className="text-gray-600 dark:text-gray-300 mb-4">Author: {book.bookAuthor}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Genre: {book.bookGenre}</p>
        <div>
          <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">Price: ${book.bookPrice}</h3>
        </div>
      </div>
      {/* Footer CTA */}
      <div className="flex gap-4 mt-6 text-right">
                <button onClick={deleteBook} className="cursor-pointer bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg transition">Delete</button>
      <Link to={`/edit-page/${book.id}`}>  <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-lg transition">Edit</button> </Link>
      </div>
    </div>
  </div>
</div>


        </>
    )
}

export default SinglePage