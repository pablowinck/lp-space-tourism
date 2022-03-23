import { useQuery } from "react-query";

export type CrewType = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
};

export const useFetchCrew = () => {
  return useQuery<CrewType[]>("getCrews", () =>
    fetch("http://localhost:8000/crew").then((res) => res.json())
  );
};
