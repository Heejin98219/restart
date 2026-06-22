// <img>
// 문서에 이미지를 삽입
// <img src="이미지 경로" alt="">

// <src>
// 입력 필수
// 이미지 경로 지정

// alt
// 필수는 아님
// 이미지가 출력되지 않았을 때 이 속성값을 대신 출력

// height
// 픽셀 단위의 이미지의 고유 크기
// 단위 없는 정수여야 함

// width
// 이미지의 픽셀 기준 고유 너비
// 단위 없는 정수여야 함

// 절대경로
// 웹 이미지 절대경로
// http 프로토콜로 시작해서 전체 경로 입력
// ex1) http://www.naver.com/app.png
// 웹 이미지 절대경로
// 루트('/') 디렉터리부터 시작하는 경우 현재 도메인이 자동으로 앞에 붙음
// ex2) /apple.png
// ex3) C:/User/gymcoding/apple.png

// 상대경로
// 현재 문서를 기준으로 경로를 인식
// ex1) index.html에서 동일 위치 → src="apple.png" 혹은 src="./apple.png"
// ex2) index.html의 상위 폴더에 이미지가 있는 경우 → src="../apple.png"
// ex3) index.html의 하위 폴더에 이미지가 있는 경우 → src="하위폴더/apple.png"
