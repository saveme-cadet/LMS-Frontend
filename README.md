<div align="center">
    
# 구해줘 카뎃 LMS

![html badge](https://img.shields.io/badge/-HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white)
![css badge](https://img.shields.io/badge/-CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white)
![JS badge](https://img.shields.io/badge/-Javascript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white)

![react badge](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white)
![react badge](https://img.shields.io/badge/-React%20router%20dom-blue?style=flat-square&logo=React-Router&logoColor=white)
![styled badge](https://img.shields.io/badge/-Styled-DB7093?style=flat-square&logo=styled-components&logoColor=white)

![issue](https://img.shields.io/github/issues/saveme-cadet/LMS-Frontend)
![issue](https://img.shields.io/github/issues-closed/saveme-cadet/LMS-Frontend)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/saveme-cadet/LMS-Frontend)

</div>
    
# 소개

구해줘 카뎃은 체크인과 체크아웃을 진행하며 각자의 학습 시간을 확보하고자 2021년 중순에 만든 동아리입니다.
기존에는 Numbers로 출결을 관리하였지만 
반복되는 작업을 자동화함으로써 동아리원의 리소스를 줄이고
스프레드시트의 한계점을 해결하기 위해 
구해줘 카뎃 내부에서 팀을 조직해 LMS(Learning Management System)용 웹사이트를 개발하였습니다.  
2022년 4월 배포한 후 현재 유지보수 및 기능 추가를 진행하고 있으며 10월에 2차 MVP를 배포하였습니다.  
[바로가기](https://www.save9cadet.com/)

# 프로젝트 시작방법

```shell
npm i && npm start
```

# 사용 방법

## 로그인 페이지
![로그인](https://user-images.githubusercontent.com/72376700/203353351-56a8aa44-ef56-4127-8b1f-b0612120456a.PNG)

- 인트라 아이디와 비밀번호를 입력하여 로그인 합니다.
- 가입하지 않은 사용자라면 회원가입을 진행해야 합니다.

### 회원가입

![로그인_회원가입](https://user-images.githubusercontent.com/72376700/203353488-f0cf3cbe-39b8-4f2b-91d7-cbb4c239e06c.PNG)

- 인트라 아이디와 비밀번호를 입력합니다.
  - 비밀번호를 재설정할 때 해당 인트라 닉네임과 연동된 이메일로 전송됩니다.
  - 비밀번호는 길이 8~30자에 영어 대문자, 영어 소문자, 특수문자, 숫자를 포함해야 합니다. 

## 메인 페이지

![메인페이지](https://user-images.githubusercontent.com/72376700/203354020-3ef430ed-4076-49db-b19f-393db6efcb72.PNG)

- 메인 페이지에서 출결표를 확인할 수 있습니다.
  - 하루를 기준으로 출결 상태를 보여줍니다.
  - 날짜 옆의 아이콘을 눌러서 다른 날짜로 이동할 수 있습니다.
  
### 출결 관리

![메인페이지](https://user-images.githubusercontent.com/72376700/203355076-46457229-29a2-4327-aef4-70b8bdb74913.PNG)

![메인페이지_머슴](https://user-images.githubusercontent.com/72376700/203355065-3395377c-6900-4824-a8c5-606cbfb7115e.PNG)

- 머슴이라면 체크인, 체크아웃 셀을 클릭해서 출결을 변경할 수 있습니다.
- 이전 달의 정보는 수정할 수 없습니다.
- 필터 기능으로 원치 않은 정보를 보이지 않게 할 수 있습니다.
- 팀별로 조회가 가능합니다.

### 출결 일괄 수정

![메인페이지_일괄선택1](https://user-images.githubusercontent.com/72376700/203354295-b367b6d3-0808-4669-acbf-9e3a63f48ccb.PNG)
![메인페이지_일괄선택2](https://user-images.githubusercontent.com/72376700/203357360-1116a686-4542-4177-afd6-4fb1df2c3244.PNG)
![메인페이지_일괄선택3](https://user-images.githubusercontent.com/72376700/203357369-897dc0b0-651a-43c8-b125-59426aabfa25.PNG)
 
- 현재 탭(전체, 레드팀, 블루팀) 전체 인원의 체크인, 체크아웃을 한꺼번에 수정할 수 있습니다.
- 일괄 수정 직전의 데이터를 로컬 스토리지로 저장합니다.
  - 저장한 데이터는 하루가 지나면 삭제됩니다.

### 출결 일괄 수정 되돌리기
![메인페이지_일괄선택되돌리기](https://user-images.githubusercontent.com/72376700/203359246-536929bc-05a7-4b6a-a8c3-258c9d74efd8.PNG)

- 로컬 스토리지로 저장중인 데이터로 되돌립니다.

## 할 일 페이지

![투두페이지](https://user-images.githubusercontent.com/72376700/203360256-b37a054a-a645-469b-b7c3-40f242f6d93e.PNG)

- 오늘 자신이 할 일을 등록합니다.
- 완료 처리하거나 삭제할 수 있습니다.
- 다른 사용자의 할 일을 조회할 수 있습니다.

## 아오지 페이지

![아오지페이지](https://user-images.githubusercontent.com/72376700/203360281-44beb0ae-ff38-42b5-9046-c6f022e02d06.PNG)

- 평일 체크인 이후, 주말에 보충학습을 진행해서 결석 점수를 감소시킬 수 있습니다.
- 보충학습 중 창을 닫아도 정보는 저장됩니다.
- 저장된 보충학습 데이터를 수정 및 삭제할 수 있다.

## 머슴 페이지

![머슴페이지](https://user-images.githubusercontent.com/72376700/203360787-cbc8362a-7627-44af-994e-28e51d136340.PNG)
![머슴페이지_권한](https://user-images.githubusercontent.com/72376700/203360795-1d67a403-897d-4428-8092-792cce0775f6.PNG)

- 역할이 머슴인 사람만 이 페이지에 접근할 수 있습니다.
- 사용자의 참여 상태, 팀, 역할, 휴가를 변경할 수 있습니다.

> 자기 자신의 역할을 머슴에서 카뎃으로 변경하게 될 경우 그 즉시 로그아웃하게 됩니다. 변경하기 전 다음 주 머슴의 역할을 변경했는지 꼭 확인해주세요.

### 휴가 변경

![머슴페이지1](https://user-images.githubusercontent.com/72376700/203360588-5f366dfb-a33f-40c6-959f-82a66526eb8e.PNG)

- 참여 상태가 ‘참가’인 사용자들의 휴가를 일괄적으로 증가시키거나 감소시킬 수 있습니다.

### 순위 확인

![머슴페이지2](https://user-images.githubusercontent.com/72376700/203360605-bf60b713-3f77-45d9-ae94-def23c3dc4ec.PNG)

- 이번 달 구해줘 카뎃 참가자들 중 출석 우수자를 조회할 수 있습니다.
  - 출석점수를 비교한 후, 출석점수가 동률이라면 결석점수가 낮은 사람을 우선으로 합니다.
  - 출석점수는 체크인, 체크아웃이 출석인 경우마다 0.5점이 증가합니다.
  - 결석점수는 체크인, 체크아웃이 지각일 경우 0.25점, 결석일 경우 0.5점이 증가합니다. 보충학습으로 결석점수를 차감할 수 있습니다.

> 달이 바뀌게 될 경우 순위가 초기화 되기에 달이 바뀌기 전 꼭 확인해주세요.

### 팀 섞기

![머슴페이지3](https://user-images.githubusercontent.com/72376700/203360628-bae03a19-145f-46b2-81f6-b4c217667d02.PNG)

- 참여 상태가 ‘참가’인 사용자들의 팀을 뒤섞을 수 있습니다.

> 팀을 변경한 후 확인을 누르게 되면 되돌릴 수가 없게 됩니다. 주의해주세요.

### 머슴 가이드

![머슴페이지4](https://user-images.githubusercontent.com/72376700/203360664-10f354ff-7c2c-4528-8861-d2edf5631a2c.PNG)

- 머슴이 할 일을 확인할 수 있습니다.
