import styled from "styled-components";


export const Buttons = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0 0 0;

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

