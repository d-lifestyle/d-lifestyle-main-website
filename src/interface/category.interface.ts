export interface CategoriesProps {
     _id?: string;
     createdAt?: string;
     parentCategory: any;
     updatedAt?: string;
     name: string;
}

export interface NewCategoryProps {
     name: string;
}

export interface UpdateCategoryProps {
     id: string;
     data: CategoriesProps;
}
