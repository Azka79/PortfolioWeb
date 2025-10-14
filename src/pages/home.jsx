import React from 'react';
import styled from 'styled-components';

// Impor aset dari folder assets
import photoProfile from '../assets/photo-profile.png';
import portfolioText from '../assets/portofolio-text.png';
import githubIcon from '../assets/Github.svg';
import instagramIcon from '../assets/Logo Instagram.svg';
import linkedinIcon from '../assets/Linkedin.svg';

const HomeSectionContainer = styled.div`
  padding-top: 30px; 
  box-sizing: border-box;
`;

const MainContent = styled.main`
  padding: 0 50px;
  max-width: 1280px; 
  margin: 0 auto; 

  /* FIX: Kurangi padding di layar kecil */
  @media (max-width: 767px) {
    padding: 0 20px;
  }
`;

const DecorativeCircle = styled.div`
  position: absolute;
  top: -120%;
  right: -15%;
  width: 1000px;
  height: 1000px;
  background-color: #82D842;
  border-radius: 50%;
  filter: blur(1000px);
  opacity: 0.35;
  z-index: 0;

  /* FIX: Sembunyikan lingkaran besar di mobile agar tidak menyebabkan overflow */
  @media (max-width: 767px) {
    display: none;
  }
`;

const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
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

  /* FIX: Kecilkan dan atur ulang posisi gambar di mobile */
  @media (max-width: 767px) {
    max-width: 90%; /* Gunakan persentase agar fleksibel */
    top: 20%;
  }
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

  /* FIX: Ubah object-fit menjadi cover dan sesuaikan ukuran untuk mobile */
   @media (max-width: 767px) {
    object-fit: cover; /* Ini akan 'meng-crop' gambar */
    width: 100%;      /* Penuhi lebar kontainer */
    height: 50%;      /* Batasi tingginya agar tidak menutupi semua */
    max-width: none;  /* Hapus batasan max-width sebelumnya */
    top: 35%;         /* Sesuaikan kembali posisi vertikalnya */
  }
`;

const HeroTextContainer = styled.div`
  position: absolute;
  top: 60%;
  z-index: 4;

  /* FIX: Sesuaikan posisi teks di mobile */
  @media (max-width: 767px) {
    top: auto; /* Hapus posisi top absolut */
    bottom: 17%; /* Posisikan dari bawah */
    width: 100%;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInSlideUp 0.8s ease-out forwards 0.2s;
  
  @keyframes fadeInSlideUp {
    to { opacity: 1; transform: translateY(0); }
  }

  @media (min-width: 768px) {
    font-size: 38.4px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  font-weight: 275;
  margin: 0px 0px 5px 0px;

  opacity: 0;
  transform: translateY(20px);
  animation: fadeInSlideUp 0.8s ease-out forwards 0.6s;

  @keyframes fadeInSlideUp {
    to { opacity: 1; transform: translateY(0); }
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
  animation: fadeInSlideUp 0.8s ease-out forwards 0.8s;

  @keyframes fadeInSlideUp {
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 767px) {
    justify-content: center;
    margin: 30px 0px 0px 0px;
  }
`;

const IconLink = styled.a`
  display: inline-block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

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
                            <IconLink href="#" target="_blank" rel="noopener noreferrer">
                                <img src={instagramIcon} alt="Instagram" />
                            </IconLink>
                            <IconLink href="#" target="_blank" rel="noopener noreferrer">
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

