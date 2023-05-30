import axios from "axios";
import { NewBlogProps, UpdateBlogProps } from "../interface";

class BlogServices {
     public async GetBlog() {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/blogs`);
     }

     public async GetBlogById(id: string) {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/blogs/${id}`);
     }
     public async AddBlog({ label, body, images }: NewBlogProps) {
          return await axios.post(`${process.env.REACT_APP_BACKEND}/blogs/`, {
               label,
               images,
               body,
          });
     }
     public async UpdateBlogById({ id, data }: UpdateBlogProps) {
          return await axios.put(`${process.env.REACT_APP_BACKEND}/blogs/${id}`, {
               label: data.label,
               images: data.images,
               body: data.body,
          });
     }
     public async DeleteBlogById(data: string) {
          return await axios.delete(`${process.env.REACT_APP_BACKEND}/blogs/${data}`);
     }
}

const BlogService = new BlogServices();

export default BlogService;
