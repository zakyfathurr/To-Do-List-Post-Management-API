const express = require('express');
const app = express();
require('dotenv').config()
const PostsRoutes = require('./routes/Posts');
const middlewareLogRequest = require('./middleware/log')
const setupSwagger = require('./docs/swagger'); // Import Swagger

app.use(express.json())

app.use(middlewareLogRequest)

setupSwagger(app);

app.use('/posts', PostsRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Welcome to To-Do List Post Management API!.You can find the documentation in endpoint /api-docs  ',
        status: 404
    });
});


app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        status: 500
    })
})


app.listen(process.env.PORT,()=>{
    console.log('Server is running on port ',process.env.PORT)
})