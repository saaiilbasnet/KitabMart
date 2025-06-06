
//book, bookName, bookAuthor, bookGenre, bookDescription, bookPrice, bookImage

const bookModel = (sequelize, DataTypes)=>{
    const Book = sequelize.define("book",{
            bookName : {
                type : DataTypes.TEXT
            },
            bookAuthor : {
                type : DataTypes.TEXT
            },
            bookGenre : {
                type : DataTypes.TEXT
            },
            bookDescription : {
                type : DataTypes.TEXT
            },
            bookPrice : {
                type : DataTypes.FLOAT
            },
            bookImage : {
                type : DataTypes.TEXT
            }
    })
        return Book
    }

module.exports = bookModel