import {graphql, StaticQuery} from 'gatsby'
import React, {useState} from 'react'
import Layout from '../components/layout'

import {IconContext} from 'react-icons'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
    }
  }
`

function LayoutContainer (props) {
  const [showNav, setShowNav] = useState(false)
  function handleShowNav () {
    setShowNav(true)
  }
  function handleHideNav () {
    setShowNav(false)
  }
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
          )
        }
        return (
          <IconContext.Provider value={{style: {verticalAlign: 'baseline'}}}>

            <Layout
              {...props}
              siteTitle={data.site.title}
              showNav={showNav}
              doHideNav={handleHideNav}
              doShowNav={handleShowNav}
            />
          </IconContext.Provider>
        )
      }}
    />
  )
}

export default LayoutContainer
