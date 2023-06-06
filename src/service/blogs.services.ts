import axios from "axios";

class BlogServices {
     public async BlogList() {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/blogs`);
     }
     public async BlogListById(id: string) {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/blogs/${id}`);
     }
}

const BlogService = new BlogServices();

export default BlogService;
