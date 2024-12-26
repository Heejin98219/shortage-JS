const MidMenus = () => {
  return (
    <div>
      <div
        style={{
          margin: "0 auto",
        }}
      >
        <ul
          style={{
            borderTop: "1.5px solid #ccc",
            borderBottom: "1.5px solid #ccc",
            display: "flex",
            fontSize: "27px",
            justifyContent: "space-evenly",
            marginTop: "8rem",
            padding: "4px 0px 4px 0px",
          }}
        >
          <li
            style={{
              cursor: "pointer",
            }}
          >
            공연
          </li>
          <li
            style={{
              cursor: "pointer",
            }}
          >
            전시
          </li>
          <li
            style={{
              cursor: "pointer",
            }}
          >
            지역
          </li>
          <li
            style={{
              cursor: "pointer",
            }}
          >
            랭킹
          </li>
          <li
            style={{
              cursor: "pointer",
            }}
          >
            기획전
          </li>
          <li
            style={{
              cursor: "pointer",
            }}
          >
            이벤트
          </li>
          <li
            style={{
              cursor: "pointer",
            }}
          >
            VIP
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MidMenus;
