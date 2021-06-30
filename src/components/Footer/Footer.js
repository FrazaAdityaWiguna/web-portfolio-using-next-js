import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+62-895-4119-0400-1'>+62-895-4119-0400-1</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:adityafraja12@gmail.com'>adityafraja12@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer>
          <SocialContainer>
            <Slogan>Innovating on project at a time</Slogan>
          </SocialContainer>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/FrazaAdityaWiguna/'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://id.linkedin.com/in/fraza-aditya-wiguna'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.instagram.com/fraza_09/'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
