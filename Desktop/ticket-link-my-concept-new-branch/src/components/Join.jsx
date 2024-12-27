import { useState } from "react";
import supabase from "../supabaseClient";

const Join = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [passWordRe, setPasswordRe] = useState("");

  // 회원가입 함수
  const UserJoin = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        name: "name",
        phone: "phoneNumber",
        email: "email",
        password: "password",
      });

      if (error) {
        alert("에러:", error.message);
      } else {
        alert("성공:", data);
      }
    } catch (err) {
      alert("예상:", err);
    }
  };

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
            maxWidth: "200px",
            minWidth: "120px",
            height: "auto",
            cursor: "pointer",
            marginTop: "8vh",
          }}
        />

        <div
          style={{
            marginTop: "2.5rem",
          }}
        >
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            style={{
              width: "350px",
              padding: "10px",
              fontSize: "17px",
              borderRadius: "7px",
              height: "27px",
            }}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
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
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
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
            value={passWord}
            onChange={(e) => {
              setPassword(e.target.value);
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
            value={setPasswordRe}
            onChange={(e) => {
              setPasswordRe(e.target.value);
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
            onClick={UserJoin()}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
