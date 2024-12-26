const Join = () => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%)",
          textAlign: "center",
          display: "inline-block",
          margin: "0 auto",
        }}
      >
        <img
          src="/public/ticketLinkLogoImg.png"
          style={{
            margin: "0 auto",
            maxWidth: "200px", // 최대 크기를 200px로 제한
            minWidth: "120px", // 최소 크기를 120px로 설정
            height: "auto", // 비율 유지
            cursor: "pointer",
            marginTop: "8vh", // 화면 높이에 비례한 상단 간격
          }}
        />

        <div
          style={{
            marginTop: "2.5rem",
          }}
        >
          <input
            type="password"
            placeholder="이름을 입력해주세요"
            style={{
              width: "350px",
              padding: "10px",
              fontSize: "17px",
              borderRadius: "7px",
              height: "27px",
            }}
          />
          <br />
          <input
            type="password"
            placeholder="전화번호를 입력해주세요 (-기호 제외)"
            style={{
              width: "350px",
              padding: "10px",
              fontSize: "17px",
              borderRadius: "7px",
              height: "27px",
              marginTop: "12px",
            }}
          />
          <br />
          <input
            type="email"
            placeholder="이메일(아이디)을 입력해주세요"
            style={{
              width: "350px",
              padding: "10px",
              fontSize: "17px",
              borderRadius: "7px",
              height: "27px",
              marginTop: "12px",
            }}
          />
          <br />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            style={{
              width: "350px",
              padding: "10px",
              fontSize: "17px",
              borderRadius: "7px",
              height: "27px",
              marginTop: "12px",
            }}
          />
          <br />
          <input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            style={{
              width: "350px",
              padding: "10px",
              fontSize: "17px",
              borderRadius: "7px",
              height: "27px",
              marginTop: "12px",
            }}
          />
          <br />
          <button
            style={{
              width: "370px",
              padding: "10px",
              fontSize: "17px",
              cursor: "pointer",
              marginTop: "16px",
              fontWeight: "bold",
            }}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
