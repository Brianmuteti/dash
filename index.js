const express=require('express');

const app=express();
const cors = require("cors");

// const mysql=require('mysql');

// const cors=require('cors');
app.use(express.json());
app.use(cors());


app.use(express.urlencoded({ extended: true }))


const db=require("./models")


const usersRouter = require("./routes/Users");
app.use("/users", usersRouter);


const businessRouter = require('./routes/Business');
app.use("/business", businessRouter);


const staffRouter = require('./routes/Staffs');
app.use("/staff", staffRouter);

const customerRouter = require('./routes/Customers');
app.use("/customer", customerRouter);

const servicesRouter = require('./routes/Services');
app.use("/service", servicesRouter);

const productsRouter = require('./routes/productRouter')
app.use("/products", productsRouter)

app.use('/Images', express.static('./Images'))






db.sequelize.sync().then(()=>{

    app.listen(3001,()=>{
        console.log("Server running on port 3001");
    });

});
