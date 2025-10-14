import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// Impor gambar background dari folder assets
import backgroundImage from '../assets/dsp-training-kit.png';

const AboutSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* Menambahkan padding atas untuk header dan bawah untuk spasi */
  padding: 190px 0px; 
  box-sizing: border-box; /* Memastikan padding termasuk dalam perhitungan tinggi */
  
  /* Styling untuk background image */
  background: #070707; /* Warna latar belakang gelap */
  background-image: url(${backgroundImage});
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
  position: relative; /* Diperlukan untuk overlay */
`;

const ContentContainer = styled.div`
  max-width: 700px; /* Batas lebar konten agar tidak terlalu melebar di layar besar */
  width: 100%;
  padding: 0 50px;
  text-align: left;
  z-index: 2; /* Memastikan konten berada di atas overlay */
  color: #FFFFFF; /* Warna teks utama */
  display: flex;
  flex-direction: column;
  gap: 10px; /* Jarak antara paragraf */

  @media (min-width: 768px) {
    padding: 0 150px;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  
  /* Transisi ditambahkan agar perubahan opacity tidak patah-patah */
  transition: opacity 0.5s linear, transform 0.5s linear;
  transition-delay: 0s;
  
  /* Style diatur langsung oleh props, bukan lagi state biner */
  opacity: ${({ scrollprogress }) => scrollprogress};
  transform: translateY(${({ scrollprogress }) => (1 - scrollprogress) * 30}px);

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Paragraph2 = styled.p`
  font-size: 15px;
  font-weight: 200;
  line-height: 1.4;
  margin: 0;

  transition: opacity 0.5s linear, transform 0.5s linear;
  transition-delay: 0s;

  opacity: ${({ scrollprogress }) => scrollprogress};
  transform: translateY(${({ scrollprogress }) => (1 - scrollprogress) * 30}px);

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const Highlight = styled.span`
  color: #82D842; /* Warna hijau sesuai palet */
  font-weight: bold;
`;

// Komponen About.jsx
function About() {
    // State untuk menyimpan progres scroll (nilai antara 0 dan 1)
    const [scrollProgress, setScrollProgress] = useState(0);
    const aboutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const aboutElement = aboutRef.current;
            if (!aboutElement) return;

            const { top } = aboutElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Menghitung seberapa jauh elemen sudah masuk ke layar
            // Animasi dimulai saat bagian atas elemen 80% dari tinggi layar
            // dan selesai saat mencapai 50%
            const start = windowHeight * 0.6;
            const end = windowHeight * 0.1;
            
            const progress = 1 - (top - end) / (start - end);
            
            // Memastikan nilai progress selalu antara 0 dan 1
            const clampedProgress = Math.max(0, Math.min(1, progress));
            setScrollProgress(clampedProgress);
        };

        // Menambahkan event listener saat komponen dimuat
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Panggil sekali saat load untuk inisialisasi

        // Membersihkan event listener saat komponen dibongkar
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AboutSection id="about" ref={aboutRef}>
            <ContentContainer>
                {/* Mengirim prop `scrollprogress` ke styled component */}
                <Paragraph scrollprogress={scrollProgress}>
                    I’m a <Highlight>Biomedical Engineering graduate</Highlight> from Institut Teknologi Sepuluh Nopember (ITS) with a strong background in <Highlight>embedded systems, IoT, and biomedical device development.</Highlight>
                </Paragraph>
                <Paragraph2 scrollprogress={scrollProgress}>
                    My experience spans from designing radar-based vital sign monitoring systems to building and testing portable medical hardware. I’ve worked with Atmel, STM32, ESP32, NI DAQ, and various sensors, integrating them into reliable, real-time data acquisition systems. I enjoy combining hardware design with signal processing and machine learning to solve real-world problems in health technology.
                </Paragraph2>
            </ContentContainer>
        </AboutSection>
    );
}

export default About;

