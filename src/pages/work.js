import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
// import Work from "../components/ourWork"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"
import SEO from "../components/SEO"

const work = ({ data }) => {
  return (
    <Layout>
      <SEO title="Work" description="Work Page" />
      <AboutHeader img={`../solutions/solution.png`}>
        <h1>OUR WORK</h1>
        <h5>Solutions Powered by Varaha</h5>
      </AboutHeader>
      <Wrapper>
        <div className="work-center">
          {data.work.nodes.map((item, index) => {
            const image = getImage(item.workfront)
            const slug = slugify(item.title, { lower: true })
            return (
              <Link to={`/${slug}`} key={index}>
                {" "}
                <div className="work">
                  <GatsbyImage image={image} alt={item.title} />
                  {/* <img src={VaraMuseum} alt="varaMuseum" /> */}
                  <h3>{item.title}</h3>
                </div>
              </Link>
            )
          })}
        </div>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    work: allContentfulWork(sort: { fields: order }) {
      nodes {
        workfront {
          gatsbyImageData(
            layout: FULL_WIDTH
            formats: WEBP
            placeholder: TRACED_SVG
          )
        }
        title
      }
    }
  }
`

export default work

const AboutHeader = styled.div`
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
  height: 60vh;

  h5 {
    font-size: 22px;
  }
`

const Wrapper = styled.div`
  background: #000000;
  width: 100vw;
  padding: 4rem 0;

  .work-center {
    width: 90vw;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 2rem;

    .work {
      position: relative;
      overflow: hidden;

      h3 {
        position: absolute;
        bottom: 10%;
        left: -100%;
        color: white;
        transition: all 0.6s linear;
      }

      &:hover img {
        opacity: 0.5;
      }

      &:hover h3 {
        left: 10%;
      }
    }

    img {
      width: 100%;
      transition: all 0.3s linear;
    }

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`
