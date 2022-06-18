<div align="center">
    
# 구해줘 카뎃 LMS

![html badge](https://img.shields.io/badge/-HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white)
![css badge](https://img.shields.io/badge/-CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white)
![JS badge](https://img.shields.io/badge/-Javascript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white)

![react badge](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white)
![styled badge](https://img.shields.io/badge/-Styled-DB7093?style=flat-square&logo=styled-components&logoColor=white)

![issue](https://img.shields.io/github/issues/saveme-cadet/LMS-Frontend)
![issue](https://img.shields.io/github/issues-closed/saveme-cadet/LMS-Frontend)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/saveme-cadet/LMS-Frontend)
</div>
    
# 소개


구해줘 카뎃은 체크인과 체크아웃을 진행하며 각자의 학습 시간을 확보하고자 2021년 중순에 만든 동아리입니다.  
기존에는 Numbers로 출결을 관리하였다가 달이 바뀌거나 팀이 바뀔 때마다 표를 만드는데 드는 리소스를 줄이기 위해
구해줘 카뎃 내부에서 팀을 조직해 LMS(Learning Management System)용 웹사이트를 개발하였습니다.  
2022년 4월 배포한 후 현재 유지보수 및 기능 추가를 진행하고 있습니다.  
[바로가기]( https://www.save9cadet.com/)

# 프로젝트 시작방법

```shell
npm i && npm start
```

# 사용 방법

## 로그인 페이지
![가이드-로그인](https://user-images.githubusercontent.com/72376700/169757862-b97555c2-ea63-4df2-b369-a1e270e0ce88.PNG)

- 인트라 아이디와 비밀번호(4242)를 쳐서 로그인 합니다.
- 가입하지 않은 사용자라면 회원가입을 진행해야 합니다.

### 회원가입
![가이드-회원가입](https://user-images.githubusercontent.com/72376700/169757887-0977b54c-3fe5-4c75-99be-c344b9fe2fe6.PNG)

- 인트라 아이디와 이메일을 입력합니다.
    - 현재로써는 인트라 아이디와 이메일이 유효한지 검증하지는 않습니다.
- 비밀번호는 4242로 고정입니다.

## 메인 페이지

![가이드-메인화면](https://user-images.githubusercontent.com/72376700/169757933-d55be421-d7d3-485a-a252-3889be7c0593.PNG)

- 메인 페이지에서 출결표를 확인할 수 있습니다.
- 오늘의 출결 상태를 보여줍니다.
- 날짜 옆의 아이콘을 눌러서 다른 날짜로 이동할 수 있습니다.

### 출결 관리

![가이드-체크인](https://user-images.githubusercontent.com/72376700/169757934-df418a12-7738-4e7c-a064-fc19de1c8d0f.PNG)

- 체크인, 체크아웃 셀을 클릭해서 출결을 변경할 수 있습니다.
- 역할이 머슴이라면 자신이 속한 팀을, 카뎃이라면 자신의 출결만 변경할 수 있습니다.

## 할 일 페이지

![가이드-할일](https://user-images.githubusercontent.com/72376700/169757921-1f2372f6-deb1-4a71-98ca-4e8878c68c40.PNG)


- 오늘 자신이 할 일을 등록합니다.
- 완료 처리하거나 삭제할 수 있습니다.
- 다른 사용자의 할 일을 조회할 수 있습니다.

## 아오지 페이지
![가이드-아오지](https://user-images.githubusercontent.com/72376700/169758001-9129a176-d380-4a4a-b26b-a7e631ec50f4.PNG)


- 평일 체크인 이후, 주말에 보충학습을 진행해서 결석 점수를 감소시킬 수 있습니다.
- 보충학습 중 창을 닫아도 정보는 저장됩니다.

## 머슴 페이지

![가이드-권한x](https://user-images.githubusercontent.com/72376700/169758015-02954411-efbe-4904-bf39-7c870471bfa3.PNG)

![가이드-머슴](https://user-images.githubusercontent.com/72376700/169758028-3578a408-005e-4ed3-86bf-19c191e1669c.PNG)

- 역할이 머슴인 사람만 이 페이지에 접근할 수 있습니다.
- 사용자의 참여 상태, 팀, 역할, 휴가를 변경할 수 있습니다.

> 자기 자신의 역할을 머슴에서 카뎃으로 변경하게 될 경우 그 즉시 로그아웃하게 됩니다. 변경하기 전 다음 주 머슴의 역할을 변경했는지 꼭 확인해주세요.
> 

### 휴가 변경

![가이드-휴가변경](https://user-images.githubusercontent.com/72376700/169758035-5cca857c-a7e0-486e-964c-4ef98b4e8615.PNG)

- 참여 상태가 ‘참가’인 사용자들의 휴가를 일괄적으로 증가시키거나 감소시킬 수 있습니다.

### 순위 확인
![가이드-순위](https://user-images.githubusercontent.com/72376700/169758052-ec5fb84d-4274-42ac-8f40-b69a9e2369ac.PNG)


- 이번 달 구해줘 카뎃 참가자들 중 출석 우수자를 조회할 수 있습니다.
    - 출석점수를 비교한 후, 출석점수가 동률이라면 결석점수가 낮은 사람을 우선으로 합니다.
    - 출석점수는 체크인, 체크아웃이 출석인 경우마다 0.5점이 증가합니다.
    - 결석점수는 체크인, 체크아웃이 지각일 경우 0.25점, 결석일 경우 0.5점이 증가합니다. 보충학습으로 결석점수를 차감할 수 있습니다.

> 달이 바뀌게 될 경우 순위가 초기화 되기에 달이 바뀌기 전 꼭 확인해주세요.
> 

### 팀 섞기
![가이드-팀섞기](https://user-images.githubusercontent.com/72376700/169758065-3ec51354-9b1e-48c8-9cb5-4e0b9e283794.PNG)

- 참여 상태가 ‘참가’인 사용자들의 팀을 뒤섞을 수 있습니다.

> 팀을 변경한 후 확인을 누르게 되면 되돌릴 수가 없게 됩니다. 주의해주세요.
>
