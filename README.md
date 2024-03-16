# [Nextjs] 20240308 검색사이트

## 1. 프로젝트 정보
### 1. 기본정보
|            | 설명                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 작업기간   | 2024.03.08 ~                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 작업인원   | 1                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 라이브러리 | <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/zustand-999999?style=flat-square&logo=react&logoColor=black">->(v1.0.2삭제) <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/Tanstack_Query-FF4154?style=flat-square&logo=ReactQuery&logoColor=black"> |
| 프레임워크 | <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=flat-square&logo=tailwindcss&logoColor=black">                                                                                                                                                                                                                   |
| 언어       | <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white">                                                                                                                          |
| 배포       | <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white">(1.0.4배포 중지)                                                                                                                                                                                                                                                                                                                                    |


[사이트 바로가기](https://damoasearch.netlify.app)


## 2. 주요기능
### 1. 검색 및 페이징 기능
![녹화_2024_03_10_01_33_22_359](https://github.com/audrhks29/use-search-API/assets/130128690/a2349612-5a39-4197-93f5-f0c10015d766)

## 3. 개선해야할 사항
### 1. 문제해결
#### v1.0.0
 1. build시 useSearchParams() should be wrapped in a suspense boundary at page 에러 반환 문제 해결
[개발블로그 주소](https://frontendmk.tistory.com/10)
  1. 배포 후 Minified React error #419 메세지 반환 문제 해결
 [개발블로그 주소](https://frontendmk.tistory.com/11)
#### v1.0.1
 1. type==="all" 에서 url값 변경시 api요청주소 에러 문제 해결
   
#### v1.0.4
 1. vercel 배포 시 402에러 발생 -> Hobby 계정 이미지 최적화 종료
     - 해결방안 : Netlify를 이용한 배포
     - 문제발생 : Netlify를 이용한 배포 시, 검색 후 무한 새로고침 문제 발생
     - 해당 코드 주석으로 해결(vercel, dev환경에서 왜 오류가 발생하지 않는지 미해결)
        ```js
        // components/search/SearchBox.tsx

        useEffect(() => {
          // fix url
          const handleUrl = (query: string) => {
            if (typeParams) router.push(`/search?type=${typeParams}&query=${query}`);
          }

          if (queryParams) handleUrl(queryParams);
        }, [queryParams, router, typeParams])
        ```
### 2. 기능개선
  1. UI 개선
     1. 전체적인 UI개선 필요
     2. 이미지 로딩에 오랜 시간이 걸림
     3. 반응형 구현 예정
   2. 메인화면 날씨기능 추가 예정

</div>
</details>