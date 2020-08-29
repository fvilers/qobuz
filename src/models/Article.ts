import Promotion from "./Promotion";

interface Article {
  currency: string;
  description: string;
  id: number;
  label: string;
  price: number;
  promotion?: Promotion;
  type: string;
  url: string;
}

export default Article;
