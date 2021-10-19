# 왓챠피디아 클론 랜딩페이지

🎞 왓챠피디아 웹사이트에서 content페이지를 클론한 랜딩페이지입니다.

배포 주소 : https://park1016.github.io/Watcha/

<br>

## 목차

1. [배포 주소](#1)
2. [프로젝트 기능 설명](#2)
3. [기술 스택](#3)
4. [아쉬운 점 / 개선할 점](#4)

<br>

## 1. 배포 주소<a id="1"></a>

https://park1016.github.io/Watcha/

<br>

## 2. 프로젝트 기능 설명 <a id="2"></a>

<hr />

#### 시연영상
https://www.youtube.com/watch?v=1O_ha26ba_8


#### 전체적인 화면입니다. 최상단에서 스크롤을 밑으로 내리면 header가 변화합니다.
![ezgif com-gif-maker (9)](https://user-images.githubusercontent.com/76847993/137994019-42df282e-5b0c-478f-ac55-865d15b081b0.gif)

#### 모든 이미지는 picsum랜덤이미지를 사용했습니다. 새로고침하면 이미지가 바뀝니다.
![watcha-picsum랜덤이미지](https://user-images.githubusercontent.com/76847993/137989996-bd0c3970-920e-45d7-b901-f25372343a7e.gif)

#### 보고싶어요 버튼입니다. 초기상태에서 좌측의 '보고싶어요'를 누르면 바로 찜이 됩니다.<br/> 그 외의 경우에는 모달창이 뜨면서 여러 상태를 선택/취소할 수 있습니다.
![watcha-보고싶어요버튼](https://user-images.githubusercontent.com/76847993/137989932-97780bd1-1057-4266-99f9-8e82203fc25c.gif)

#### 별점입니다.<br />마우스를 hover하면 별점이 채워집니다. 클릭하면 별점이 확정됩니다. 확정된 상태에서 클릭하면 별점이 취소됩니다.
![watcha-별점](https://user-images.githubusercontent.com/76847993/137990007-20146b90-169c-4d54-8e0c-9be1d75f64b2.gif)

#### 댓글

##### 별점 확정 후 댓글을 쓰면 댓글창에 별점이 표시됩니다.<br />별점 없이 댓글을 작성하면 댓글창에 별점란이 존재하지 않습니다.
![watcha-댓글달기](https://user-images.githubusercontent.com/76847993/137989895-3cf14fa5-c9a5-49db-9603-3f7ea3470875.gif)

##### 별점이 있는 상태에서 댓글을 삭제하면 '코멘트 남기기'창이 뜹니다.
![watcha-댓글삭제(별점o)](https://user-images.githubusercontent.com/76847993/137990028-1f062f46-1052-4f0d-b52b-3a8dc47df0f3.gif)

##### 별점이 없는 상태에서 댓글을 삭제하면 '코멘트 남기기'창이 뜨지 않습니다.
![watcha-댓글삭제(별점x)](https://user-images.githubusercontent.com/76847993/137990025-78ae2625-56c7-4d29-8447-ef710d4f0a54.gif)

##### '수정'또는 모달창에서 '코멘트 수정하기'를 클릭하면 댓글수정창으로 이동합니다.<br />수정사항은 즉시 반영됩니다.
![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/76847993/137991958-b27db372-b2b9-41f2-a10f-59a8a2eeb016.gif)

#### 좋아요
![watcha- ,좋아요](https://user-images.githubusercontent.com/76847993/137990001-a7d7e441-c681-4821-b65a-cc13601c0210.gif)

#### 슬라이더입니다. 마우스를 hover하면 화살표가 뜹니다. 또한 슬라이드할 내용이 있는 쪽에만 화살표가 뜹니다. <br/> 댓글을 삭제하면 슬라이드할 내용이 없기 때문에 화살표가 뜨지 않습니다. 
![ezgif com-gif-maker (10)](https://user-images.githubusercontent.com/76847993/137993589-b9013162-abcc-4f39-b5b4-a2bbe830ee5c.gif)

#### 기본내용 더보기, 댓글 더보기를 누르면 각각 상세페이지로 이동합니다. <br /> 댓글은 '더보기'를 클릭하거나 댓글내용을 클릭하면 이동됩니다.
![watcha-더보기버튼](https://user-images.githubusercontent.com/76847993/137990014-2a6f0a4e-d904-4957-81d9-8d60a65ac12b.gif)

#### 반응형
##### 페이지 상단 반응형
![ezgif com-gif-maker (7)](https://user-images.githubusercontent.com/76847993/137992661-6755142b-0feb-4a24-8a83-8367a7480015.gif)

##### 페이지 중단 반응형
![watcha-반응형2](https://user-images.githubusercontent.com/76847993/137990008-74c588a0-2813-48e1-8c06-573b3188f09d.gif)

##### 페이지 하단 & 헤더 검색창 반응형<br />돋보기 아이콘을 클릭 후 검색창이 떴을 때, 검색창 외의 곳을 클릭하면 검색창이 닫힙니다.
![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/76847993/137993131-3857331a-e406-4de9-bf37-a1233810e807.gif)


<br>
<br>

## 3. 기술 스택 <a id="3"></a>

#####언어<br/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=black">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=black">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

<br>

## 4. 아쉬운 점 / 개선할 점 <a id="4"></a>

<table class="table">
  <tr>
    <td class="title left">아쉬운 점</td>
    <td class="title right">개선할 점</td>
  </tr>
  <tr>
    <td>역할 분배를 페이지별로 했더니 특정 사람에게 너무 많은 역할이 주어졌습니다.</td>
    <td>기능별로 역할 분배를 해야겠다고 느꼈습니다.</td>
  </tr>
  <tr>
    <td>리덕스의 action이 너무 많아진 느낌입니다.</td>
    <td>중복되는 부분을 깔끔히 정리해야겠습니다.</td>
  </tr>
  <tr>
    <td>데이터를 정의할 때 어떤 type의 값을 넣을건지를 정확히 정하지 않아 나중에 수정할 일이 많았습니다.</td>
    <td>데이터 정의를 보다 정확하게 해야겠습니다.</td>
  </tr>
  <tr>
    <td>firebase와 redux상태간의 정확한 정리가 없어 헷갈리는 일이 많았습니다.	</td>
    <td>상태 정리를 명확하게 해야겠습니다.</td>
  </tr>
  <tr>
    <td>코드리뷰가 적극적으로 이루어지지 않았던 것 같습니다. 제가 짠 코드가 괜찮은 코드인지 아닌지를 판단하기 어려웠고, 팀원이 짠 코드를 제대로 파악하기 힘들었습니다.</td>
    <td>서로간의 코드를 적극적으로 검토하고 리뷰해야겠습니다.</td>
  </tr>
