import express, { Router } from "express";
import { createPost, getAllPost, getPost, deletePost } from "../controller/post-controller.js";
import { uploadImage, getImage } from "../controller/Imagecontroller.js";
import upload from "../utils/upload.js";

const router = express.Router();
router.post("/create", createPost);

router.get("/posts", getAllPost);
router.get("/posts/:id", getPost);
router.delete("/delete/:id", deletePost);
router.post("/file/upload", upload.single("file"), uploadImage);
router.delete("/file/:filename", getImage);

export default router;
