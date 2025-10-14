import React from 'react';
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';

// Impor ikon sosial media
import githubIcon from '../assets/Github.svg';
import instagramIcon from '../assets/Logo Instagram.svg';
import linkedinIcon from '../assets/Linkedin.svg';

// --- Styled Components ---

const ContactSection = styled.section`
  width: 100%;
  padding: 100px 50px;
  background-color: #070707; // Sedikit lebih terang dari hitam murni
  box-sizing: border-box;
  color: #FFFFFF;
`;

const ContentWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1.5fr; // Kolom kanan sedikit lebih lebar
  }
`;

const Column = styled.div``;

const AnimatedItem = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;
  transition-delay: ${({ delay }) => delay || '0s'};

  ${({ isInView }) => isInView && `
    opacity: 1;
    transform: translateY(0);
  `}
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  
  span {
    color: #82D842;
  }
`;

// --- Info Kontak ---
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const IconLink = styled.a`
  display: inline-block;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

// --- Formulir ---
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 767px) {
    max-width: 85%; 
  }
`;

const Input = styled.input`
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  color: #FFFFFF;
  font-family: 'Poppins';
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #82D842;
  }
`;

const TextArea = styled.textarea`
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  color: #FFFFFF;
  font-family: 'Poppins';
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #82D842;
  }
`;

const SubmitButton = styled.button`
  background-color: #82D842;
  color: #070707;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-family: 'Poppins';
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-start;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(130, 216, 66, 0.3);
  }

  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.p`
  color: #82D842;
  font-weight: bold;
`;

// --- Komponen Utama Contact ---
function ContactForm() {
    // GANTI "YOUR_FORM_ID" DENGAN ID DARI FORMSPREE ANDA
    const [state, handleSubmit] = useForm("xkgqknpk");

    if (state.succeeded) {
        return <SuccessMessage>Thank you, your message has been sent!</SuccessMessage>;
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                required
            />
            <Input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <Input
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
                required
            />
            <TextArea
                id="message"
                name="message"
                placeholder="Your Message"
                required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <SubmitButton type="submit" disabled={state.submitting}>
                Send Message
            </SubmitButton>
        </Form>
    );
}


function Contact() {
    // Logika untuk animasi on-scroll, mirip seperti komponen lain
    const [isInView, setIsInView] = React.useState(false);
    const contactRef = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target);
                }
            }, { threshold: 0.1 }
        );
        const currentRef = contactRef.current;
        if (currentRef) observer.observe(currentRef);
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <ContactSection id="contact" ref={contactRef}>
            <ContentWrapper>
                {/* Kolom Kiri */}
                <Column>
                    <AnimatedItem isInView={isInView} delay="0.1s">
                        <SectionTitle>Contact <span>Me</span></SectionTitle>
                        <ContactInfo>
                            <InfoItem>
                                📧 nadiyaazka5897@gmail.com {/* GANTI DENGAN EMAIL ANDA */}
                            </InfoItem>
                            <InfoItem>
                                📍 Kebumen, Indonesia
                            </InfoItem>
                        </ContactInfo>
                        <SocialLinks>
                            <IconLink href="https://github.com/Azka79"><img src={githubIcon} alt="Github" /></IconLink>
                            <IconLink href="https://www.instagram.com/daz_azka/"><img src={instagramIcon} alt="Instagram" /></IconLink>
                            <IconLink href="https://www.linkedin.com/in/nadiyaazkaa/"><img src={linkedinIcon} alt="LinkedIn" /></IconLink>
                        </SocialLinks>
                    </AnimatedItem>
                </Column>

                {/* Kolom Kanan */}
                <Column>
                     <AnimatedItem isInView={isInView} delay="0.3s">
                        <ContactForm />
                     </AnimatedItem>
                </Column>
            </ContentWrapper>
        </ContactSection>
    );
}

export default Contact;
