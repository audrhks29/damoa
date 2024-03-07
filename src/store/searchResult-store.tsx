import create from 'zustand';
import axios from 'axios';

interface SearchResultStoreType {
  searchResults: SearchResultType[];
  fetchSearchResultData: (API_KEY: string, query: string) => Promise<void>;
}

const useSearchResultDataStore = create<SearchResultStoreType>(set => ({
  searchResults: [],
  fetchSearchResultData: async (API_KEY, query) => {
    const Kakao = axios.create({
      baseURL: 'https://dapi.kakao.com/v2',
      headers: {
        Authorization: `KakaoAK ${API_KEY}`,
      },
    });
    try {
      const response = await Kakao.get(`search/web?query=${query}&size=50`);
      set({ searchResults: response.data.documents });
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }
}));


export default useSearchResultDataStore;