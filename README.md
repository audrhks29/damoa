# [Nextjs] 20240308 검색사이트

## 📚목차

1. [프로젝트정보](#프로젝트-정보)
2. [로고](#로고)
3. [UI](#ui)
4. [주요기능](#주요-기능)
5. [Trouble shooting](#trouble-shooting)

## 🌐프로젝트 정보

#### 사이트 바로가기

[사이트 바로가기](https://damoasearch.netlify.app)
| | `설명` |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `작업기간` | 2024.03.08 ~ 2024.04.02 |
| `작업인원` | 1 |
| `라이브러리` | <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/zustand-999999?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Tanstack_Query-FF4154?style=flat-square&logo=ReactQuery&logoColor=black"> <img src="https://img.shields.io/badge/shadcn/ui-000000?style=flat-square&logo=shadcn/ui&logoColor=white"> |
| `프레임워크` | <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=flat-square&logo=tailwindcss&logoColor=black"> |
| `언어` | <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"> |
| `배포` | <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=Netlify&logoColor=black"> |
| `인증` | <img src="https://img.shields.io/badge/firebase Auth-FFCA28?style=flat-square&logo=firebase&logoColor=black"> |
| `DB` | <img src="https://img.shields.io/badge/firebase Realtime Database-FFCA28?style=flat-square&logo=firebase&logoColor=black"> |

## 🛞로고

![logo](https://github.com/audrhks29/damoa/assets/130128690/10c703f9-e9a5-46e1-8945-17398f1e3973)

## 👀UI

### 1. 로그인

![login](https://github.com/audrhks29/damoa/assets/130128690/3224738f-ceae-453c-bd0d-1532d76077bb)

### 2. 검색

![search](https://github.com/audrhks29/damoa/assets/130128690/0c295391-779d-47f5-99c2-04253073cff4)

### 3. 날씨

![weather](https://github.com/audrhks29/damoa/assets/130128690/c79fd40a-932c-4cb9-9f8f-e81f974c8eec)

### 4. 캘린더 및 일정 등록

![calendar](https://github.com/audrhks29/damoa/assets/130128690/7445c51e-4ee2-4f29-9381-d8d50ccf88fb)

## 🛠주요 기능

1. `React`와 `Nextjs`를 이용한 SSR 웹 사이트 제작
2. `Firebase Auth`를 이용한 로그인, 회원가입, 비밀번호 재설정, 회원탈퇴 기능 구현
3. `Firebase Realtime Database`를 이용한 일정 및 메모 기능 구현
4. Kakao API를 활용하여 검색 데이터 제공
5. 기상청 API를 활용하여 현 위치 기반 날씨 제공
6. Masonry Layout 구현

## ❌Trouble Shooting

### 1. useSearchParams() should be wrapped in a suspense boundary at page 에러

> **문제**
>
> useSearchParams() should be wrapped in a suspense boundary at page 에러

> **원인**
>
> Suspense 경계 없이 검색 매개변수를 읽으면 useSearchParams()전체 페이지가 클라이언트측 렌더링으로 선택됌
> 이로 인해 클라이언트측 JavaScript가 로드될 때까지 페이지가 비어 있을 수 있다.

> **해결**
>
> 에러가 난 컴포넌트의 부모컴포넌트에 Suspense태그 적용

### 2. 배포 후 Minified React error #419 에러

> **문제**
>
> 메인화면에서 Minified React error #419 메세지를 반환하며 아무 화면도 뜨지 않는 문제

> **원인**
>
> React 공식문서에서는 "React의 축소된 프로덕션 빌드에서는 유선으로 전송되는 바이트 수를 줄이기 위해 전체 오류 메시지를 보내는 것을 피합니다." 라고 설명

> **해결**
>
> `useSearchParams()` 에러를 해결하기 위해서 suspense가 꼭 필요하였기 때문에 next에서 제공하는 dynamic으로 component를 동적으로 로드

### 3. vercel 배포 시 402에러

> **문제**
>
> vercel 배포 시 이미지에서 402에러가 발생하여 이미지가 로드되지 않는 문제 발생

> **원인**
>
> vercel에서는 자동으로 이미지를 최적화 해주며, 무료 계정에 대해 한도가 있다.
> 한도가 끝남으로 인하여 이미지를 로드할 수 없게 되었다.

> **해결**
>
> Netlify를 이용한 배포

### 4. ReferenceError에러

> **문제**
>
> ReferenceError : window is not defined 에러 발생

> **원인**
>
> nextjs의 SSR으로 페이지 구현 시, javaScript로드 전에 window나 document객체가 존재하지 않음으로 발생

> **해결**
>
> 랜더링 이후에 호출되는 useEffect 안에 window객체를 넣어주거나, dynamic으로 컴포넌트를 로드 하며 ssr:false 속성을 지정하여 ssr을 해제한다.
