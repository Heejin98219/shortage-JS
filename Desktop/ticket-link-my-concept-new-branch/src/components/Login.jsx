import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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
            type="email"
            placeholder="이메일을 입력해주세요"
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
            로그인
          </button>
        </div>
        <div>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "16px",
            }}
          >
            <li
              onClick={() => {
                navigate("/findid");
              }}
              style={{
                cursor: "pointer",
              }}
            >
              아이디 찾기
            </li>
            <li
              onClick={() => {
                navigate("/findpw");
              }}
              style={{
                cursor: "pointer",
              }}
            >
              비밀번호 찾기
            </li>
            <li
              onClick={() => {
                navigate("/join");
              }}
              style={{
                cursor: "pointer",
              }}
            >
              회원가입
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
