import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Posters = () => {
  const slideRef = useRef(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const IMG_WIDTH = 1000;
  const slideRange = currentImgIdx * IMG_WIDTH;

  useEffect(() => {
    slideRef.current.style.transition = "all 1s ease-in-out";
    slideRef.current.style.transform = `translateX(-${slideRange}px)`;
  }, [currentImgIdx]);

  // **자동 슬라이드 기능 추가**
  useEffect(() => {
    const interval = setInterval(() => {
      moveToNextSlide();
    }, 1500); // 5초마다 실행

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 타이머 정리
  }, [currentImgIdx]);

  const moveToNextSlide = () => {
    const totalSlides = slideRef.current.children.length; // 슬라이드 개수를 동적으로 계산
    if (currentImgIdx >= totalSlides - 1) {
      setCurrentImgIdx(0); // 마지막 슬라이드에서 첫 번째 슬라이드로 이동
    } else {
      setCurrentImgIdx(currentImgIdx + 1);
    }
  };

  const moveToPrevSlide = () => {
    const totalSlides = slideRef.current.children.length; // 슬라이드 개수를 동적으로 계산
    if (currentImgIdx <= 0) {
      setCurrentImgIdx(totalSlides - 1); // 첫 번째 슬라이드에서 마지막 슬라이드로 이동
    } else {
      setCurrentImgIdx(currentImgIdx - 1);
    }
  };

  const Container = styled.div`
    display: flex;
    justify-content: center;
  `;

  const Wrapper = styled.div`
    width: 1000px; // 한 번에 보이는 슬라이드의 너비
    height: 550px;
    overflow: hidden; // 한 번에 하나의 슬라이드만 보이도록 설정
    margin: 20px 80px;
  `;

  const SlideWrapper = styled.div`
    display: flex;
    width: calc(800px * 4); // 이미지 너비 * 이미지 개수
    height: 100%;
    transition: all 1s ease-in-out;
  `;

  const Dash = styled.div`
    width: 1000px;
    height: 550px;
    flex: none; // 이 속성을 넣어야 화면에 1개씩 보여진다.
    display: flex; // 중앙 정렬을 위해 flexbox 사용
    align-items: center; // 수직 중앙 정렬
    justify-content: center; // 수평 중앙 정렬
  `;

  return (
    <div>
      <Container>
        <span
          onClick={moveToPrevSlide}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="2xl"
              style={{
                cursor: "pointer",
              }}
            />
          </span>
        </span>
        <Wrapper>
          <SlideWrapper ref={slideRef}>
            <Dash>
              <img
                src="http://image.toast.com/aaaaab/ticketlink/TKL_7/fever_main0921.jpg"
                style={{
                  width: "800px", // 부모 컨테이너(Dash)에 맞게 설정
                  height: "500px", // 부모 컨테이너(Dash)에 맞게 설정
                  backgroundSize: "cover", // 이미지 비율 유지하면서 채우기
                }}
              />
            </Dash>
            <Dash>
              <img
                src="http://image.toast.com/aaaaab/ticketlink/TKL_3/dh_main0405.jpg"
                style={{
                  width: "800px", // 부모 컨테이너(Dash)에 맞게 설정
                  height: "500px", // 부모 컨테이너(Dash)에 맞게 설정
                  backgroundSize: "cover", // 이미지 비율 유지하면서 채우기
                }}
              />
            </Dash>
            <Dash>
              <img
                src="http://image.toast.com/aaaaab/ticketlink/TKL_6/fever-main-0831.png"
                style={{
                  width: "800px", // 부모 컨테이너(Dash)에 맞게 설정
                  height: "500px", // 부모 컨테이너(Dash)에 맞게 설정
                  backgroundSize: "cover", // 이미지 비율 유지하면서 채우기
                }}
              />
            </Dash>
            <Dash>
              <img
                src="http://image.toast.com/aaaaab/ticketlink/TKL_6/main10161543.jpg"
                style={{
                  width: "800px", // 부모 컨테이너(Dash)에 맞게 설정
                  height: "500px", // 부모 컨테이너(Dash)에 맞게 설정
                  backgroundSize: "cover", // 이미지 비율 유지하면서 채우기
                }}
              />
            </Dash>
            <Dash>
              <img
                src="http://image.toast.com/aaaaab/ticketlink/TKL_8/PARK_MAIN_0228.jpg"
                style={{
                  width: "800px", // 부모 컨테이너(Dash)에 맞게 설정
                  height: "500px", // 부모 컨테이너(Dash)에 맞게 설정
                  backgroundSize: "cover", // 이미지 비율 유지하면서 채우기
                }}
              />
            </Dash>
          </SlideWrapper>
        </Wrapper>
        <span
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            size="2xl"
            onClick={moveToNextSlide}
            style={{
              cursor: "pointer",
              border: "transparent",
              backgroundColor: "transparent",
            }}
          />
        </span>
      </Container>
    </div>
  );
};

export default Posters;
