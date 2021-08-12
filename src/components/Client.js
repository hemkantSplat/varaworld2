import React from "react"
import styled from "styled-components"
import BiharMuseum from "../Assets/client/bihar-museum-logo-big.png"
import IndianMuseum from "../Assets/client/Indian_Museum_Kolkata_Logo.png"
import MinistryOfCulture from "../Assets/client/Ministry_of_Culture_Logo.png"
import NMLogo from "../Assets/client/NM_Logo.png"
const Client = () => {
  return (
    <ClientContainer>
      <h1>Our Clients</h1>
      <div className="client-center">
        <img src={NMLogo} alt="NMLogo" />
        <img src={MinistryOfCulture} alt="Ministryofculture" />
        <img src={IndianMuseum} alt="IndianMuseum" />
        <img src={BiharMuseum} alt="biharMuseum" />
      </div>
    </ClientContainer>
  )
}

export default Client

const ClientContainer = styled.div`
  background: #151515;
  margin-top: -1rem;
  padding: 4rem 0;

  h1 {
    text-align: center;
    font-weight: 500;
    color: #ffffff;
    font-size: 42px;
    margin-bottom: 2rem;
  }

  .client-center {
    width: 90vw;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    place-items: center;
    row-gap: 1.5rem;
    img {
      width: 200px;
    }

    img:first-child {
      width: 100px;
    }

    img:nth-child(2) {
      width: 150px;
    }

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }
  }
`
