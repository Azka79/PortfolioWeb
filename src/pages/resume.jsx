import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// --- Styled Components ---

const ResumeSection = styled.section`
  width: 100%;
  padding: 100px 50px; /* Padding atas & bawah untuk spasi, kiri & kanan untuk margin */
  background-color: #070707;
  box-sizing: border-box;
  color: #FFFFFF;
`;

const ContentWrapper = styled.div`
  max-width: 1280px; /* Sesuai dengan lebar kanvas yang kita sepakati */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr; /* Default 1 kolom untuk mobile */
  gap: 4rem;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr; /* 2 kolom untuk desktop */
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

// Komponen untuk item yang akan dianimasikan
const AnimatedItem = styled.div`
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 2s ease-out, transform 2s ease-out;
  transition-delay: ${({ delay }) => delay || '0s'};

  ${({ isInView }) => isInView && `
    opacity: 1;
    transform: translateY(0);
  `}
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #FFFFFF;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 4px solid #82D842;
  display: inline-block;
`;

// --- Timeline Components (Static Line) ---

const TimelineContainer = styled.div`
  position: relative;
  padding-left: 30px; /* Ruang untuk garis dan titik */

  /* Garis Vertikal Statis */
  &::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 10px;
    bottom: 10px;
    width: 4px;
    background-color: rgba(255, 255, 255, 1);
  }
`;

const TimelineItem = styled.div`
  margin-bottom: 2rem;
  position: relative;

  /* Titik pada Timeline */
  &::before {
    content: '';
    position: absolute;
    left: -30px;
    top: 5px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #070707;
    border: 4px solid #82D842;
  }
`;

const TimelineTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0px 0px 0px 10px;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const TimelineTitle2 = styled.h3`
  font-size: 20px;
  font-weight: 400;
  margin: 0px 0px 0px 10px;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const TimelineSubtitle = styled.p`
  font-size: 15px;
  font-weight: 175;
  color: rgba(255, 255, 255, 1);
  margin: 0px 0px 0px 10px;
`;

const TimelineText = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin: 0px 0px 5px 10px;
  line-height: 1.8;
`;

// --- Skills Components ---

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SkillCategory = styled.div``;

const SkillTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  color: #82D842;
  margin: 0 0 0.5rem 0;
`;

const SkillList = styled.p`
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
`;

// --- Download Button ---

const DownloadButton = styled.a`
  display: inline-block;
  background-color: #82D842;
  color: #070707;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  margin-top: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(130, 216, 66, 0.3);
  }
`;


// --- Komponen Utama Resume ---

function Resume() {
    const [isInView, setIsInView] = useState(false);
    const resumeRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const currentRef = resumeRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <ResumeSection id="resume" ref={resumeRef}>
            <ContentWrapper>
                {/* --- Kolom Kiri --- */}
                <Column>
                    <AnimatedItem isInView={isInView} delay="0.1s">
                        <SectionTitle>EDUCATION</SectionTitle>
                        <TimelineContainer>
                            <TimelineItem>
                                <TimelineTitle>Institut Teknologi Sepuluh Nopember (ITS)</TimelineTitle>
                                <TimelineSubtitle>Surabaya, Indonesia | Bachelor of Engineering - Biomedical Engineering, GPA 3.75/4.00</TimelineSubtitle>
                                <TimelineText><b>Focus:</b> Embedded Systems, IoT Devices, Signal Processing, Machine Learning Integration, Non-Contact Sensing</TimelineText>
                                <TimelineText><b>Achievement:</b> Gold Medal – GEMASTIK XVII 2024 (ICT Scientific Paper)</TimelineText>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineTitle>Shibaura Institute of Technology</TimelineTitle>
                                <TimelineSubtitle>Tokyo, Japan | International Course – Introduction to Embedded System, GPA S/S</TimelineSubtitle>
                                <TimelineText><b>Focus:</b> Introduction to C/C++ programming and Arduino-based real-time data acquisition</TimelineText>
                            </TimelineItem>
                        </TimelineContainer>
                    </AnimatedItem>

                    <AnimatedItem isInView={isInView} delay="0.3s">
                        <SectionTitle>WORK EXPERIENCE</SectionTitle>
                        <TimelineContainer>
                            <TimelineItem>
                                <TimelineTitle2>2 yrs as Student Research Assistant (ITS)</TimelineTitle2>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineTitle2>1 yr as Biomedical Signal Processing Laboratory Coordinator (ITS)</TimelineTitle2>
                            </TimelineItem>
                             <TimelineItem>
                                <TimelineTitle2>2 mo as Quality Control Intern (PT Tesena Inovindo)</TimelineTitle2>
                            </TimelineItem>
                        </TimelineContainer>
                    </AnimatedItem>
                </Column>

                {/* --- Kolom Kanan --- */}
                <Column>
                     <AnimatedItem isInView={isInView} delay="0.5s">
                        <SectionTitle>SKILLS</SectionTitle>
                        <SkillsContainer>
                            <SkillCategory>
                                <SkillTitle>Programming :</SkillTitle>
                                <SkillList>C/C++, Python, Delphi, HTML, React js</SkillList>
                            </SkillCategory>
                             <SkillCategory>
                                <SkillTitle>Embedded & IoT :</SkillTitle>
                                <SkillList>STM32 (CubeIDE), ESP32, ESP8266, Arduino, Raspberry Pi</SkillList>
                            </SkillCategory>
                            <SkillCategory>
                                <SkillTitle>Protocols :</SkillTitle>
                                <SkillList>UART, PWM, ADC, I2C, Bluetooth, Wi-Fi, LoRa, MQTT</SkillList>
                            </SkillCategory>
                             <SkillCategory>
                                <SkillTitle>Hardware & PCB :</SkillTitle>
                                <SkillList>Eagle, Fusion 360, DAQ Systems, Functional Testing, Calibration, FMEA, QC Processes</SkillList>
                            </SkillCategory>
                             <SkillCategory>
                                <SkillTitle>Software & Tools :</SkillTitle>
                                <SkillList>Blender (3D Design), LabVIEW, MATLAB</SkillList>
                            </SkillCategory>
                             <SkillCategory>
                                <SkillTitle>Other Skills :</SkillTitle>
                                <SkillList>Troubleshooting, Root Cause Analysis, Problem-Solving, Cross-Functional Teamwork</SkillList>
                            </SkillCategory>
                        </SkillsContainer>
                    </AnimatedItem>
                    
                    <AnimatedItem isInView={isInView} delay="0.7s">
                         {/* Ganti "#" dengan link Google Drive Anda */}
                        <DownloadButton href="https://drive.google.com/file/d/1DbQW7J8HNFFP0sMNkcruB6SAAA8YHYcO/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            Download Full CV
                        </DownloadButton>
                    </AnimatedItem>
                </Column>
            </ContentWrapper>
        </ResumeSection>
    );
}

export default Resume;

