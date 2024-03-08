import create from 'zustand';
import axios from 'axios';

interface SearchResultStoreType {
  searchResults: SearchResultType[];
  fetchSearchResultData: (query: string, page: number) => void;
}

const useSearchResultDataStore = create<SearchResultStoreType>(set => ({
  searchResults: [],

  fetchSearchResultData: async (query, page) => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const Kakao = axios.create({
      baseURL: 'https://dapi.kakao.com/v2',
      headers: {
        Authorization: `KakaoAK ${API_KEY}`,
      },
    });

    try {
      const response = await Kakao.get(`search/web?query=${query}&size=10&page=${page}`);

      set({ searchResults: response.data.documents });
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  },
}));


export default useSearchResultDataStore;