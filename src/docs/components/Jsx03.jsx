// 실습
// name과 message를 넣어서 랜더링하기
// name : 이름, message : 환영합니다

export default function Jsx03() {
  const name = "민병욱";
  const message = "환영합니다";
  return (
    <div>
      <p style={{ color: "red" }}>{message}</p>제 이름은 {name} 입니다.
    </div>
  );
}
