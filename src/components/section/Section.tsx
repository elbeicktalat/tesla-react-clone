import React from 'react';
import "./Section.css";
import styled from "styled-components";

const Fade = require('react-reveal/Fade');

type Props = {
    /**defines the title of a section */
    title: string;
    /**defines the subtitle (description) of a section */
    subTitle?: string;
    /**defines the background image of a section based on local assets. */
    backgroundUrl: string;
    /**defines the text of the first (left or top) button. */
    firstButtonText: string;
    /**defines the text of the second (right or bottom) button. */
    secondButtonText?: string;
    /**boolean variable which allows you to specific if that section is the last to show. */
    isLast?: boolean;
}

type  ThemedStyleProps = {
    bgImg: string;
}

function Section(props: Props): JSX.Element {
    return (
        <Wrap bgImg={props.backgroundUrl}>
            <Fade bottom>
                <TextItem>
                    <Title className="model-title">{props.title}</Title>
                    {props.subTitle && <SubTitle>{props.subTitle}</SubTitle>}
                </TextItem>
            </Fade>
            <Bottom>
                <ButtonGroup>
                    <Fade left={!props.isLast} bottom={props.isLast}>
                        <FirstButton href="#">{props.firstButtonText}</FirstButton>
                    </Fade>
                    <Fade right>
                        {props.secondButtonText && <SecondButton href="#">{props.secondButtonText}</SecondButton>}
                    </Fade>
                </ButtonGroup>
                {!props.isLast && <DownArrow src="assets/images/arrow.svg"/>}
            </Bottom>
        </Wrap>
    );
}

const Wrap = styled.div<ThemedStyleProps>`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${props => `url('assets/images/${props.bgImg}')`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextItem = styled.div`
  padding-top: 12vh;
  text-align: center;

`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: normal;
  padding: 4px;
  letter-spacing: 1px;
  margin-bottom: 6px;
`;

const SubTitle = styled.h2`
  color: #5c5d61;
  font-size: 14px;
  font-family: GothamBook, sans-serif;
  padding: 0 0 8px;
  font-weight: normal;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 4vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FirstButton = styled.a`
  background-color: #323338;
  color: white;
  width: 256px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  text-transform: uppercase;
  font-size: 12px;
  font-family: GothamBook, sans-serif;
  font-weight: bold;
  padding: 12px 24px;
  margin: 12px;
  letter-spacing: 1px;
  cursor: pointer;
  text-decoration: none;
  @media (max-width: 768px) {
    width: 360px;
  }
`;

const SecondButton = styled(FirstButton)`
  background-color: #d2d1d4;
  color: #323338;
`;

const DownArrow = styled.img`
  margin-bottom: 20px;
  width: 24px;
  overflow: hidden;
  animation: animateDown infinite 1.5s;
`;

export default Section;