import { createAsyncThunk } from "@reduxjs/toolkit";

import { NewCarouselProps, UpdateCarouselProps } from "../../interface";
import carouselService from "../../service/carousel.service";

const GetAllCarousel = createAsyncThunk("carousel/all", async () => {
     const data = await carouselService.GetCarousel();
     return await data.data.data;
});

const GetCarouselById = createAsyncThunk("carousel/by-id", async (props: string) => {
     const data = await carouselService.GetCarouselById(props);
     return await data.data.data;
});

const AddNewCarousel = createAsyncThunk("carousel/new", async (props: NewCarouselProps) => {
     const data = await carouselService.AddCarousel(props);
     return await data.data.data;
});

const UpdateCarouselById = createAsyncThunk("carousel/update", async (props: UpdateCarouselProps) => {
     const data = await carouselService.UpdateCarouselById(props);
     return await data.data.data;
});

const DeleteCarouselById = createAsyncThunk("carousel/delete", async (props: string) => {
     const data = await carouselService.DeleteCarouselById(props);
     return await data.data.data;
});

export { GetCarouselById, GetAllCarousel, AddNewCarousel, UpdateCarouselById, DeleteCarouselById };
