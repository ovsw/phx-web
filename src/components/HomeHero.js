/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
import {Link, useStaticQuery, graphql} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const HomeHero = () => {
  const {mobile, desktop} = useStaticQuery(graphql`
    query GET_HERO_BG_IMAGES {
      mobile: file(relativePath: { eq: "hero-image-bg-mobile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      desktop: file(relativePath: { eq: "hero-image1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  const sources = [
    mobile.childImageSharp.fluid,
    {
      ...desktop.childImageSharp.fluid,
      media: `(min-width: 640px)`
    }
  ]

  return (
    <>
      <BackgroundImage fluid={sources} Tag='section' sx={{
        paddingTop: ['11rem'],
        minHeight: [null, '80vh', '100vh'],
        display: 'flex',
        alignItems: 'center'
      }}>
        <Container sx={{
          py: [4, 1, 2, 2],
          textAlign: ['center', 'left']
        }}>
          <div className='textWrapper' sx={{
            maxWidth: ['full', '70%', null, '3/5', '3xl']
          }}>
            <h1 sx={{
              variant: 'text.superHeading',
              color: 'white',
              justifyContent: ['center', 'flex-start'],
              position: 'relative',
              mb: [2, 0],
              '::before': {
                borderTopColor: 'white',
                marginTop: '-1px',
                position: ['absolute', 'static'],
                bottom: '-.5rem',
                left: '50%',
                transform: ['translateX(-50%)', 'none']
              }
            }}>
              Phoenix Mortgage Lender
            </h1>
            <h2 sx={{
              fontFamily: 'heading',
              fontWeight: 'heading',
              lineHeight: 'none',
              fontSize: [3, '3.3rem', '3.4rem', '4.15rem', '5rem'],
              letterSpacing: '-.03em',
              mt: [0, null, 3, 0],
              mb: [4, null,  5, 4]
            }}>
              <span sx={{
                color: 'white',
                textShadow: '0 2px 5px rgba(0,0,0,.5)',
                display: 'block',
                fontSize: [5, '3.3rem'],
                mb: [2, 0]
              }}>
              Personalized Service</span> for your Home Loan
            </h2>
            <p sx={{
              fontSize: [0, 1],
              maxWidth: ['none', '70%', '80%', '85%'],
              mb: [4, null, 5, 4]
            }}>I’m Jimmy Vercellino, an experienced mortgage originator with Phoenix lender Goldwater Bank Mortgage Division. My team and I work hard to provide a timely, efficient and excellent home loan process for you. We serve families nationwide.
            </p>
            <Link to='/contact-me/' sx={{variant: 'buttons.simple', mr: 2}}>
              <span>Contact</span>
            </Link>
            <Link to='/apply/' sx={{variant: 'buttons.simpleWhite'}}>
              <span>Apply</span>
            </Link>
          </div>
        </Container>
      </BackgroundImage>
    </>
  )
}

export default HomeHero
