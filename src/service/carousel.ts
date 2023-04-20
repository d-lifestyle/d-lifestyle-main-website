import axios from "axios";
import { NewCarouselProps } from "../interface";

class CarouselService {
     public async GetAllCarousel() {
          return axios.get(`${process.env.BACKEND_URL}/carousel`);
     }

     public async GetCarouselById(id: string) {
          return axios.get(`${process.env.BACKEND_URL}/carousel/${id}`);
     }

     public async AddNewCarousel(data: NewCarouselProps) {
          return axios.post(`${process.env.BACKEND_URL}/carousel`, { data });
     }
     public async UpdateCarouselById(data: NewCarouselProps, id: string) {
          return axios.put(`${process.env.BACKEND_URL}/carousel/${id}`, { data });
     }
     public async DeleteCarouselById(id: string) {
          return axios.delete(`${process.env.BACKEND_URL}/carousel/${id}`);
     }
}

export default new CarouselService();
