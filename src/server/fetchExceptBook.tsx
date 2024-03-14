import axios from "axios";

export default async function fetchExceptBook(
  type: string | null,
  query: string | null,
  size: number,
  pageParam: number
) {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const Kakao = axios.create({
    baseURL: 'https://dapi.kakao.com/v2',
    headers: {
      Authorization: `KakaoAK ${API_KEY}`,
    },
  });

  try {
    const response = await Kakao.get(`search/${type}?query=${query}&size=${size}&page=${pageParam}`);
    return response.data
  } catch (error) {
    console.error('Error fetching search results:', error);
  }
}

