const postModel = require('../models/posts');
const validateBody = require('../utils/validation')
const getAllPosts = async (req,res) =>{
    try{
        const [datas] = await postModel.getAllPosts()  //get all posts from the postModel
        res.status(200).json({ 
            message: 'Getting data Success!',
            data: datas,
            status: 200  // Status code 200 for a successful response
        });
    }catch(err){
        res.status(500).json({ 
            message: 'Server Error while getting data!',
            status: 500,  // Status code 500 for a server error
            serverMessage : err
        });
    }
    
}

const createNewPost = async (req,res) =>{
    const validationBody = validateBody(req.body)

    if (validationBody){
        return res.status(400).json({
            message: 'Bad Request. Validation failed',
            status: 400,
            errors: validationBody
        });   
    }
    try{
        let body = req.body
        const datas = await postModel.createNewPost(body);
        res.status(201).json({ 
            message: 'Creating new Post success!',
            data: datas,
            status: 201 
        });
    }catch(err){
        res.status(500).json({ 
            message: 'Server Error while creating new Post',
            status: 500,
            serverMessage : err
        });
    }
}

const updatePost = async (req,res) =>{
    let idPost = req.params.idPost  //params.idPost harus sama dengan yang di router
    const validationBody = validateBody(req.body)

    if (validationBody){
        return res.status(400).json({
            message: 'Bad Request. Validation failed',
            status: 400,
            errors: validationBody
        });
    }

    try{
        const datas =await  postModel.updatePost(req.body,idPost);
        if (datas[0].affectedRows ===0){
            return res.status(404).json({
                message: 'Post not found',
                status: 404
            }); 
        }
        res.status(202).json({ 
            message: `Updating Post ${idPost} success!`,
            affectedRows: datas[0].affectedRows,
            new_data : req.body,
            status: 202
        });
    }catch(err){
        res.status(500).json({ 
            message: 'Server Error while updating Post',
            status: 500,
            serverMessage : err.message
        });
        console.log(err);
    }
}

const deletePost =async (req,res) =>{
    let idPost = req.params.idPost
    try{
        const datas =await  postModel.deletePost(idPost);
        if (datas[0].affectedRows ===0){
            return res.status(404).json({
                message: 'Post not found',
                status: 404
            }); 
        }
        res.status(200).json({ 
            message: `Delete Post ${idPost} success`,
            affectedRows: datas[0].affectedRows,
            status: 200
        });
    }catch(err){
        res.status(500).json({ 
            message: 'Server Error while deleting Post',
            status: 500,
            serverMessage : err.message
        });
        console.log(err);
    }
}

const getPostbyId = async (req, res) =>{
    const idPost = req.params.idPost
    try{
        const [datas] = await postModel.getPostbyId(idPost);
        if (!datas[0]){
            return res.status(404).json({
                message: 'Post not found',
                status: 404
            });
        }
        res.status(200).json({ 
            message: 'Getting data success!',
            data: datas[0],
            status: 200
        });
    }catch(err){
        res.status(500).json({ 
            message: 'Server Error while getting data!',
            status: 500,
            serverMessage : err
        });
        console.log(err);
    }
}

module.exports = {
    getAllPosts,
    createNewPost,
    updatePost,
    deletePost,
    getPostbyId
 };