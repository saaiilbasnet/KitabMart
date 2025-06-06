import axios from "axios"
import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreatePage(){

  const navigate = useNavigate();
  const [book, setBook] = useState({
    bookName : "",
    bookPrice : "",
    bookGenre : "",
    bookDescription : "",
    bookImage : "",
    bookAuthor : ""
  })

  const handleChange = (event)=>{
        const {name, value} = event.target;
        setBook({
          ...book,
          [name] : value
        })
        console.log(book);
        
  }

  const submitBook = async (event)=>{
    event.preventDefault();
    const response = await axios.post("http://localhost:4000/books",book);
    if(response.status === 200){
      navigate('/');
      alert("Successfully added book!");
    }
    else{
      alert("Something went wrong!");
    }
  }

    return (
        <>
        <NavBar />

        <div className="mt-6 flex items-center justify-center min-h-screen ">
  <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
    <h1 className="text-2xl font-semibold mb-4 text-gray-800">Enter Book Information</h1>
    <form onSubmit={submitBook}>
      {/* Book Name */}
      <div className="mb-4">
        <label htmlFor="cardholder-name" className="block text-sm font-medium text-gray-700">Book Name</label>
        <input type="text" onChange={handleChange} id="cardholder-name" name="bookName" placeholder="The Alchemist" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required />
      </div>
      {/* Book Description */}
      <div className="mb-4">
        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Book Description</label>
        <input onChange={handleChange} type="text" id="card-number" name="bookDescription" placeholder="A journey of self-discovery across the desert in search of treasure." className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required  />
      </div>

            <div className="mb-4">
        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Book Genre</label>
        <input onChange={handleChange} type="text" id="card-number" name="bookGenre" placeholder="Fiction" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required  />
      </div>

            <div className="mb-4">
        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Book Author</label>
        <input onChange={handleChange} type="text" id="card-number" name="bookAuthor" placeholder="John Doe" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required  />
      </div>


            <div className="mb-4">
        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Book Price</label>
        <input onChange={handleChange} type="text" id="card-number" name="bookPrice" placeholder="$19" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required maxLength={10} />
      </div>

            <div className="mb-4">
        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Book Image URL</label>
        <input onChange={handleChange} type="text" id="card-number" name="bookImage" placeholder="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required />
      </div>


      {/* Submit Button */}
      <div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition">
          Add Book
        </button>
      </div>
    </form>
  </div>
</div>


        </>
    )
}

export default CreatePage