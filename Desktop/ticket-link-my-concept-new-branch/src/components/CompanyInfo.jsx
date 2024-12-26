import { Link } from "react-router-dom";

const CompanyInfo = () => {
  return (
    <>
      <div
        style={{
          borderTop: "3px solid black",
        }}
      ></div>

      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "300px",
          marginTop: "20px",
        }}
      >
        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            alert(
              "티켓링크는 개인정보를 소중히 다루며,\n" +
                "관련 법률을 준수합니다.\n" +
                "개정 사항은 공지사항을 통해 안내됩니다."
            );
          }}
        >
          &nbsp;개인정보 처리방침
        </li>

        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            alert(
              "이메일 무단 수집을 금지합니다.\n위반 시 관련 법률에 따라 처벌받을 수 있습니다."
            );
          }}
        >
          이메일무단수집거부
        </li>
      </ul>

      <div>
        <ul
          style={{
            margin: "0 auto", // 수평 중앙 정렬
            position: "relative", // 부모 기준으로 위치 설정
            transform: "translateY(10%)", // 자신 크기 기준으로 수직 중앙 정렬
            textAlign: "center", // 텍스트 중앙 정렬
            lineHeight: "60px",
            fontSize: "17px",
          }}
        >
          <li>회사명: 엔에치엔링크 주식회사</li>
          <li>대표이사: 왕문주</li>
          <li>사업자 등록번호: 144-81-25090</li>
          <li>주소: 서울특별시 강남구 강남대로 586, 제이빌 06043</li>
          <li>개인정보보호 책임자: 서상훈</li>
          <li>© NHN LINK Corporation. All rights reserved.</li>
        </ul>
      </div>
    </>
  );
};

export default CompanyInfo;
