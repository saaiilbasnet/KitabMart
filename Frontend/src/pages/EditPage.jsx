import { useNavigate, useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import axios from "axios";
import { useEffect, useState } from "react";

function EditPage(){

    const navigate = useNavigate();
    const {id} = useParams();
    const [book, setBook] = useState({});


    const fetchBook = async ()=>{
        const response = await axios.get("http://localhost:4000/books/"+id);
        setBook(response.data.data);
    }

    useEffect(()=>{
        fetchBook()
    },[])

    const editBook = async (event)=>{
        event.preventDefault();

        const response = await axios.patch("http://localhost:4000/books/"+id,book);
        if(response.status === 200){
            alert("Book Updated!");
            navigate(`/single-page/${id}`);
        }
        else{
            alert("Something went wrong");
        }

    }

    const handleChange = (event)=>{
       const {name, value} = event.target;
        setBook({
            ...book,
            [name] : value
        }) 
    }

    return (
        <>
        <NavBar/>

          <div className="mt-6 flex items-center justify-center min-h-screen ">
  <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
    <h1 className="text-2xl font-semibold mb-4 text-gray-800">Edit Book Information</h1>
    <form onSubmit={editBook}>
      {/* Book Name */}
      <div className="mb-4">
        <label htmlFor="cardholder-name" className="block text-sm font-medium text-gray-700">Book Name</label>
        <input type="text" value={book.bookName} onChange={handleChange} id="cardholder-name" name="bookName" placeholder="The Alchemist" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required />
      </div>
      {/* Book Description */}
      <div className="mb-4">
        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Book Description</label>
        <input value={book.bookDescription} onChange={handleChange} type="text" id="card-number" name="bookDescription" placeholder="A journey of self-discovery across the desert in search of treasure." className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required  />
      </div>

            <div className="mb-4">
        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Book Genre</label>
        <input value={book.bookGenre} onChange={handleChange} type="text" id="card-number" name="bookGenre" placeholder="Fiction" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required  />
      </div>

            <div className="mb-4">
        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Book Author</label>
        <input value={book.bookAuthor} onChange={handleChange} type="text" id="card-number" name="bookAuthor" placeholder="John Doe" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required  />
      </div>


            <div className="mb-4">
        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Book Price</label>
        <input value={book.bookPrice} onChange={handleChange} type="text" id="card-number" name="bookPrice" placeholder="$19" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required maxLength={10} />
      </div>

            <div className="mb-4">
        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Book Image URL</label>
        <input value={book.bookImage} onChange={handleChange} type="text" id="card-number" name="bookImage" placeholder="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required />
      </div>


      {/* Submit Button */}
      <div>
        <button type="submit" className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg shadow hover:bg-teal-700 transition">
          Edit Book
        </button>
      </div>
    </form>
  </div>
</div>

        </>
    )
}

export default EditPage