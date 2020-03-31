/** @jsx jsx */
import React, {useState} from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
import {Link, useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import ModalVideo from 'react-modal-video'
import '../../node_modules/react-modal-video/css/modal-video.min.css'

function HomeVideo (props) {
  const [videoToggler, setvideoToggler] = useState(false)

  const {videoBgImage} = useStaticQuery(
    graphql`
    query {
      videoBgImage: file(relativePath: { eq: "jimmy-vercellino-interview-on-good-morning-arizona.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `
  )

  return (

    <section sx={{variant: 'sections.hpSection', bg: '#fdf9f2'}}>
      <Container>
        <div sx={{mb: 5}}>
          <span sx={{variant: 'text.superHeading'}}>Meet</span>
          <h2 sx={{variant: 'text.mainHeading', mb: 0}}> Jimmy <span sx={{color: 'primary'}}>Vercellino</span></h2>
        </div>

        <div sx={{
          display: 'flex',
          flexWrap: ['nowrap', null, null, 'wrap']
        }}>
          <div sx={{
            width: ['full', null, null, '1/2'],
            pr: ['none', null, null, 5]
          }}>
            <h3>Need content here</h3>
            <p>Our functionality is unparalleled, but our back-end performance and non-complex use is invariably considered a remarkable achievement taking into account this month's financial state of things!
            </p>
            <p>
              If all of this comes off as mixed-up to you, that's because it is! Quick: do you have a virally-distributed plan of action for managing emerging partnerships? Without data hygiene supervising, you will lack architectures.
            </p>
          </div>

          <div sx={{
            width: ['full', null, null, '1/2']
          }}>
            <div onClick={() => setvideoToggler(!videoToggler)} sx={{cursor: 'pointer'}}>
              <Img fluid={videoBgImage.childImageSharp.fluid} alt='Jimmy' className='w-100' style={{height: '100%'}} />
            </div>
          </div>

        </div>
        <ModalVideo channel='youtube' isOpen={videoToggler} videoId='UgUybgYklkE' onClose={() => setvideoToggler(!videoToggler)} />
      </Container>
    </section>
  )
}

export default HomeVideo
