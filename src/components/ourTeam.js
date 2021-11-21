import React from "react"
import styled from "styled-components"
// import Hemkant from "../Assets/team/Hemkant_Tripathi.png"
// import Hitesh from "../Assets/team/Hitesh_Kumar.png"
// import Divya from "../Assets/team/Divya_Narain.png"
// import Brijesh from "../Assets/team/Brijesh_Mor.png"
// import Aishwarya from "../Assets/team/Aishwarya_Mhaske.png"
// import Sayan from "../Assets/team/Sayan_Sinha.png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/slick.css"

// import AliceCarousel from "react-alice-carousel"
// import "react-alice-carousel/lib/alice-carousel.css"

// const responsive = {
//   0: { items: 1 },
//   568: { items: 2 },
//   1024: { items: 3 },
//   1600: { item: 3 },
// }

// const items = [
//   <div className="team">
//     <img src={Hemkant} alt="hemkant" />
//     <div className="team-content">
//       <h2 style={{ fontSize: "28px" }}>Hemkant Tripathi</h2>
//       <h4>Co-founder</h4>
//     </div>
//   </div>,
//   <div className="team">
//     <img src={Hitesh} alt="hitesh" />
//     <div className="team-content">
//       <h2 style={{ fontSize: "28px" }}>Hitesh Kumar</h2>
//       <h4>Co-founder</h4>
//     </div>
//   </div>,
//   <div className="team">
//     <img src={Divya} alt="Divya" />
//     <div className="team-content">
//       <h2 style={{ fontSize: "28px" }}>Divya Narain</h2>
//       <h4>Asst. Manager, Museum Projects</h4>
//     </div>
//   </div>,
//   <div className="team">
//     <img src={Brijesh} alt="brijesh" />
//     <div className="team-content">
//       <h2 style={{ fontSize: "28px" }}>Brijesh Mor</h2>
//       <h4>Head, 3D Technology Solutions</h4>
//     </div>
//   </div>,
//   <div className="team">
//     <img src={Aishwarya} alt="aishwarya" />
//     <div className="team-content">
//       <h2 style={{ fontSize: "28px" }}>Aishwarya Mhaske</h2>
//       <h4>Research Assistant</h4>
//     </div>
//   </div>,
//   <div className="team">
//     <img src={Sayan} alt="sayan" />
//     <div className="team-content">
//       <h2 style={{ fontSize: "28px" }}>Sayan Sinha</h2>
//       <h4>Research Assistant</h4>
//     </div>
//   </div>,
// ]

// const settings = {
//   dots: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   speed: 2000,
//   autoplaySpeed: 2000,
//   cssEase: "linear",
// }

const OurTeam = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <TeamContainer>
      <h1>Our Team</h1>
      <div className="team-center">
        {/* <AliceCarousel
          responsive={responsive}
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={1000}
          animationDuration={1000}
          animationType="fadeout"
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          items={items}
        /> */}
        <Slider {...settings}>
          <div className="team">
            <img src={`../team/Hemkant_Tripathi.png`} alt="hemkant" />
            <div className="team-content">
              <h2>Hemkant Tripathi</h2>
              <h4>Co-founder</h4>
            </div>
          </div>
          <div className="team">
            <img src={`../team/Hitesh_Kumar.png`} alt="hitesh" />
            <div className="team-content">
              <h2>Hitesh Kumar</h2>
              <h4>Co-founder</h4>
            </div>
          </div>
          <div className="team">
            <img src={`../team/Divya_Narain.png`} alt="Divya" />
            <div className="team-content">
              <h2>Divya Narain</h2>
              <h4>Asst. Manager, Museum Projects</h4>
            </div>
          </div>
          <div className="team">
            <img src={`../team/Brijesh_Mor.png`} alt="brijesh" />
            <div className="team-content">
              <h2>Brijesh Mor</h2>
              <h4>Head, 3D Technology Solutions</h4>
            </div>
          </div>
          {/* <div className="team">
            <img src={`../team/Aishwarya_Mhaske.png`} alt="aishwarya" />
            <div className="team-content">
              <h2>Aishwarya Mhaske</h2>
              <h4>Researcher</h4>
            </div>
          </div>
          <div className="team">
            <img src={`../team/Sayan_Sinha.png`} alt="sayan" />
            <div className="team-content">
              <h2>Sayan Sinha</h2>
              <h4>Researcher</h4>
            </div>
          </div> */}
        </Slider>

        {/* <div className="team">
          <img src={Hemkant} alt="hemkant" />
          <div className="team-content">
            <h2>Hemkant Tripathi</h2>
            <h4>Co-founder</h4>
          </div>
        </div>
        <div className="team">
          <img src={Hitesh} alt="hitesh" />
          <div className="team-content">
            <h2>Hitesh Kumar</h2>
            <h4>Co-founder</h4>
          </div>
        </div>
        <div className="team">
          <img src={Divya} alt="Divya" />
          <div className="team-content">
            <h2>Divya Narain</h2>
            <h4>Asst. Manager, Museum Projects</h4>
          </div>
        </div>
        <div className="team">
          <img src={Brijesh} alt="brijesh" />
          <div className="team-content">
            <h2>Brijesh Mor</h2>
            <h4>Head, 3D Technology Solutions</h4>
          </div>
        </div>
        <div className="team">
          <img src={Aishwarya} alt="aishwarya" />
          <div className="team-content">
            <h2>Aishwarya Mhaske</h2>
            <h4>Researcher</h4>
          </div>
        </div>
        <div className="team">
          <img src={Sayan} alt="sayan" />
          <div className="team-content">
            <h2>Sayan Sinha</h2>
            <h4>Researcher</h4>
          </div>
        </div> */}
      </div>
    </TeamContainer>
  )
}

export default OurTeam

// const TeamContainer = styled.div`
//   background: #212121;
//   /* margin-top: -1rem; */
//   padding: 4rem 0;

//   h1 {
//     text-align: center;
//     font-weight: 500;
//     color: #ffffff;
//     font-size: 42px;
//     margin-bottom: 2rem;
//   }

//   .team-center {
//     width: 90vw;
//     max-width: 1200px;
//     margin: 0 auto;
//     display: grid;
//     place-items: center;
//     gap: 2rem;
//     /* grid-template-columns: repeat(3, 1fr); */
//     overflow: hidden;

//     @media screen and (min-width: 768px) {
//       grid-template-columns: repeat(3, 1fr);
//       column-gap: 2rem;
//     }

//     .team {
//       width: 350px;

//       @media screen and (min-width: 768px) {
//         width: 260px;
//       }

//       img {
//         width: 100%;
//       }

//       .team-content {
//         display: grid;
//         place-items: center;
//         margin-top: 0.5rem;

//         h2 {
//           font-size: 22px !important;
//         }

//         h4 {
//           font-size: 16.5px;
//         }

//         h2,
//         h4 {
//           color: #ffffff;
//           text-align: center;
//         }
//       }
//     }
//   }
// `
const TeamContainer = styled.div`
  background: #212121;

  /* margin-top: -1rem; */
  padding: 4rem 0;
  height: 700px;

  @media screen and (max-width: 450px) {
    height: auto;
  }

  h1 {
    text-align: center;

    font-weight: 500;

    color: #ffffff;

    font-size: 42px;

    margin-bottom: 2rem;
  }
`
