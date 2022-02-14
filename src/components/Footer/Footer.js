import React from 'react';
// import { Button } from '../../globalStyles';
import {SiGmail} from 'react-icons/si';
import {
  // FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  // FaLinkedin,
  FaTelegram,
  FaGithub
} from 'react-icons/fa';


import {
  FooterContainer,
  // FooterSubscription,
  // FooterSubText,
  // FooterSubHeading,
  // Form,
  // FormInput,
  // FooterLinksContainer,
  // FooterLinksWrapper,
  // FooterLinkItems,
  // FooterLinkTitle,
  // FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      {/* <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription> */}
      {/* <FooterLinksContainer> */}
        {/* <FooterLinksWrapper> */}

          {/* <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinkItems> */}

          {/* <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>
            <FooterLink to='/'>Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper> */}
      {/* </FooterLinksContainer> */}
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            MetaverseDAO
          </SocialLogo>
          <WebsiteRights>MetaverseDAO © 2022</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href={
                'https://github.com/HeroMetaverse'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Github'
            >
              <FaGithub />
            </SocialIconLink>            

            <SocialIconLink
              href={
                'https://t.me/HeroMetaverseN01'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </SocialIconLink>            
            {/* Telegram */}
            <SocialIconLink
              href={
                'https://t.me/HeroMetaverseN01'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Telegram'
            >
              <FaTelegram />
            </SocialIconLink>
            {/*Youtube  */}
            <SocialIconLink
              href={
                'https://www.youtube.com/channel/UCOM7Uxw7EguF3z_L4APdtaA'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            {/* Twitter */}
            <SocialIconLink
              href={
                'https://twitter.com/herometaverse'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </SocialIconLink>

            <SocialIconLink
              href={
                'mailto:contact@metaversedao.cx'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Twitter'
            >
              <SiGmail />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
