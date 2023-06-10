import axios from "axios";

class ContentServices {
     public async GetAdminContent() {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/admin-content`);
     }
}

const ContentService = new ContentServices();

export default ContentService;
