import Podcasts from "./Podcasts";
import Promotion from "./Promotion";

interface Article {
  abstract: string;
  author: string;
  category: string;
  content: string;
  currency: string;
  description: string;
  id: number;
  image: string;
  label: string;
  podcasts: Podcasts;
  price: number;
  promotion?: Promotion;
  published_at: number;
  root_category: number;
  source_image: string;
  source: string;
  status: string;
  thumbnail: string;
  title: string;
  type: string;
  url: string;
}

export default Article;
