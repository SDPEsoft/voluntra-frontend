import React from "react";
import {Container} from 'react-bootstrap'

const BannerSection = () => {
  return (
    <div className="image-container" style={{ position: "relative", top: "0" }}>
      <img
        src="https://www.pointsoflight.org/wp-content/uploads/2019/03/yandf_header_resized.jpg"
        style={{ width: "100%", minHeight: "216px" }}
        className="img"
      />

      <div
        className="overlay-text"
        style={{
          position: "absolute",
          top: "0",
          backgroundColor: "rgba(50, 20, 50, 0.5)",
          paddingTop: "6%",
          width: "100%",
          height: "100%",
          color: "white",
          textAlign: "center",
          backdropFilter: "blur(3px)",
        }}
      >
        <Container>
          {/* <TypeAnimation
          sequence={[
            "YOUTH AND FAMILIES",
            1000,
            "Empowering volunteers of all ages to take action that improves the world.",
            1000,
          ]}
          speed={50}
          style={{ fontSize: "28px", fontWeight: "bold" }}
          repeat={Infinity}
        /> */}
          <h1 style={{ fontWeight: "bolder" }}>YOUTH AND FAMILIES</h1>
          <h3>
            Empowering volunteers of all ages to take action <br /> that
            improves the world.
          </h3>
        </Container>
      </div>
    </div>
  );
};

export default BannerSection;
