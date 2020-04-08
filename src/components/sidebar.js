/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {Link} from 'gatsby'

import SocialLinks from './social-links'

const Sidebar = () => {
  return (
    <aside>
      <div sx={sideBarStyles}>

        <div className='dark'>
          <h4><span>Apply online for a loan today!</span></h4>
          <p>Fast and easy online application.</p>
          <a href='https://goldwaterbank.mymortgage-online.com/?loanapp&siteid=4884527613&lar=wstar_jvercellin&workFlowId=29714'
            target='_blank' rel='noopener noreferrer'
            sx={{
              variant: 'buttons.simpleAccent'
            }}>Apply Now</a>

        </div>

        <div className='accent'>
          <h4><span>Mortgage Calculator</span></h4>
          <p>Find out what you can expect to pay for your home loan.</p>
          <Link to='/mortgage-calculator/'
            target='_blank' rel='noopener noreferrer'
            sx={{
              variant: 'buttons.simpleAccent'
            }}>Calculate Now</Link>
        </div>

        <div className='white'>
          <h4><span>What's My Home Worth?</span></h4>
          <p>Get a ballpark estimate for your home with our online calculator.</p>
          <Link to='/house-estimator/'
            target='_blank' rel='noopener noreferrer'
            sx={{
              variant: 'buttons.simpleAccent'
            }}>Calculate Now</Link>
        </div>

        <div className='social'>
          <ul sx={{
            variant: 'lists.reset',
            display: 'flex',
            justifyContent: 'center',
            li: {
              px: 2
            },
            a: {
              fontSize: 5,
              '&:hover': {
                color: 'primary'
              },
              color: 'black'
            }
          }}>
            <SocialLinks />
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

const sideBarStyles = {
  px: [2, null, null, 4],
  pr: [2, null, null, 0],
  h4: {
    mt: 0,
    mb: 3,
    fontSize: 2,
    lineHeight: 1,
    span: {
      display: 'block'
    },
    '&::after': {
      content: '""',
      clear: 'both',
      width: '2.5em',
      display: 'inline-block',
      margin: '.8em 0 0',
      borderBottom: '2px solid #e49f37'
    }
  },
  '>div': {
    borderRadius: 'default',
    textAlign: 'center',
    p: 4,
    '&.social': {
      px: 0
    },
    mb: 3,
    '>a': {
      mt: 2
    }
  },
  '.dark': {
    bg: 'black',
    color: 'white',
    h4: {
      color: 'primary'
    }
  },
  '.accent': {
    bg: 'primary',
    color: 'white',
    h4: {
      color: 'black',
      '&::after': {
        borderColor: 'white'
      }
    },
    a: {
      bg: 'white',
      color: 'black'
    }
  },
  '.white': {
    border: '1px solid gray'
  }
}
