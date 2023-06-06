import { CategoriesProps } from "./category.interface";

export interface SubCategoryProps {
     displayName: string;
     CategoryId: CategoriesProps;

     _id?: string;
     createdAt?: string;
     updatedAt?: string;
}

export interface NewSubCategoryProps {
     displayName: string;
     CategoryId: string;
}

export interface UpdateSubCategoryProps {
     id: string;
     data: SubCategoryProps;
}
