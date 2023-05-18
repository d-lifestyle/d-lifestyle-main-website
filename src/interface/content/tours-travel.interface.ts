export interface ToursTravelProps {
     displayName: string;
     code: string;
     duration: string;
     image: {
          image: string;
          title: string;
     }[];
     place: string;
     theme: string;

     description: string;
     SubCategory: any;
     _id?: string;
     createdAt?: string;
     updatedAt?: string;
}

export interface NewToursTravelProps {
     displayName: string;
     code: string;
     duration: string;
     place: string;
     theme: string;
     SubCategory: string;
}

export interface UpdateToursTravelProps {
     id: string;
     data: ToursTravelProps;
}
