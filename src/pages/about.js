import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import VaraTech from "../Assets/about/About_Page_Introduction_Image.png"
import Commitment from "../Assets/about/Isa_Khan_v02.png"
import Mission from "../Assets/about/LMG_041_v02.png"

const about = () => {
  return (
    <Layout>
      <AboutHeader>
        <h2>ABOUT US</h2>
      </AboutHeader>
      <AboutContentContainerFirst>
        <img src={VaraTech} alt="varaTech" />
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
        <img src={Commitment} alt="commitment" />
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
        <img src={Mission} alt="mission" />
        <div className="contents">
          <h4>Mission</h4>
          <p>
            Varaha is committed to create efficient solutions using the emerging
            technology to capture, archive and document the icons of cultural
            heritage, and make data pivotal to the conservation and knowledge
            sharing for the future generations.
          </p>
        </div>
      </AboutContentContainerThird>
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
`

const AboutContentContainerFirst = styled.div`
  display: grid;
  height: 400px;
  grid-template-columns: 50% 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .contents {
    padding: 4rem 4rem;
    background: #000000;
    color: #ffffff;
    h4 {
      margin-bottom: 2rem;
    }
    p {
      line-height: 1.5;
      font-size: 18px;
    }
  }
`

const AboutContentContainerSecond = styled.div`
  display: grid;
  height: 400px;
  grid-template-columns: 50% 50%;
  background: #212121;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    order: 1;
  }

  .contents {
    padding: 4rem 4rem;
    background: #000000;
    color: #ffffff;
    h4 {
      margin-bottom: 2rem;
    }
    p {
      line-height: 1.5;
      font-size: 18px;
    }
  }
`

const AboutContentContainerThird = styled.div`
  display: grid;
  height: 400px;
  grid-template-columns: 50% 50%;
  background: #000000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .contents {
    padding: 4rem 4rem;
    background: #212121;
    color: #ffffff;
    h4 {
      margin-bottom: 2rem;
    }
    p {
      line-height: 1.5;
      font-size: 18px;
    }
  }
`
