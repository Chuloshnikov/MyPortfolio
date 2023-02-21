import styled from "styled-components";

export const TitleColor = styled.h2`
color: ${({theme}) => theme.colors.accentColor};
padding-bottom: 5rem;

@media screen and (max-width:${({theme}) => theme.layout.tablet}){
    padding-bottom: 2.5rem;
    }

`;

export const PortfolioContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    margin: 0 5rem;
    padding-bottom: 5rem;

    @media screen and (max-width:${({theme}) => theme.layout.loptop}){
        grid-template-columns: 1fr 1fr;
        gap: 1.2rem;
        padding-bottom: 5rem;
    }

    @media screen and (max-width:${({theme}) => theme.layout.tablet}){
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;
        margin: 0 2.5rem;
    }

    @media screen and (max-width:${({theme}) => theme.layout.mobile}){
        margin: -2.5rem 1rem;
    }
`;

export const PortfolioItem = styled.article`
    background-color: ${({theme}) => theme.colors.pageBackground};
    border: 3px solid ${({theme}) => theme.colors.accentColor};
    color: ${({theme}) => theme.colors.accentColor};
    padding: 1.3rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover img {
        transform: rotate(0);
    }
`;

export const PortfolioItemText = styled.div`
margin-top: 1rem;

h3 {
    font-size: 16px;
}
p {
    font-size: 12px;
}

`;

export const PortfolioItemImage = styled.div`
overflow: hidden;
border: 3px solid ${({theme}) => theme.colors.accentColor};
border-radius: 1rem;

img {
    width: 46vh;
    height: 35vh;
    border-radius: 1rem;
    filter: grayscale(30%);
    transform: rotate(-10deg);
    transition: all .4s ease 0s;
    border: 3px solid ${({theme}) => theme.colors.accentColor};
    -webkit-box-shadow: -1px 2px 31px 19px ${({theme}) => theme.colors.accentColor};
-moz-box-shadow: -1px 2px 31px 19px ${({theme}) => theme.colors.accentColor};
box-shadow: -1px 2px 31px 19px ${({theme}) => theme.colors.accentColor};
}

@media screen and (max-width:${({theme}) => theme.layout.mobile}){
    width: 28vh;
    height: 20vh;
    }

`;

export const Buttons = styled.div`
display: flex;
justify-content: center;
margin: 1rem 0 0 0;

`;

export const Btn = styled.a`
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background-color: ${({theme}) => theme.colors.pageBackground};
    color: ${({theme}) => theme.colors.accentColor};
    border: 2px solid ${({theme}) => theme.colors.accentColor};
    border-radius: 0.5rem;
    transition: all .4s ease 0s;

    :hover {
        background-color: ${({theme}) => theme.colors.accentColor};
        color: ${({theme}) => theme.colors.pageBackground};
        border: 2px solid ${({theme}) => theme.colors.accentColor};
        transform: scale(1.2);
    }
`;

export const PrimaryBtn = styled.a`
    display: inline-block;
    padding: 0.5rem 1.0rem;
    background-color: ${({theme}) => theme.colors.accentColor};
    color: ${({theme}) => theme.colors.pageBackground};
    border: 2px solid ${({theme}) => theme.colors.pageBackground};
    border-radius: 0.5rem;
    transition: all .4s ease 0s;

    :hover {
        background-color: ${({theme}) => theme.colors.pageBackground};
        color: ${({theme}) => theme.colors.accentColor};
        border: 2px solid ${({theme}) => theme.colors.accentColor};
        transform: scale(1.2);
    }
`;