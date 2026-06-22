// 폼(Form)
// 사용자가 정보를 입력하는 양식
// 사용자의 정보를 입력받기 위해 사용
// 사용자의 정보를 입력받을 수 있게 만들어 놓은 형식
// 입력받는 데이터들의 묶음들을 폼(Form), 데이터를 폼 데이터(Form Data) 또는 필드(Field)
// 정보를 제출하기 위해 어디서부터 어디까지가 양식인지 지정하는 역할을 함
// action
// 양식 데이터를 처리할 서버 프로그램의 URI
// method
// 양식을 제출할 때 사용할 HTTP메서드
// post
// 양식 데이터를 요청 본문으로 전송
// get
// 양식 데이터를 URL의 쿼리스트링으로 붙여서 전송

// 인풋 (Input)
// 데이터를 입력하는 태그
// type 속성을 통해 다양한 방법으로 데이터를 받음

// <label>
// 입력받는 필드를 설명할 때 사용
// ex1) <label>
//          이름 :
//          <input type="text" id="name">
// </label>
// for와 id속성을 사용하여 label태그와 연결지음
// ex2) <label for="name">이름 : </label>
//      <label type="text" id="name">

// placeholder
// 입력 필드가 비어있을 때 해당 입력값의 설명 또는 가이드 문구를 삽입할 수 있음

// fieldset

// legend

// required
// 입력값이 필수라는 것을 명시

// readonly
// 읽기전용

// disabled
// 비활성화 시킬 수 있으며
// 해당 필드는 서버로 전송되지 않음

// autofocus
// 초기에 해당 필드에 커서를 위치 시킬 수 있음
