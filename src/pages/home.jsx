import React from 'react';
import styled from 'styled-components';

// Impor aset dari folder assets
import photoProfile from '../assets/photo-profile.png';
import portfolioText from '../assets/portofolio-text.png';
import githubIcon from '../assets/Github.svg';
import instagramIcon from '../assets/Logo Instagram.svg';
import linkedinIcon from '../assets/Linkedin.svg';

const HomeSectionContainer = styled.div`
  /* Wrapper ini diperlukan agar padding tidak mengganggu min-height */
  padding-top: 30px; /* Sesuaikan dengan tinggi header Anda */
  box-sizing: border-box;
`;

const MainContent = styled.main`
  padding: 0 50px;
  max-width: 1280px; 
  margin: 0 auto; 
`;

const DecorativeCircle = styled.div`
  position: absolute;
  top: -900px;
  right: -150px;
  width: 1000px;
  height: 1000px;
  background-color: #82D842;
  border-radius: 50%;
  filter: blur(1000px);
  opacity: 0.35;
  z-index: 0;
`;

const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center; /* Mengubah dari flex-end agar lebih fleksibel */
  justify-content: flex-start;
  min-height: 100vh; /* Mengambil tinggi penuh layar */
  box-sizing: border-box;
  text-align: left;
`;

const PortfolioTextImage = styled.img`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 100%;
  max-width: 800px;
`;

const ProfileImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: auto;
  height: 100%;
  max-height: 900px;
  object-fit: contain;

  @media (max-width: 767px) {
    max-height: 90%; /* Batas keras tinggi gambar */
  }
`;

const HeroTextContainer = styled.div`
  position: absolute;
  top: 60%;
  z-index: 4;
`;

// FIX: Menggunakan Transition untuk animasi
const HeroTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 0px 0px 0px 0px;
  
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInSlideUp 0.8s ease-out forwards;
  animation-delay: 0.2s;
  
  @keyframes fadeInSlideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 768px) {
    font-size: 38.4px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 15px;
  font-weight: 275;
  margin: 0px 0px 5px 0px;

  opacity: 0;
  transform: translateY(20px);
  animation: fadeInSlideUp 0.8s ease-out forwards;
  animation-delay: 0.6s;

  @keyframes fadeInSlideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px 0px 0px 0px;
  gap: 24px;

  opacity: 0;
  transform: translateY(20px);
  animation: fadeInSlideUp 0.8s ease-out forwards;
  animation-delay: 0.8s;

  @keyframes fadeInSlideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const IconLink = styled.a`
  display: inline-block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

// Komponen Home
function Home() {
    return (
        <HomeSectionContainer id="home">
            <MainContent>
                <HeroSection>
                    <DecorativeCircle />
                    <PortfolioTextImage src={portfolioText} alt="Portfolio Text" />
                    <ProfileImage src={photoProfile} alt="Nadiya Azka" />
                    
                    <HeroTextContainer>
                        <HeroTitle>NADIYA AZKA</HeroTitle>
                        <HeroSubtitle>Bachelor of Engineering </HeroSubtitle>
                        <HeroSubtitle>in Biomedical Engineering </HeroSubtitle>
                        <SocialIcons>
                            <IconLink href="https://github.com/Azka79" target="_blank" rel="noopener noreferrer">
                                <img src={githubIcon} alt="Github" />
                            </IconLink>
                            <IconLink href="https://www.instagram.com/daz_azka/" target="_blank" rel="noopener noreferrer">
                                <img src={instagramIcon} alt="Instagram" />
                            </IconLink>
                            <IconLink href="https://www.linkedin.com/in/nadiyaazkaa/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedinIcon} alt="LinkedIn" />
                            </IconLink>
                        </SocialIcons>
                    </HeroTextContainer>
                </HeroSection>
            </MainContent>
        </HomeSectionContainer>
    );
}

export default Home;

