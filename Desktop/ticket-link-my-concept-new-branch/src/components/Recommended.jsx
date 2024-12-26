import { Link } from "react-router-dom";

const Recommended = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "left",
          fontSize: "27px",
          marginTop: "5rem",
          margin: "6rem 0rem 3rem 0rem",
          fontWeight: "bold",
        }}
      >
        오늘의 추천
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "3rem",
        }}
      >
        <div>
          <Link to="https://www.ticketlink.co.kr/product/49356">
            <img
              src="http://image.toast.com/aaaaab/ticketlink/TKL_10/MEGAFIELD_pst_0326.jpg"
              style={{ width: "300px", height: "460px", marginBottom: "10px" }}
            />
          </Link>
          <br />
          <p>&nbsp;메가필드뮤직페스티벌 2024</p>
        </div>
        <div>
          <Link to="https://www.ticketlink.co.kr/product/37096">
            <img
              src="http://image.toast.com/aaaaab/ticketlink/TKL_8/jr_pst0103.jpg"
              style={{ width: "300px", height: "460px", marginBottom: "10px" }}
            />
          </Link>
          <br />
          <p>&nbsp;뮤지컬 〈잭더리퍼〉- 대구</p>
        </div>
        <div>
          <Link to="https://www.ticketlink.co.kr/product/37306">
            <img
              src="http://image.toast.com/aaaaab/ticketlink/TKL_8/jr_pst0103.jpg"
              style={{ width: "300px", height: "460px", marginBottom: "10px" }}
            />
          </Link>
          <br />
          <p>&nbsp;뮤지컬 〈잭더리퍼〉 - 청주</p>
        </div>
        <div>
          <Link to="https://www.ticketlink.co.kr/product/27913">
            <img
              src="http://image.toast.com/aaaaab/ticketlink/TKL_7/theday_main_0411.jpg"
              style={{ width: "300px", height: "460px", marginBottom: "10px" }}
            />
          </Link>
          <br />
          <p>&nbsp;뮤지컬 그날들 - 대구</p>
        </div>
        <div>
          <Link to="https://www.ticketlink.co.kr/product/32999">
            <img
              src="http://image.toast.com/aaaaab/ticketlink/TKL_10/comeback_200910.jpg"
              style={{ width: "300px", height: "460px", marginBottom: "10px" }}
            />
          </Link>
          <br />
          <p>&nbsp;뮤지컬 〈귀환〉 온라인 생중계 - 온라인 ...</p>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
