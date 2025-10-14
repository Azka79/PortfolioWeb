import React, { useState } from 'react';
import styled from 'styled-components';

// Impor semua aset yang dibutuhkan
import menuIconSvg from '/src/assets/Menu Alt 05.svg';
import azkaLogo from '/src/assets/azka-logo.svg';
import azkaFilledLogo from '/src/assets/azka-filled.svg';

// Styled Components untuk Header
const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 50;
  
  backdrop-filter: blur(10px);

  /* Inner container untuk menjaga layout */
  & > div {
    max-width: 100%; 
    padding: 5px 40px;
    margin: 0 auto;
  }
`;

const Nav = styled.nav`
  display: flex;
  /* FIX: Menggunakan space-between untuk mendorong item ke tepi */
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  min-height: 20px;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: #070707;
  position: absolute;
  top: 84px; /* Disesuaikan dengan tinggi header */
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
`;

const NavLinkItem = styled.a`
  font-size: 20px;
  transition: color 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  color: #FFFFFF;
  
  &:hover {
    color: #82D842;
  }
`;

const MenuToggleButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 20;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopNavLinks = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: none;
    
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        /* Menambahkan posisi absolut agar bisa ditengahkan */
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const RightLogoContainer = styled.div`
    display: none; /* Sembunyikan di mobile */
    @media (min-width: 768px) {
        display: block;
    }
`;


// Komponen Header
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = ["Home", "About", "Resume", "Portfolio", "Contact"];

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <HeaderContainer>
            <div> {/* Inner container */}
                <Nav>
                    {/* Logo Kiri */}
                    <LogoLink href="#home">
                        <img src={azkaLogo} alt="Azka Logo" height="20"/>
                    </LogoLink>
                    
                    {/* Daftar Navigasi untuk Desktop */}
                    <DesktopNavLinks>
                        {navItems.map(item => (
                            <li key={item}>
                                <NavLinkItem href={`#${item.toLowerCase()}`}>{item}</NavLinkItem>
                            </li>
                        ))}
                    </DesktopNavLinks>

                    {/* Logo Kanan (hanya desktop) */}
                    <RightLogoContainer>
                        <img src={azkaFilledLogo} alt="Azka Filled Logo" height="24" />
                    </RightLogoContainer>

                    {/* Tombol Menu untuk Mobile */}
                    <MenuToggleButton onClick={toggleMobileMenu}>
                        <img src={menuIconSvg} alt="Menu Icon" width="28" height="28" />
                    </MenuToggleButton>
                </Nav>
            </div>
            
            {/* Daftar Navigasi untuk Mobile */}
            <MobileNavLinks isOpen={isMenuOpen}>
                {navItems.map(item => (
                    <li key={item}>
                        <NavLinkItem href={`#${item.toLowerCase()}`} onClick={handleLinkClick}>{item}</NavLinkItem>
                    </li>
                ))}
            </MobileNavLinks>
        </HeaderContainer>
    );
}

export default Header;

