import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/all"

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    // <div
    //   className={className}
    //   style={{
    //     ...style,
    //     display: "block",
    //     transform: "translateX(-500%)",
    //     fontSize: "32px",
    //   }}
    //   onClick={onClick}
    // />
    <IoIosArrowForward
      className={className}
      style={{
        fontSize: "65px",
        display: "block",
        right: "0px",
        zIndex: "15",
        height: "60px",
        width: "60px",
        opacity: "1",
        color: "White",
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <IoIosArrowBack
      className={className}
      style={{
        fontSize: "65px",
        display: "block",
        left: "0px",
        zIndex: "15",
        height: "60px",
        width: "60px",
        opacity: "1",
        color: "White",
      }}
      onClick={onClick}
    />
  )
}

const workTemplate = ({ data }) => {
  console.log(data)
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <Layout>
      <WorkHeader img={`../solution.png`}>
        <h2>{data.contentfulWork.title}</h2>
      </WorkHeader>
      <WorkContent>
        <div className="slider">
          {/* <Slider {...settings}>
            {data.contentfulWork.images.map((item, index) => {
              const image = getImage(item)
              return (
                <div>
                  <GatsbyImage image={image} alt={item.title} />
                </div>
              )
            })}
          </Slider> */}
          <iframe
            src={data.contentfulWork.test.urls[0]}
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <div className="content">
          <p>{data.contentfulWork.content.content}</p>
        </div>
      </WorkContent>
      <VideoContent>
        <Slider {...settings}>
          {data.contentfulWork.images.map((item, index) => {
            const image = getImage(item)
            return (
              <GatsbyImage
                image={image}
                alt={item.title}
                style={{ height: "650px", objectFit: "cover" }}
              />
            )
          })}
        </Slider>
      </VideoContent>
    </Layout>
  )
}

export default workTemplate

export const query = graphql`
  query MyQuery($title: String) {
    contentfulWork(title: { eq: $title }) {
      id
      title
      content {
        content
      }
      test {
        urls
      }
      images {
        gatsbyImageData(
          placeholder: TRACED_SVG
          layout: CONSTRAINED
          formats: WEBP
        )
      }
    }
  }
`

const WorkHeader = styled.div`
  background: #212121;
  display: flex;
  flex-direction: column;
  /* padding: 10rem 0 5rem 0; */
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  height: 50vh;
`

const WorkContent = styled.div`
  width: 100vw;
  background: #212121;
  /* height: 700px; */
  /* display: flex; */

  @media screen and (min-width: 768px) {
    display: flex;
    height: 700px;
  }

  .slider {
    width: 100%;
    /* height: 300px; */
    padding: 2rem;
    display: grid;
    place-items: center;
    @media screen and (min-width: 768px) {
      width: 50%;
    }

    iframe {
      height: 100%;

      @media screen and (min-width: 768px) {
        height: 70%;
      }
    }
  }

  .content {
    width: 100%;
    padding: 1rem 3rem;
    color: #ffffff;
    display: grid;
    place-items: center;

    p {
      line-height: 2;
    }
    @media screen and (min-width: 768px) {
      width: 50%;
      padding: 3rem 3rem;
    }
  }
`

const VideoContent = styled.div`
  /* height: 650px; */
  background: #000000;

  /* margin-bottom: 2rem; */

  @media screen and (min-width: 768px) {
    padding: 2rem 3rem;
  }

  .slick-prev {
    left: 25px;
    z-index: 999;
  }

  .slick-next::before {
    font-size: 62px;
  }
  .slick-prev::before {
    font-size: 62px;
  }
`
