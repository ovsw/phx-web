import React from 'react'
import {FaTwitterSquare, FaLinkedinIn, FaFacebookSquare, FaInstagram} from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <>
      <li><a href='https://twitter.com/phxhomeloan'rel='noopener noreferrer' target='_blank' title='Twitter'><FaTwitterSquare /></a></li>
      <li><a href='https://www.linkedin.com/in/jimmy-vercellino-29060930/' rel='noopener noreferrer' target='_blank' title='LinkedIn'><FaLinkedinIn /></a></li>
      <li><a href='http://www.facebook.com/TheVercellinoTeam'rel='noopener noreferrer' target='_blank' title='Facebok'><FaFacebookSquare /></a></li>
      <li><a href='https://www.instagram.com/jimmyvercellino_/' rel='noopener noreferrer' target='_blank' title='Instagram'>{<FaInstagram />}</a></li>
    </>
  )
}

export default SocialLinks
