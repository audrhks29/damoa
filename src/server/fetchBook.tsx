import axios from "axios";

export default async function fetchBook(
  query: string | null,
  size: number,
  pageParam: number
) {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const Kakao = axios.create({
    baseURL: 'https://dapi.kakao.com/v3',
    headers: {
      Authorization: `KakaoAK ${API_KEY}`,
    },
  });

  try {
    const response = await Kakao.get(`search/book?query=${query}&size=${size}&page=${pageParam}`);
    return response.data
  } catch (error) {
    console.error('Error fetching search results:', error);
  }
}

