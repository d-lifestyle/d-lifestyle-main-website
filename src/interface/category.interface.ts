export interface CategoriesProps {
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
  displayName: string;
  parentCategory: any;
}

export interface NewCategoryProps {
  displayName: string;
  parentCategory: any;
}

export interface UpdateCategoryProps {
  id: string;
  data: CategoriesProps;
}
