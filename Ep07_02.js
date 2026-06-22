// <audio>
// HTML 문서에 소리 컨텐츠를 삽입할 때 사용
// src속성 또는 <source> 엘리먼트 사용
// 한 개 이상의 오디오 소스 지정 가능
// <audio controls src="경로">
// <audio controls>
//    <source src="" type="">
// </audio>

// <video>
// 영상 컨텐츠를 HTML 문서에 삽입할 때 사용
// src속성 또는 <source> 엘리먼트 사용
// 한 개 이상의 오디오 소스를 지정 가능
// 다수를 지정한 경우, 가장 적절한 소스를 브라우저가 설정
// < controls src="경로">
// <video controls>
//    <source src="" type="">
// </video>

// controls
// 재생막대 표시

// autoplay
// 자동 실행
// 크롬, 파이어폭스는 지원하지 않음

// loop
// 반복 재생

// muted
// 소리 제거

// preload
// 페이지를 불러올 시 오디오나 비디오 파일을 어떻게 로딩할 것인지 지정
// 사용할 수 있는 값은 auto, metadata, none
// 기본적으로 preload="auto"

// width, height
// 너비 및 높이 지정
// 하나만 지정 시 나머지는 자동 계산

// poster="파일명"
// 비디오 태그에서 사용하는 속성
// 비디오 재생 전까지 화면에 표시될 포스터 이미지 지정

// <a>
// href속성 사용
// 하이퍼링크를 만듦
// 같은 폴더 내 다른 페이지로 이동
// ex1) <a href="inner.html">다른 페이지로 이동></a>
// ex2) <a href="inner.html target="_blank">새 탭으로 페이지 열기</a>
// 이미지에 하이퍼링크 걸기
// ex) <a href="inner.html"><img src=apple.png>
// ID 속성이 apple인 특정 위치로 이동하는 하이퍼링크
// ex) <a href="#apple">이동</a> (ID가 apple인 요소로 스크롤이 이동)
