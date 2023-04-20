import { SubCategoryProps } from "../sub-category.interface";

export interface AccommodationProps {
     displayName: string;
     city: string;
     state: string;
     SubCategory: any;
     _id?: string;
     createdAt?: string;
     updatedAt?: string;
}

export interface NewAccommodationProps {
     displayName: string;
     city: string;
     state: string;
     SubCategory: string;
}

export interface UpdateAccommodationProps {
     id: string;
     data: AccommodationProps;
}
