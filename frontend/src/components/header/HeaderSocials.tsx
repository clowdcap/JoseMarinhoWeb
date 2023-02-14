import {AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://github.com/clowdcap" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
        <a href="https://www.facebook.com/jose.marinho0" target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a>
        <a href="https://www.linkedin.com/in/jose-marinho-dev/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
    </div>
  )
}

export default HeaderSocials