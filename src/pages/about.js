import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
// import VaraTech from "../Assets/about/About_Page_Introduction_Image.png"
// import Commitment from "../Assets/about/Isa_Khan_v02.png"
// import Mission from "../Assets/about/LMG_041_v02.png"
import Team from "../components/ourTeam"
import Client from "../components/Client"
import SEO from "../components/SEO"

const about = () => {
  return (
    <Layout>
      <SEO title="About" description="About Page" />
      <AboutHeader img={`../about/intro.png`}>
        <h1>ABOUT US</h1>
      </AboutHeader>
      <AboutContentContainerFirst>
        <img src={`../about/first.png`} alt="varaTech" />
        <div className="contents">
          <h4>Varaha Tech Labs</h4>
          <p>
            Varaha is a technology startup which is born out of the need to
            document the vast treasure of archaeological and heritage artifacts,
            monuments, sites and artistic expressions. The cultural identities
            of any society are preserved within these treasures, and loss of
            these are immeasurable and irreversible. The 3D archival is the
            world leading technology intervention to archive and document these
            treasures, and Varaha is at the forefront of this transformation.
          </p>
        </div>
      </AboutContentContainerFirst>
      <AboutContentContainerSecond>
        <img src={`../about/Isa_Khan_v03.png`} alt="commitment" />
        <div className="contents">
          <h4>Commitment</h4>
          <p>
            Varaha is committed to create efficient solutions using the emerging
            technology to capture, archive and document the icons of cultural
            heritage, and make data pivotal to the conservation and knowledge
            sharing for the future generations.
          </p>
        </div>
      </AboutContentContainerSecond>
      <AboutContentContainerThird>
        <img src={`../about/LMG_041_v03.png`} alt="mission" />
        <div className="contents">
          <h4>Mission</h4>
          <p>
            Our aim is to create a centralized and easy-to-use framework which
            will make the highest quality archival data capturing possible at
            extremely fast pace. Varaha will create an environment of
            exploration by bringing together museums and experience centers,
            conservation architects, educationists, researchers and cultural
            tourism promoters on one scalable centralized platform.
          </p>
        </div>
      </AboutContentContainerThird>
      <Team />
      <Client />
    </Layout>
  )
}

export default about

const AboutHeader = styled.div`
  background: #212121;
  display: grid;
  padding: 10rem 0 5rem 0;
  place-items: center;
  text-align: center;
  color: #ffffff;
  background: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  height: 70vh;
`

const AboutContentContainerFirst = styled.div`
  display: grid;
  height: auto;
  width: 100vw;
  background: #212121;
  /* grid-template-columns: 50% 50%; */

  @media screen and (min-width: 768px) {
    grid-template-columns: 50% 50%;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: contain;

    @media screen and (min-width: 768px) {
      height: 500px;
      object-fit: contain;
    }
    /* @media screen and (min-width: 1200px) {
      height: 100%;
    } */
  }

  .contents {
    padding: 4rem 4rem;
    background: #000000;
    color: #ffffff;
    h4 {
      margin-bottom: 2rem;
      font-size: 32px;
    }
    p {
      line-height: 1.5;
      font-size: 18px;
    }
  }
`

const AboutContentContainerSecond = styled.div`
  display: grid;
  height: auto;
  width: 100vw;
  background: #212121;
  /* grid-template-columns: 50% 50%; */

  @media screen and (min-width: 768px) {
    grid-template-columns: 50% 50%;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: contain;

    @media screen and (min-width: 768px) {
      order: 2;
      object-fit: contain;
    }

    @media screen and (min-width: 1200px) {
      height: 500px;
    }
  }
  .contents {
    padding: 4rem 4rem;
    background: #000000;
    color: #ffffff;
    h4 {
      margin-bottom: 2rem;
      font-size: 32px;
    }
    p {
      line-height: 1.5;
      font-size: 18px;
    }
  }
`

const AboutContentContainerThird = styled.div`
  display: grid;
  height: auto;
  width: 100vw;
  background: #212121;
  /* grid-template-columns: 50% 50%; */

  @media screen and (min-width: 768px) {
    grid-template-columns: 50% 50%;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: contain;

    @media screen and (min-width: 768px) {
      object-fit: contain;
    }
    @media screen and (min-width: 1200px) {
      height: 500px;
    }
  }

  .contents {
    padding: 4rem 4rem;
    background: #000000;
    color: #ffffff;
    h4 {
      margin-bottom: 2rem;
      font-size: 32px;
    }
    p {
      line-height: 1.5;
      font-size: 18px;
    }
  }
`
