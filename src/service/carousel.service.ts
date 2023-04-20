import axios from "axios";
import { NewCarouselProps, UpdateCarouselProps } from "../interface/";

class CarouselServices {
     public async GetCarousel() {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/carousel`);
     }

     public async GetCarouselById(id: string) {
          return await axios.post(`${process.env.REACT_APP_BACKEND}/carousel/${id}`);
     }
     public async AddCarousel({ dataAlt, dataImage }: NewCarouselProps) {
          return await axios.post(`${process.env.REACT_APP_BACKEND}/carousel`, { dataAlt, dataImage });
     }

     public async UpdateCarouselById(props: UpdateCarouselProps) {
          return await axios.put(`${process.env.REACT_APP_BACKEND}/carousel/${props.id}`, {
               dataAlt: props.data.dataAlt,
               dataImage: props.data.dataImage,
          });
     }

     public async DeleteCarouselById(id: string) {
          return await axios.delete(`${process.env.REACT_APP_BACKEND}/carousel/${id}`);
     }
}

const CarouselService = new CarouselServices();

export default CarouselService;
