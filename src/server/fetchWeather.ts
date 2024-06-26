import axios from "axios";

export default async function fetchWeather() {
  try {
    const location = await getMyLocation();
    const xyGrid = await convertMyLocation(location.latitude, location.longitude);
    return await getWeatherData(xyGrid.x, xyGrid.y);
  } catch (error) {
    const xyGrid = await convertMyLocation(60, 126);
    return await getWeatherData(xyGrid.x, xyGrid.y);
  }
}

async function getMyLocation(): Promise<Coordinates> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported.'));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position.coords);
        },
        (error) => {
          reject(error);
        }
      );
    }
  });
}

async function getWeatherData(x: number, y: number): Promise<any> {
  try {
    let date = new Date();

    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    const currentTime = parseInt(`${hour}${minute}`);

    let baseTime = '';
    if (currentTime < 210) {
      baseTime = "2000"
      date.setDate(date.getDate() - 1); // 날짜를 하루 전으로 설정
    } else if (currentTime < 510) {
      baseTime = "2300"
      date.setDate(date.getDate() - 1); // 날짜를 하루 전으로 설정
    }
    else if (currentTime < 810) {
      baseTime = "0200"
    }
    else if (currentTime < 1110) {
      baseTime = "0500"
    }
    else if (currentTime < 1410) {
      baseTime = "0800"
    }
    else if (currentTime < 1710) {
      baseTime = "1100"
    }
    else if (currentTime < 2010) {
      baseTime = "1400"
    }
    else if (currentTime < 2310) {
      baseTime = "1700"
    }
    else if (currentTime > 2310) {
      baseTime = "2000"
    }

    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    const today = `${year}${month}${day}`

    const baseUrl = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

    const response = await axios.get(
      `${baseUrl}?serviceKey=${API_KEY}&numOfRows=1000&dataType=JSON&pageNo=1&base_date=${today}&base_time=${baseTime}&nx=${x}&ny=${y}`
    );
    // console.log(today);
    // console.log(baseTime);
    // console.log(response);
    return response.data.response.body.items.item;
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
}


function convertMyLocation(latitude: number, longitude: number) {
  var RE = 6371.00877; // 지구 반경(km)
  var GRID = 5.0; // 격자 간격(km)
  var SLAT1 = 30.0; // 투영 위도1(degree)
  var SLAT2 = 60.0; // 투영 위도2(degree)
  var OLON = 126.0; // 기준점 경도(degree)
  var OLAT = 38.0; // 기준점 위도(degree)
  var XO = 43; // 기준점 X좌표(GRID)
  var YO = 136; // 기1준점 Y좌표(GRID)

  //
  // LCC DFS 좌표변환 ( code : "toXY"(위경도->좌표, v1:위도, v2:경도), "toLL"(좌표->위경도,v1:x, v2:y) )
  //

  // var rs = dfs_xy_conv("toXY", "37.5458805555555", "126.980266666666");


  async function dfs_xy_conv(code: string, v1: number, v2: number) {
    var DEGRAD = Math.PI / 180.0;
    var RADDEG = 180.0 / Math.PI;

    var re = RE / GRID;
    var slat1 = SLAT1 * DEGRAD;
    var slat2 = SLAT2 * DEGRAD;
    var olon = OLON * DEGRAD;
    var olat = OLAT * DEGRAD;

    var sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5);
    sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
    var sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
    sf = Math.pow(sf, sn) * Math.cos(slat1) / sn;
    var ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
    ro = re * sf / Math.pow(ro, sn);
    var rs: any = {};
    if (code == "toXY") {
      rs['lat'] = v1;
      rs['lng'] = v2;
      var ra = Math.tan(Math.PI * 0.25 + (v1) * DEGRAD * 0.5);
      ra = re * sf / Math.pow(ra, sn);
      var theta = v2 * DEGRAD - olon;
      if (theta > Math.PI) theta -= 2.0 * Math.PI;
      if (theta < -Math.PI) theta += 2.0 * Math.PI;
      theta *= sn;
      rs['x'] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
      rs['y'] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
    }
    else {
      rs['x'] = v1;
      rs['y'] = v2;
      var xn = v1 - XO;
      var yn = ro - v2 + YO;
      ra = Math.sqrt(xn * xn + yn * yn);
      if (sn < 0.0) - ra;
      var alat = Math.pow((re * sf / ra), (1.0 / sn));
      alat = 2.0 * Math.atan(alat) - Math.PI * 0.5;

      if (Math.abs(xn) <= 0.0) {
        theta = 0.0;
      }
      else {
        if (Math.abs(yn) <= 0.0) {
          theta = Math.PI * 0.5;
          if (xn < 0.0) - theta;
        }
        else theta = Math.atan2(xn, yn);
      }
      var alon = theta / sn + olon;
      rs['lat'] = alat * RADDEG;
      rs['lng'] = alon * RADDEG;
    }
    return rs;
  }
  return dfs_xy_conv("toXY", latitude, longitude);
}