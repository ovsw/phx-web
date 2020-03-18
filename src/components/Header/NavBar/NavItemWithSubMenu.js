/** @jsx jsx */
import React, {useState} from 'react' // eslint-disable-line
import {jsx, Styled, Container} from 'theme-ui'
import {Link} from 'gatsby'

const NavItemWithSubMenu = ({title, slug, children}) => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState

  return (
    <>
      <Link to={slug}>{title}</Link>
      <ul className='subMenuWrapperUl'>
        {children.map(({title, slug}) => (
          <li key={slug} >
            <Link to={slug}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default NavItemWithSubMenu
