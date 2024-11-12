// 코드는 원래 순서대로 진행
// 비동기는 결과가 준비될 때 까지 기다리면서
// 다른 코드를 먼저 실행하는 방식
// 아닐 비 + 같을 동 + 기간 할 때 기

console.log("1. 데이터를 가져옵니다...");
// fetch는 비동기로 작동
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log("2. 데이터:", data));
console.log("3. 다른 작업을 합니다.");

// fetch가 비동기로 작동하기 때문에
// 1. 데이터를 가져옵니다...
// 다음에
// 3. 다음 잡업을 합니다.
// 가 먼저 실행된다.
// 비동기 작업이 있을 때 순서가 꼬이기 때문에,
// 이를 간편하게 관리하려고 나온 게 async/await 문법

// async 함수:
// async 키워드로 함수를 선언하면, 항상 Promise를 반환
// await:
// await 키워드는 Promise가 해결될 때까지 기다렸다가 결과를 반환
