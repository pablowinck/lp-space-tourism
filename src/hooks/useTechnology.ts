// "name": "Launch vehicle",
//     "images": {
//       "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
//       "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
//     },
//     "description": "A launch vehicle or

import { useQuery } from "react-query";

export type TechnologyType = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};

export const useFetchTechnology = () => {
  return useQuery<TechnologyType[]>("getTechnology", () =>
    fetch("http://localhost:8000/technology").then((res) => res.json())
  );
};
