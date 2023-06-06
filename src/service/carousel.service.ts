import axios from "axios";

class CarouselServices {
     public async CategoryList() {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/carousel`);
     }
}

const CarouselService = new CarouselServices();

export default CarouselService;
