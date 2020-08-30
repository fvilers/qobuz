import Article from "./Article";
import Artist from "./Artist";
import Award from "./Award";
import Collection from "./Collection";
import Genre from "./Genre";
import Goody from "./Goody";
import Image from "./Image";
import Label from "./Label";
import Track from "./Track";

interface Album {
  article_ids: { [key: string]: number };
  articles: Article[];
  artist: Artist;
  awards: Award[];
  catchline: string;
  composer: Artist;
  copyright: string;
  created_at: number;
  description: string;
  displayable: boolean;
  downloadable: boolean;
  duration: number;
  genre: Genre;
  genres_list: string[];
  goodies: Goody[];
  hires_streamable: boolean;
  hires: boolean;
  id: string;
  image: Image;
  label: Label;
  maximum_bit_depth: number;
  maximum_channel_count: number;
  maximum_sampling_rate: number;
  maximum_technical_specifications: string;
  media_count: number;
  parental_warning: boolean;
  popularity: number;
  previewable: boolean;
  product_sales_factors_monthly: number;
  product_sales_factors_weekly: number;
  product_sales_factors_yearly: number;
  product_type: string;
  product_url: string;
  purchasable_at: number;
  purchasable: boolean;
  qobuz_id: number;
  relative_url: string;
  release_date_download: string;
  release_date_original: string;
  release_date_stream: string;
  released_at: number;
  sampleable: boolean;
  slug: string;
  streamable_at: number;
  streamable: boolean;
  subtitle: string;
  title: string;
  tracks_count: number;
  tracks: Collection<Track>;
  upc: string;
  url: string;
}

export default Album;
