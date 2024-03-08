interface SearchWebType {
  contents: string;
  datetime: string;
  title: string;
  url: string;
}

interface SearchVclipType {
  author: string;
  datetime: string;
  play_time: number;
  thumbnail: string;
  title: string;
  url: string;
}

interface SearchBlogType {
  blogname: string;
  contents: string;
  datetime: string;
  thumbnail: string;
  title: string;
  url: string;
}

interface SearchImageType {
  collection: string;
  datetime: string;
  display_sitename: string;
  doc_url: string;
  height: number;
  image_url: string;
  thumbnail_url: string;
  width: number;
}

interface SearchBookType {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
}

interface SearchCafeType {
  cafename: string;
  contents: string;
  datetime: string;
  thumbnail: string;
  title: string;
  url: string;
}