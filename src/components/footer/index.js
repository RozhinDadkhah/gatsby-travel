import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FooterContainer, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcon, WebsiteRight, SocialIcons, SocialLink } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon />
                        EXPLOR
                    </SocialLogo>
                    <WebsiteRight>EXPLOR {new Date().getFullYear()}</WebsiteRight>
                    <SocialIcons>
                        <SocialLink href='/' target='_blank' aria-label='Facebook'><FaFacebook /></SocialLink>
                        <SocialLink href='/' target='_blank' aria-label='Instagram'><FaInstagram /></SocialLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer