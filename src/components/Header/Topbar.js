/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'

const Topbar = () => {
  return (
    <div sx={{
      display: 'flex',
      justifyContent: 'space-between',
      color: 'white',
      bg: 'black',
      py: 1,
      px: [2, 4],
      p: {
        display: 'inline-block',
        fontSize: [0, 1],
        m: 0,
        a: {
          color: 'white',
          textDecoration: 'none',
          ':hover': {
            color: 'primary'
          }
        }
      }
    }}>
      <p>Phoenix Mortgage Lender</p>
      <p><a href='tel:480-800-8387'>Call Now: 480-800-8387</a></p>
    </div>
  )
}

export default Topbar
