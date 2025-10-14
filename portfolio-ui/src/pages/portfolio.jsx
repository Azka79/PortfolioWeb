import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

// --- Data Proyek (Diperbarui dengan array 'images' dan 'longDescription') ---
const projectData = [
  {
    title: "RVIVE (Radar-Based Vital Sign Monitoring System)",
    type: "Individual Project",
    year: "2025",
    tags: ["24GHz Radar", "STM32", "Bi-LSTM", "Vital Sign Prediction"],
    description: "Developed a 24GHz radar device for non-contact respiration and heartbeat monitoring...",
    longDescription: "This project focused on creating a non-invasive vital sign monitoring system using a 24GHz radar sensor. The system leverages the Doppler effect to detect minute chest wall movements caused by breathing and heartbeats. Raw data was processed using advanced signal processing techniques, and a Bi-directional Long Short-Term Memory (Bi-LSTM) neural network was trained to predict vital signs with high accuracy. The device was built on an STM32 microcontroller for real-time processing.",
    images: [
      "https://media.licdn.com/dms/image/v2/D5622AQH1CZKHNyg2Og/feedshare-shrink_1280/B56ZiCluOpHUAs-/0/1754537585054?e=1763596800&v=beta&t=KgwnIjeb9-Lvxh_BCohy46qgGEboJKy6NeucrD_rNfo",
      "https://placehold.co/800x600/070707/82D842?text=Diagram",
      "https://media.licdn.com/dms/image/v2/D5622AQGTRq47Sx-Adw/feedshare-shrink_1280/B56ZiCluP7G4Ak-/0/1754537585599?e=1763596800&v=beta&t=UMeTU_VbrcGEOrGCq_XAHbyAgpQqTB5_sRPaTOahTuw",
    ],
  },
  {
    title: "2WD Motion-Controlled Vehicle",
    type: "Individual Project",
    year: "2025",
    tags: ["MPU6050", "nRF24L01", "Wireless Control"],
    description: "Designed and built a two-wheel drive vehicle using MPU6050 for motion sensing...",
    longDescription: "A hands-on project to build a gesture-controlled vehicle. An MPU6050 accelerometer/gyroscope captures hand movements, which are transmitted wirelessly via nRF24L01 modules to an Arduino-based receiver on the vehicle. The vehicle's motors are controlled based on the received orientation data, allowing for intuitive, real-time navigation.",
    images: [
      "https://placehold.co/800x600/82D842/070707?text=2WD+Vehicle",
      "https://placehold.co/800x600/070707/82D842?text=Controller",
    ],
  },
  {
    title: "VISMOIR (Camera-Based Vital Sign Monitoring System)",
    type: "Team Project",
    year: "2024",
    tags: ["Thermal Camera", "Non-Contact", "Adaptive Filtering"],
    description: "Designed and developed a thermal-camera-based vital sign monitor...",
    longDescription: "VISMOIR is a non-contact system that utilizes a thermal camera to monitor vital signs. By tracking subtle temperature changes around the nasal area, the system can accurately determine the respiratory rate. Advanced adaptive filtering algorithms were implemented to isolate the heartbeat signal from noise, providing a comprehensive, remote monitoring solution.",
     images: [
      "https://media.licdn.com/dms/image/v2/D5622AQFD3sfdLcj3jA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727402377517?e=1763596800&v=beta&t=4JP7S2TwUMU1KVfUReLnacXrTQzqawf7WmivIlH5lCg",
      "https://media.licdn.com/dms/image/v2/D5622AQGO6hVJa_SjuQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1729218565905?e=1763596800&v=beta&t=p9-8eJFdchhFXaJFdN_wA_6gb0yI4K4ZU0hBM9k4XlE",
    ],
  },
   {
    title: "PulsePals (Stress Monitoring System Using ECG)",
    type: "Team Project",
    year: "2023",
    tags: ["ECG", "PSU ±12V", "Arduino", "Fuzzy Logic"],
    description: "Developed an ECG acquisition board with PSU ±12V, amplifier, and filter...",
    longDescription: "This project involved the complete design and fabrication of an ECG acquisition board. The board includes a stable ±12V power supply unit, an instrumentation amplifier for signal amplification, and active filters to remove noise. The processed ECG signal is read by an Arduino's ADC, and a fuzzy logic algorithm is used to analyze heart rate variability for stress level detection.",
    images: [
      "https://media.licdn.com/dms/image/v2/D562DAQFyFXaMtG9Tnw/profile-treasury-image-shrink_800_800/B56ZnkQeNhJoAY-/0/1760471151626?e=1761076800&v=beta&t=6iqo2ZP0u_LFh3Zw6JyuxV-_ZOz2_FhiSzrU70agt7w",
    ],
  },
   {
    title: "Wireless Digital PCG System Based on ESP32",
    type: "Individual Project",
    year: "2023",
    tags: ["ESP32", "MQTT", "Heart Sound", "CWT"],
    description: "Developed a wireless digital PCG system using ESP32 with MQTT transmission...",
    longDescription: "A wireless phonocardiogram (PCG) system was developed using an ESP32 for data acquisition and Wi-Fi transmission. The system captures heart sounds and transmits the data to a server via the MQTT protocol. On the server-side, a Continuous Wavelet Transform (CWT) algorithm is applied to accurately segment the S1 and S2 heart sounds, which is crucial for cardiac health analysis.",
    images: [
      "https://placehold.co/800x600/82D842/070707?text=PCG+System",
    ],
  },
];


