export interface CruisePackageProps {
     image: string;
     displayName: string;
     itinerary: string;
     sailingType: string;
     departure: {
          from: string;
          to: string;
     };
     description: string;
     SubCategory: any;
     _id?: string;
     createdAt?: string;
     updatedAt?: string;
}
