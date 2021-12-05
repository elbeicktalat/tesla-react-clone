import React, {useState} from 'react';
import "./Header.css"
import styled from "styled-components";
import {Box, Button, Drawer, IconButton, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {Close, Language} from "@mui/icons-material";

function Header(): JSX.Element {

    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(true);
    const closeMenu = () => setIsOpen(false);
    const listText = [
        "Existing Inventory",
        "Used Inventory",
        "Trade-In",
        "Test Drive",
        "Cybertruck",
        "Roadster",
        "Semi",
        "Charging",
        "Powerwall",
        "Commercial Energy",
        "Utilities",
        "Find Us",
        "Support",
        "Investor Relations",
    ];
    return (
        <Container>
            <Logo>
                <a href="#">
                    <img src="assets/images/tesla.svg" alt="Tesla logo"/>
                </a>
            </Logo>
            <MainMenu>
                <Button href="#">Model S</Button>
                <Button href="#">Model 3</Button>
                <Button href="#">Model X</Button>
                <Button href="#">Model Y</Button>
                <Button href="#">Solar Roof</Button>
                <Button href="#">Solar Panels</Button>
            </MainMenu>
            <SecondaryMenuGroup>
                <SecondaryMenu>
                    <Button href="#">Shop</Button>
                    <Button href="#">Account</Button>
                </SecondaryMenu>
                <SideMenu><Button onClick={openMenu}>Menu</Button></SideMenu>
            </SecondaryMenuGroup>
            <React.Fragment>
                <Drawer
                    className="drawer"
                    anchor={"right"}
                    open={isOpen}
                    onClose={closeMenu}
                >
                    <CloseMenu>
                        <IconButton onClick={closeMenu}>
                            <Close/>
                        </IconButton>
                    </CloseMenu>
                    <Box
                        sx={{
                            width: '294px',
                            padding: '0 32px',
                            marginBottom: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                        className="box"
                        role="presentation">
                        {listText.map((text: string) => (
                            <ListItem
                                key={text}
                                button
                                className="list-item">
                                <ListItemText primary={text}/>
                            </ListItem>
                        ))}
                        <ListItem button className="list-item">
                            <LangItem>
                                <ListItemIcon>
                                    <Language/>
                                </ListItemIcon>
                                <LangItemText>
                                    <ListItemText id="lang-item-text-country" primary="United States"/>
                                    <ListItemText id="lang-item-text-lang" primary="English"/>
                                </LangItemText>
                            </LangItem>
                        </ListItem>
                    </Box>
                </Drawer>
            </React.Fragment>
        </Container>
    );
}

const Container = styled.div`
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
`;

const Logo = styled.div`
  width: 120px;

  a {
    padding: 0 16px;
  }
`;

const MainMenu = styled.div`
  a {
    font-family: GothamBook, sans-serif;
    font-weight: 600;
    color: #181b21;
    text-transform: none;
    font-size: 14px;
    border-radius: 12px;
    padding: 4px 12px;


    &:hover {
      background: hsla(0,0%,0%,.05);
      backdrop-filter: blur(16px);
    }

  }

  @media (max-width: 823px) {
    display: none;
  }

`;

const SecondaryMenuGroup = styled.div`
  display: flex;
`;

const SecondaryMenu = styled(MainMenu)``;

const SideMenu = styled.div`
  display: inline;
  
  button {
    font-family: GothamBook, sans-serif;
    font-weight: 600;
    color: #181b21;
    text-transform: none;
    font-size: 14px;
    border-radius: 12px;
    padding: 4px 12px;


    &:hover {
      background: hsla(0,0%,0%,.05);
      backdrop-filter: blur(16px);
    }

  }
`;

const CloseMenu = styled.div`
  display: flex;
  justify-content: end;
  padding: 18px;
`;

const LangItem = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const LangItemText = styled.div`
  display: flex;
  flex-direction: column;
`;


export default Header;