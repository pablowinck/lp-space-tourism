import { useQuery } from "react-query";

export type DestinationType = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
};

export const useFetchDestination = () => {
  return useQuery<DestinationType[]>("getDestinations", () =>
    fetch("http://localhost:8000/destinations").then((res) => res.json())
  );
};
