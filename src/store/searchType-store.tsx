import { create } from 'zustand';
import axios from 'axios';

interface SearchTypeStoreType {
  searchWebResults: SearchWebType[];
  searchVclipResults: SearchVclipType[];
  searchImageResults: SearchImageType[];
  searchBlogResults: SearchBlogType[];
  searchBookResults: SearchBookType[];
  searchCafeResults: SearchCafeType[];

  fetchSearchTypeData: (type: string, query: string, page: number) => void;
}

const useSearchTypeStore = create<SearchTypeStoreType>(set => ({
  searchWebResults: [],
  searchVclipResults: [],
  searchImageResults: [],
  searchBlogResults: [],
  searchBookResults: [],
  searchCafeResults: [],

  fetchSearchTypeData: async (type, query, page) => {
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
      if (type === "book") {
        const response = await KakaoBook.get(`search/${type}?query=${query}&size=10&page=${page}`);
        set({ searchBookResults: response.data.documents })
      }
      else {
        const response = await Kakao.get(`search/${type}?query=${query}&size=10&page=${page}`);
        switch (type) {
          case 'web': set({ searchWebResults: response.data.documents }); break;
          case 'vclip': set({ searchVclipResults: response.data.documents }); break;
          case 'image': set({ searchImageResults: response.data.documents }); break;
          case 'blog': set({ searchBlogResults: response.data.documents }); break;
          case 'cafe': set({ searchCafeResults: response.data.documents }); break;
        }
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  },
}));


export default useSearchTypeStore;