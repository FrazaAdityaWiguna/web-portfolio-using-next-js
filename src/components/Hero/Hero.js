import React from "react";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi! My name is Fraza Aditya Wiguna. I am a Web Developer, and I'm very paddionate and dedicated to my work. With 1 years experience as a mid-level Web Developer, I have acquired the skills and knoledge necessary to make your project
        a success. I enjoy every step of the design process, from discission and collaboration.
      </SectionText>
      <Button onClick={() => (window.location = "https://fraza-portfolio.web.app/#about")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
