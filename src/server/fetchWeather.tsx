import axios from "axios";

export default async function fetchWeather() {
  const baseUrl = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst"
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  try {
    const response = await axios.get(
      `${baseUrl}?serviceKey=${API_KEY}&numOfRows=1000&dataType=JSON&pageNo=1&base_date=20240316&base_time=0500&nx=55&ny=127`
    );
    return response.data.response.body.items.item
  } catch (error) {
    console.error('Error fetching search results:', error);
  }
}

