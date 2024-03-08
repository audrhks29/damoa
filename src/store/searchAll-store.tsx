import { create } from 'zustand';
import axios from 'axios';

interface SearchAllStoreType {
  searchWebResults: SearchWebType[];
  searchVclipResults: SearchVclipType[];
  searchImageResults: SearchImageType[];
  searchBlogResults: SearchBlogType[];
  searchBookResults: SearchBookType[];
  searchCafeResults: SearchCafeType[];

  fetchSearchData: (query: string, page: number) => void;
}
// web,vclip,image,blog,book,cafe
const useSearchAllStore = create<SearchAllStoreType>(set => ({
  searchWebResults: [],
  searchVclipResults: [],
  searchImageResults: [],
  searchBlogResults: [],
  searchBookResults: [],
  searchCafeResults: [],

  fetchSearchData: async (query, page) => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const Kakao = axios.create({
      baseURL: 'https://dapi.kakao.com/v2',
      headers: {
        Authorization: `KakaoAK ${API_KEY}`,
      },
    });

    const KakaoBook = axios.create({
      baseURL: 'https://dapi.kakao.com/v3',
      headers: {
        Authorization: `KakaoAK ${API_KEY}`,
      },
    });

    try {
      const webResponse = await Kakao.get(`search/web?query=${query}&size=3&page=${page}`);
      const vclipResponse = await Kakao.get(`search/vclip?query=${query}&size=4&page=${page}`);
      const imageResponse = await Kakao.get(`search/image?query=${query}&size=4&page=${page}`);
      const blogResponse = await Kakao.get(`search/blog?query=${query}&size=4&page=${page}`);
      const bookResponse = await KakaoBook.get(`search/book?query=${query}&size=3&page=${page}`);
      const cafeResponse = await Kakao.get(`search/cafe?query=${query}&size=3&page=${page}`);
      set(
        {
          searchWebResults: webResponse.data.documents,
          searchVclipResults: vclipResponse.data.documents,
          searchImageResults: imageResponse.data.documents,
          searchBlogResults: blogResponse.data.documents,
          searchBookResults: bookResponse.data.documents,
          searchCafeResults: cafeResponse.data.documents
        }
      );
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  },
}));


export default useSearchAllStore;