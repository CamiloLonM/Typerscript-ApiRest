import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_Get_Blog");
  }
};

const getBlogs = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_Get_Blogs");
  }
};

const updateBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_Update_Blog");
  }
};

const postBlog = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (error) {
    handleHttp(res, "ERROR_Post_Blog");
  }
};

const deleteBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_Delete_Blog");
  }
};

export { getBlog, getBlogs, updateBlog, postBlog, deleteBlog };
