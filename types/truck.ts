export interface ITruck {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  amenities: string[];
  createdAt: string;
  updatedAt: string;
  coverImage: string;
  totalReviews: number;
}

export interface IDetailedTruck {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  amenities: string[];
  createdAt: string;
  updatedAt: string;
  gallery: ITruckImage[];
  totalReviews: number;
}

export interface ITruckImage {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}
