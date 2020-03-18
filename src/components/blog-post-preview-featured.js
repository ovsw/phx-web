/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {Link} from 'gatsby'

import {format} from 'date-fns'
// import {buildImageObj, getBlogUrl} from '../lib/helpers' // cn
// import {imageUrlFor} from '../lib/image-url'
import Img from 'gatsby-image'
import PortableText from './portableText'

// import styles from './blog-post-preview.module.css'
// import {responsiveTitle3} from './typography.module.css'

function BlogPostPreview (props) {
  // const thumbSize = props.largeThumbs ? {width: 700, height: 400} : {width: 370, height: 252}

  return (
    <div sx={{position: 'relative'}}>
      <div className='imageWrapper' sx={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }}>
        {/* <Link to={getBlogUrl(props.publishedAt, props.slug.current)}> */}
        <Link to={`/${props.slug.current}`}>
          {props.mainImage && props.mainImage.asset && (
            <>
              {/* <img
                src={imageUrlFor(buildImageObj(props.mainImage))
                  .width(thumbSize.width)
                // .height(Math.floor((9 / 16) * 600))
                  .height(thumbSize.height)
                  .auto('format')
                  .url()}
                alt={props.mainImage.alt}
              /> */}
              <Img fluid={props.mainImage.asset.fluid} alt={props.mainImage.alt} imgStyle={{transition: 'all 0.3s ease-in-out 0s'}} />
            </>
          )}
        </Link>
      </div>
      <div>

        <div>
          <span>{format(props.publishedAt, 'MMMM Do, YYYY')}</span>
          <span><Link to={`/${props.slug.current}`}>{props.categories[0].title}</Link></span>
        </div>

        <h4><Link to={`/${props.slug.current}`}>{props.title}</Link></h4>
        {props._rawExcerpt && (
          <div >
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}

      </div>
    </div>
  )
}

export default BlogPostPreview
