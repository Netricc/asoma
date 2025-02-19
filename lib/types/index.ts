export type TserviceCard = {
  title: string;
  description: string;
  img: string;
  id: number;
  reverse: boolean;
};

export type TpriceCard = {
  title: string;
  type: "fix" | "sub";
  price: string;
  description: string;
  unity: string;
};
