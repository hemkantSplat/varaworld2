import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const SEO = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    {
      allSite {
        nodes {
          siteMetadata {
            description
            title
          }
        }
      }
    }
  `)
  return (
    <Helmet
      title={`${title} | ${data.allSite.nodes[0].siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: `${data.allSite.nodes[0].siteMetadata.description} | ${description}`,
        },
      ]}
    ></Helmet>
  )
}

export default SEO
