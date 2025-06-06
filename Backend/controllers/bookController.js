const { books } = require("../database/connection")

//fetch all books from database

exports.fetchBook = async (req, res)=>{

    const data = await books.findAll();

   res.json({
    message : "Successfully fetched all book.",
    data : data
   })
}

//delete books from database

exports.deleteBook = async (req, res)=>{

    const id = req.params.id;

    await books.destroy({
       where : {
        id : id
       }
    })

   res.json({
    message : "Successfully deleted book."
   })
}

//add books from database

exports.addBook = async (req, res)=>{

    const {bookName, bookAuthor, bookGenre, bookDescription, bookImage, bookPrice} = req.body;

    await books.create({
        bookName : bookName,  //column name : value
        bookAuthor : bookAuthor,
        bookDescription : bookDescription,
        bookGenre : bookGenre,
        bookImage : bookImage,
        bookPrice : bookPrice
    })

   res.json({
    message : "Successfully added book."
   })
}

//update book from database

exports.updateBook = async (req, res)=>{

    const {bookName, bookAuthor, bookGenre, bookDescription, bookImage, bookPrice} = req.body;
    const id = req.params.id;

    await books.update({
        bookName : bookName,  //column name : value
        bookAuthor : bookAuthor,
        bookDescription : bookDescription,
        bookGenre : bookGenre,
        bookImage : bookImage,
        bookPrice : bookPrice
    },
{
    where : {
        id : id
    }
})

   res.json({
    message : "Successfully updated book."
   })
}

//fetch single book

exports.fetchSingleBook = async (req, res)=>{
    const id = req.params.id;
    const data = await books.findByPk(id);

    res.json({
        message : "Successfully fetched single book",
        data : data
    })

}