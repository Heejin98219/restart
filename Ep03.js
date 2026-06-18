s; // Emmet
// html과 css의 자동 완성 기능 제공
// 작성 시간 단축

// 자식노드
// '>' 사용
// ex) div>ul>li 입력 후 탭 클릭 시
// <div>
//     <ul>
//         <li></li>
//     </ul>
// </div>
// 자동 출력

// 형제노드
// '+' 사용
// ex) div>ol+ul+div 입력 후 탭 클릭 시
// <div>
//     <ol></ol>
//     <ul></ul>
//     <div></div>
// </div>
// 자동 출력

// 반복노드
// '*' 사용
// ex) div>ul>li*3 입력 후 탭 클릭 시
// <div>
//    <ul>
//        <li></li>
//        <li></li>
//        <li></li>
//    </ul>
// </div>

// 아이디
// '#' 사용
// ex1) span#item 입력 시 <span id="item"></span>
// ex2) #item만 입력 시 <div id="item"></div>
// 태그의 기본 값은 div

// 클래스
// '.' 사용
// ex1) span.title 입력 시 <span class="title></span>
// ex2) .title만 입력 시 <div class="title"></div>

// 컨텐츠
// '{ }' 사용
// ex) p.container{Hello World~!} 입력 시
// <p class="container">Hello World~!</p> 출력

// 자동 넘버링
// '$' 사용
// ex) p.container{item}
// 단, item에는 넘버링이 부여되도록 할 것임
// 그 때 '$' 사용
// <p class="container">item1</p> 출력
// ex2) 5개 반복 시 p.container{item$}*5 입력 후 탭 클릭
