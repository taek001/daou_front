## 입사지원자 정병택 과제 (FRONTEND)

## 과제 수행 PC 환경
```
os : window 10 home
ide : webstorm 2023.2.8
java : corretto-17
node.js : 22.12.0

next.js : 15.1.4
react : 19.0.0
redux : 5.0.1
```

## 프로젝트 실행 유의사항
과제 구동 하는 동안 아래 링크의 node.js 22버전 설치 부탁드립니다

[node.js 22버전 설치](https://nodejs.org/ko)

프론트 엔드 실행에 앞서 백엔드 프로젝트를 먼저 실행해야 합니다

프론트 엔드의 실행은 아래의 명령어를 통해 과제 실행이 가능합니다
```bash
npm install; npm run dev
```

## 프로젝트 추가 설명
```
CSR 환경으로 진행 하였습니다
페이지는 총 5개의 페이지로 아래와 같이 구성 되어있습니다
/ -> 메인 페이지 
/task/budget -> 예산관리
/task/disbursement -> 지출결의서 작성
/task/tempdir -> 임시저장함
/task/alldoc -> 전체리스트 조회

폴더 구조 설명
.env -> 환경변수 저장(백엔드 api 호출을 위한 url 저장)
src -> next.js 기본 설정
   app -> page.tsx 파일들이 각 페이지 경로에 맞춰 생성
   component -> 각 페이지를 구성하는 컴포넌트 모음 사용 되는 페이지 경로에 맞춰 생성
   constants -> 상수 모음
   redux -> redux-devtools 사용으로 각 state에 대한 slice 파일들 사용 페이지 경로에 맞춰 생성
   styles -> 각 페이지에서 사용되는 css 사용되는 컴포넌트와 동일한 경로로 생성 
   util -> util성 함수들의 집합 경로에 맞춰 생성
```
