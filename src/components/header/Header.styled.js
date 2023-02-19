import styled from "styled-components";


export const HeaderContainer = styled.header`
display: flex;
justify-content: center;
flex-direction: column;
margin: 2rem 0;
line-height: 2rem;

`

export const Profession = styled.h5`



`;

export const ImageContainer = styled.div`
    display: inline;
    align-items: center;
    justify-content: center;
    padding: 0.2rem;
    margin: 2rem auto;
    border-radius: 1rem;
    background-color: ${({theme}) => theme.colors.accentColor};

    -webkit-box-shadow: 10px -10px 11px -1px ${({theme}) => theme.colors.accentHoverColor};
-moz-box-shadow: 10px -10px 11px -1px ${({theme}) => theme.colors. accentHoverColor};
box-shadow: 10px -10px 11px -1px ${({theme}) => theme.colors. accentHoverColor};
`;



export const MyImage = styled.img`
width: 300px;
height: 350px;
align-self: center;
border-radius: 1rem;
filter: grayscale(30%);
`;

export const ScrollDown = styled.a`
    position: absolute;
    right: 2.3rem;
    bottom: 5rem;
    transform: rotate(90deg);

`