import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const SNS = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "300px",
        justifyContent: "space-evenly",
        position: "relative",
        margin: "5rem 0rem 5rem 0rem",
        float: "right",
      }}
    >
      <div
        style={{
          backgroundColor: "#ccc",
          display: "inline-block",
          borderRadius: "50%",
          padding: "10px",
        }}
      >
        <a href="https://x.com/nhn_ticketlink">
          <FontAwesomeIcon
            icon={faXTwitter}
            size="xl"
            style={{
              cursor: "pointer",
              color: "black",
              textDecoration: "none",
            }}
          />
        </a>
      </div>

      <div
        style={{
          backgroundColor: "#ccc",
          display: "inline-block",
          borderRadius: "50%",
          padding: "10px",
        }}
      >
        <a href="https://www.facebook.com/ticketlink">
          <FontAwesomeIcon
            icon={faFacebook}
            size="xl"
            style={{
              cursor: "pointer",
              color: "black",
              textDecoration: "none",
            }}
          />
        </a>
      </div>

      <div
        style={{
          backgroundColor: "#ccc",
          display: "inline-block",
          borderRadius: "50%",
          padding: "10px",
        }}
      >
        <a href="https://www.instagram.com/ticketlink.co.kr/">
          <FontAwesomeIcon
            icon={faInstagram}
            size="xl"
            style={{
              cursor: "pointer",
              color: "black",
              textDecoration: "none",
            }}
          />
        </a>
      </div>

      <div
        style={{
          backgroundColor: "#ccc",
          display: "inline-block",
          borderRadius: "50%",
          padding: "10px",
        }}
      >
        <a href="https://blog.naver.com/t_link">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="xl"
            style={{
              cursor: "pointer",
              color: "black",
              textDecoration: "none",
            }}
          />
        </a>
      </div>

      <div
        style={{
          backgroundColor: "#ccc",
          display: "inline-block",
          borderRadius: "50%",
          padding: "10px",
        }}
      >
        <a href="https://www.youtube.com/@ticketlink012">
          <FontAwesomeIcon
            icon={faYoutube}
            size="xl"
            style={{
              cursor: "pointer",
              color: "black",
              textDecoration: "none",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default SNS;
