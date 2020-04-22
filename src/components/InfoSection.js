/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
import {Link, useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import {FaArrowCircleRight} from 'react-icons/fa'


const InfoSection = ({children, buttonText = 'button text', link = '/'}) => {
  const {top100Badge} = useStaticQuery(graphql`
    query GET_TOP_100_BADGE_IMAGE {
      top100Badge: file(relativePath: { eq: "top-100-mortgage-companies-in-america-2019-execute-magazine.png" }) {
        childImageSharp {
          fixed(width: 397) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)
  return (
    <section sx={{
      variant: 'sections.hpSection',
      bg: 'black',
      color: 'white',
      py: [4, 5, 5, 5],
      h2: {

      }
    }}>
      <Container sx={{
        display: [null, 'flex'],
        alignItems: 'center',
        justifyContent: 'space-around',
        px: 2,
        textAlign: ['center', 'left']
      }}>
        <div>
          {children}
        </div>
        {/* <Link to={link}>
         <Img fixed={top100Badge.childImageSharp.fixed} alt='Goldwater Bank declared top 100 Morgage Companies in America by Mortgage Execute Magazine'/>
        </Link> */}
      </Container>
    </section>
  )
}

export default InfoSection
