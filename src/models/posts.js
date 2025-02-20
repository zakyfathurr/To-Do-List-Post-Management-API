const pool = require('../connection/db')

const getAllPosts= async () =>{
    const query = 'SELECT * FROM post'
    return await pool.query(query)
}

const createNewPost = async (body) =>{
    const query = `INSERT INTO post (title, brand, platform, description, due_date, payment, status) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [
        body.title, 
        body.brand, 
        body.platform, 
        body.description, 
        body.due_date, 
        body.payment, 
        body.status
    ];
    // console.log(body);
    return await pool.query(query,values)
}


const updatePost = async (body,idPost) =>{
    const query = `UPDATE post SET title=?, brand=?, platform=?, description=?, due_date=?, payment=?, status=? WHERE id=?`;
    const values = [
        body.title, 
        body.brand, 
        body.platform, 
        body.description, 
        body.due_date, 
        body.payment, 
        body.status,
        idPost
    ]
    try{
        return await pool.query(query,values)
    }catch(err){
        console.log(err);
        throw new Error('Error updating Post')
    }
}

const deletePost = async (idPost) =>{
    const query = 'DELETE FROM post WHERE id =?'
    return await pool.query(query, [idPost])
}

const getPostbyId = async (idpost) =>{
    const query = 'SELECT * FROM post WHERE id =?'
    return await pool.query(query, [idpost])
}

module.exports = {
    getAllPosts,
    createNewPost,
    updatePost,
    deletePost,
    getPostbyId,
 }