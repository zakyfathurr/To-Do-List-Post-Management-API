const express = require('express');

const router = express.Router();

const PostsController = require('../controller/Posts')
/**
 * @swagger
 * /Posts:
 *   get:
 *     summary: Get all Posts
 *     description: Mengambil daftar semua postingan.
 *     responses:
 *       200:
 *         description: Daftar postingan berhasil diambil.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Getting data Success!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     example: {"id":1,"title":"Introducing ","brand":"Apple","platform":"iOS","description":"Introducing the.","due_date":"2025-02-17T17:00:00.000Z","payment":"99.99","status":"completed","created_at":"2025-02-18T18:50:51.000Z","updated_at":"2025-02-18T18:50:51.000Z"}
 *                 status:
 *                   type: integer
 *                   example: 200
 *       500:
 *         description: Server error saat mengambil data.
 */



/**
 * @swagger
 * /Posts:
 *   post:
 *     summary: Create a new Post
 *     description: Menambahkan postingan baru ke dalam sistem.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "new iphone"
 *               brand:
 *                 type: string
 *                 example: "Apple"
 *               platform:
 *                 type: string 
 *                 example: "IOS"
 *               description:
 *                 type: string 
 *                 example: "xxxxxxxxx"
 *               due_date:
 *                 type: datetime 
 *                 example: "2025-12-12"
 *               payment:
 *                 type: double 
 *                 example: 99.99
 *               status:
 *                 type: string 
 *                 example: "pending"
 *     responses:
 *       201:
 *         description: postingan berhasil dibuat.
 *       400:
 *         description: Bad request jika validasi gagal.
 *       500:
 *         description: Server error saat membuat postingan.
 */

/**
 * @swagger
 * /Posts/{idPost}:
 *   get:
 *     summary: Get Post from idPost
 *     description: Mengambil daftar sebuah postingan dari idPost.
 *     parameters:
 *       - in: path
 *         name: idPost
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID postingan yang ingin diambil.
 *     responses:
 *       200:
 *         description: Postingan berhasil diambil.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Getting data Success!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     example: {"id":1,"title":"Introducing ","brand":"Apple","platform":"iOS","description":"Introducing the.","due_date":"2025-02-17T17:00:00.000Z","payment":"99.99","status":"completed","created_at":"2025-02-18T18:50:51.000Z","updated_at":"2025-02-18T18:50:51.000Z"}
 *                 status:
 *                   type: integer
 *                   example: 200
 *       500:
 *         description: Server error saat mengambil data.
 */


/**
 * @swagger
 * /Posts/{idPost}:
 *   patch:
 *     summary: Update Post data
 *     description: Memperbarui data postingan berdasarkan ID.
 *     parameters:
 *       - in: path
 *         name: idPost
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID postingan yang ingin diperbarui.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "new iphone"
 *               brand:
 *                 type: string
 *                 example: "Apple"
 *               platform:
 *                 type: string 
 *                 example: "IOS"
 *               description:
 *                 type: string 
 *                 example: "xxxxxxxxx"
 *               due_date:
 *                 type: datetime 
 *                 example: "2025-12-12"
 *               payment:
 *                 type: double 
 *                 example: 99.99
 *               status:
 *                 type: string 
 *                 example: "pending"
 *     responses:
 *       200:
 *         description: Data postingan berhasil diperbarui.
 *       404:
 *         description: postingan tidak ditemukan.
 */

/**
 * @swagger
 * /Posts/{idPost}:
 *   delete:
 *     summary: Delete a Post
 *     description: Menghapus postingan berdasarkan ID.
 *     parameters:
 *       - in: path
 *         name: idPost
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID postingan yang ingin dihapus.
 *     responses:
 *       200:
 *         description: postingan berhasil dihapus.
 *       404:
 *         description: postingan tidak ditemukan.
 */

router.get('/',PostsController.getAllPosts)

router.post('/', PostsController.createNewPost)

router.patch('/:idPost', PostsController.updatePost)

router.delete('/:idPost', PostsController.deletePost)

router.get('/:idPost', PostsController.getPostbyId)

module.exports = router