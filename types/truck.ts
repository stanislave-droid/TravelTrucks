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
  amenities: amenity[];
  createdAt: string;
  updatedAt: string;
  coverImage: string;
  totalReviews: number;
}

export type amenity =
  | "ac"
  | "bathroom"
  | "kitchen"
  | "radio"
  | "refrigerator"
  | "microwave"
  | "gas"
  | "water"
  | "alcove"
  | "automatic"
  | "tv";
