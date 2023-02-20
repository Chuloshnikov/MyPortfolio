import styled from "styled-components";


export const TitleColor = styled.h2`
color: ${({theme}) => theme.colors.accentColor};
`;

export const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: 35% 50%;
    gap: 15%;
    margin-top: 5rem;

    @media screen and (max-width:${({theme}) => theme.layout.tablet}){
    
    grid-template-columns: 1fr;
    gap: 0;
    margin-top: 2rem;
    }

`;

export const AboutMe = styled.div`
    width: 80%;
    aspect-ratio: 1/1;
    border-radius: 2rem;
    background: linear-gradient(45deg, transparent, #F0AF22, transparent);
    display: grid;
    place-items: center;
    margin-left: 12rem;

    -webkit-box-shadow: 10px -10px 11px -1px ${({theme}) => theme.colors.accentHoverColor};
    -moz-box-shadow: 10px -10px 11px -1px ${({theme}) => theme.colors. accentHoverColor};
    box-shadow: 10px -10px 11px -1px ${({theme}) => theme.colors. accentHoverColor};

    @media screen and (max-width:${({theme}) => theme.layout.tablet}){
        width: 50%;
        margin: 1rem auto 2rem;
}
    
    img {
        align-self: center;
        border-radius: 2rem;
        overflow: hidden;
        filter: grayscale(30%);
        transform: rotate(10deg);
        border: 3px solid ${({theme}) => theme.colors.accentColor};
        transition: all .4s ease 0s;
    }

    img:hover {
        transform: rotate(0);
    }
`;

export const AboutContent = styled.div`

p {
    padding: 2rem 2rem;
    margin: 2rem 0 2.6rem;
    font-size: 14px;
    opacity: 0.8;
    text-align: center;
    line-height: 1.3rem;
    max-width: 600px;
}

@media screen and (max-width:${({theme}) => theme.layout.tablet}){
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
p {
    padding: 0.2rem;
    margin: 1rem 0 1rem;
    text-align: center;
    
    
}
}

`;

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-right: 10rem;

    @media screen and (max-width:${({theme}) => theme.layout.tablet}){
        gap: 0.5rem;
        margin: 0;
    }

    @media screen and (max-width:${({theme}) => theme.layout.mobile}){
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 0.5rem;
        margin: 0;
    }
`;

export const Card = styled.article`
    background-color: ${({theme}) => theme.colors.accentColor};
    color: ${({theme}) => theme.colors.pageBackground};
    border: 1px solid transparent;
    border-radius: 1rem;
    padding: 2.5rem 0.3rem;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    transition: all .4s ease 0s;
    
    @media screen and (max-width:${({theme}) => theme.layout.tablet}){
        
        padding: 2rem 1.2rem;
    
    }


    svg {
        color:${({theme}) => theme.colors.aboutIconColor};
        font-size: 2.2rem;
        margin-bottom: 1rem;
    }

    h5 {
        font-size: 1rem;
    }

    small {
        font-size: 0.7rem;
        opacity: 0.8;
    }

    &:hover {
    color: ${({theme}) => theme.colors.accentColor};
    background-color: ${({theme}) => theme.colors.pageBackground};
    border: 2px solid ${({theme}) => theme.colors.accentColor};
    transform: scale(1.3);
    }
`;

export const ToGitHub = styled.a`
    color:${({theme}) => theme.colors.aboutIconColor};
    transition: all .4s ease 0s;
    font-size: 18px;

    &:hover {
        color:${({theme}) => theme.colors.primaryTextColor};
        transform: scale(1.1);
    }
`;

export const Button = styled.a`

    background-color: ${({theme}) => theme.colors.accentColor};
    color: ${({theme}) => theme.colors.pageBackground};
    border: 2px solid ${({theme}) => theme.colors.pageBackground};
    border-radius: 0.5rem;
    display: block;
    width: max-content;
    padding: 0.5rem 1.2rem;
    font-size: 14px;
    transition: all .4s ease 0s;
    position: relative;
    top: -5.8rem;
    left: 4.5rem;


&:hover {
    background-color: ${({theme}) => theme.colors.pageBackground};
    color: ${({theme}) => theme.colors.accentColor};
    border: 2px solid ${({theme}) => theme.colors.accentColor};
    transform: scale(1.2);
}

@media screen and (max-width:${({theme}) => theme.layout.tablet}){
    position: static;

        
    
    }
`