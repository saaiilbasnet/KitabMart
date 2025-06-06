const {Sequelize, DataTypes} = require('sequelize')

// class instantation and integrating connection string
const sequelize = new Sequelize("postgresql://postgres.xfhcrzhazwfigkevdsfz:[PASSWORD]4@aws-0-ap-south-1.pooler.supabase.com:6543/postgres");

// authenticating the connection
sequelize.authenticate()
.then(()=>{
    console.log("Connected to Supabase!");
    
})
.catch((error)=>{
    console.log("Error : "+error);
    
})

//creating a object to store and export

const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize

db.books = require('./models/bookModel')(sequelize, DataTypes);

// migration into Supabase

sequelize.sync({alter:true}).then(()=>{
    console.log("Migrated to Supabase");
    
}).catch((error)=>{
    console.log("Error : "+error);
    
})

//exporting this module
module.exports = db