// --- Keyframes for Animations ---
const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const scaleIn = keyframes`from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; }`;

// --- Styled Components ---

const PortfolioSection = styled.section`
  width: 100%;
  padding: 100px 0;
  background-color: #070707;
  box-sizing: border-box;
  color: #FFFFFF;
  overflow: hidden;
`;

const AnimatedItem = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${({ delay }) => delay || '0s'};
  ${({ isInView }) => isInView && `
    opacity: 1;
    transform: translateY(0);
  `}
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  span { color: #82D842; }
`;

const SliderContainer = styled.div`
  position: relative;
`;

const ProjectSlider = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1rem 50px;
  overflow-x: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

const ProjectCard = styled.div`
  flex: 0 0 300px;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover { transform: translateY(-10px); }
`;

const CardThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(to top, rgba(7, 7, 7, 1) 20%, rgba(7, 7, 7, 0));
  z-index: 1;
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1.5rem;
  width: 100%;
  z-index: 2;
  box-sizing: border-box;
`;

const ProjectType = styled.p`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0.25rem 0 0.5rem 0;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: rgba(130, 216, 66, 0.2);
  color: #82D842;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: bold;
`;

const HoverContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(7, 7, 7, 0.8);
  backdrop-filter: blur(4px);
  z-index: 3;
  padding: 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  ${ProjectCard}:hover & { opacity: 1; }
`;

const HoverDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const HoverLink = styled.span`
  font-weight: bold;
  color: #82D842;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: background-color 0.3s ease;
  &:hover { background-color: rgba(255, 255, 255, 0.2); }
  ${({ direction }) => direction === 'left' ? 'left: 15px;' : 'right: 15px;'}
`;

// --- Modal Styled Components ---
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease;
`;

const ModalContainer = styled.div`
  background-color: #1a1a1a;
  border-radius: 12px;
  width: 90%;
  max-width: 1200px;
  height: 90vh;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${scaleIn} 0.3s ease;
`;

const ModalHeader = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #333;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  line-height: 1;
`;

const ModalBody = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  overflow-y: auto;

  @media (min-width: 768px) { 
    grid-template-columns: 2fr 1fr; 
    overflow-y: auto;
  }

  /* FIX: Penyesuaian untuk mobile */
  @media (max-width: 767px) {
    display: block; /* Mengubah dari grid ke block */
    overflow-y: auto; /* Memungkinkan seluruh modal body di-scroll */
  }
`;

const ImageSlider = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #070707;

  /* FIX: Membatasi tinggi slider di mobile */
  @media (max-width: 767px) {
    height: 50vh; /* Tinggi adalah 50% dari tinggi viewport */
    max-height: 450px; /* Batas keras tinggi gambar */
  }
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  /* FIX: Mengubah dari contain ke cover untuk 'crop' gambar yang terlalu panjang */
  object-fit: cover;
`;

const SliderNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.4);
  border: none;
  color: #fff;
  font-size: 2rem;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 10;
  ${({ direction }) => direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
  &:hover { background-color: rgba(0, 0, 0, 0.6); }
`;

const ProjectDetails = styled.div`
  padding: 1.5rem;
  overflow-y: auto;
`;

const DetailText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
`;

// --- Project Detail Modal Component ---
function ProjectDetailModal({ project, closeModal }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
    };
    
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [project]);

    return (
        <ModalBackdrop onClick={closeModal}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>{project.title}</ModalTitle>
                    <CloseButton onClick={closeModal}>&times;</CloseButton>
                </ModalHeader>
                <ModalBody>
                    <ImageSlider>
                        {project.images.length > 1 && <SliderNavButton direction="left" onClick={prevImage}>‹</SliderNavButton>}
                        <SliderImage src={project.images[currentImageIndex]} alt={`${project.title} - view ${currentImageIndex + 1}`} />
                        {project.images.length > 1 && <SliderNavButton direction="right" onClick={nextImage}>›</SliderNavButton>}
                    </ImageSlider>
                    <ProjectDetails>
                        <DetailText>{project.longDescription}</DetailText>
                    </ProjectDetails>
                </ModalBody>
            </ModalContainer>
        </ModalBackdrop>
    );
}

// --- Komponen Utama Portfolio ---
function Portfolio() {
    const sliderRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    const portfolioRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target);
                }
            }, { threshold: 0.1 }
        );
        const currentRef = portfolioRef.current;
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, []);
    
    const scroll = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = direction === 'left' ? -324 : 324;
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };
    
    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <PortfolioSection id="portfolio" ref={portfolioRef}>
                <AnimatedItem isInView={isInView} delay="0.1s">
                    <SectionTitle>
                        Explore My <span>Projects</span>
                    </SectionTitle>
                </AnimatedItem>

                <AnimatedItem isInView={isInView} delay="0.3s">
                    <SliderContainer>
                        <NavButton direction="left" onClick={() => scroll('left')}>‹</NavButton>
                        <ProjectSlider ref={sliderRef}>
                            {projectData.map((project, index) => (
                                <ProjectCard key={index} onClick={() => openModal(project)}>
                                    <CardThumbnail src={project.images[0]} alt={project.title} />
                                    <CardOverlay />
                                    <CardContent>
                                        <ProjectType>{project.type} - {project.year}</ProjectType>
                                        <ProjectTitle>{project.title}</ProjectTitle>
                                        <TagContainer>
                                            {project.tags.slice(0, 3).map(tag => <Tag key={tag}>{tag}</Tag>)}
                                        </TagContainer>
                                    </CardContent>
                                    <HoverContent>
                                        <HoverDescription>{project.description}</HoverDescription>
                                        <HoverLink>View Details</HoverLink>
                                    </HoverContent>
                                </ProjectCard>
                            ))}
                        </ProjectSlider>
                        <NavButton direction="right" onClick={() => scroll('right')}>›</NavButton>
                    </SliderContainer>
                </AnimatedItem>
            </PortfolioSection>
            
            {selectedProject && (
                <ProjectDetailModal project={selectedProject} closeModal={closeModal} />
            )}
        </>
    );
}

export default Portfolio;

