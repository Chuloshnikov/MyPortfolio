import styled from "styled-components";

export const TitleColor = styled.h2`
color: ${({theme}) => theme.colors.accentColor};
`;

export const ContactsContainer = styled.div`
    width: 58%;
    display: grid;
    gap: 12%;
    margin: 5rem auto;
    grid-template-columns: 30% 58%;


    form {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }

    input, textarea {
        width: 100%;
        padding: 1.5rem;
        border-radius: 0.5rem;
        background: transparent;
        color: ${({theme}) => theme.colors.accentColor};
        border: 3px solid ${({theme}) => theme.colors.accentColor};
        resize: none;

    }


    @media screen and (max-width:${({theme}) => theme.layout.loptop}){
        grid-template-columns: 1fr;
        gap: 2rem;

        
    
    }


    @media screen and (max-width:${({theme}) => theme.layout.tablet}){
        margin: 2.5rem auto;
        width: 80%;
    }

    @media screen and (max-width:${({theme}) => theme.layout.mobile}){
        width: 90%;
    }

`;

export const ContactsOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

export const ContactOption = styled.article`
    background-color: ${({theme}) => theme.colors.accentColor};
    color: ${({theme}) => theme.colors.pageBackground};
    border-radius: 1rem;
    border: 3px solid ${({theme}) => theme.colors.accentColor};
    padding: 1.2rem;
    transition: all .4s ease 0s;

    a {
        margin-top: 0.7rem;
        font-size: 0.8rem;
        color: ${({theme}) => theme.colors.aboutIconColor};
    }

    a:hover {
        color: ${({theme}) => theme.colors.accentHoverColor};
    }

    svg {
        font-size: 1.5rem;
        color: ${({theme}) => theme.colors.aboutIconColor};
        margin-bottom: 0.5rem;
    }

    &:hover {
        background-color: ${({theme}) => theme.colors.pageBackground};
        color: ${({theme}) => theme.colors.accentColor};
        
    }

`;

export const Button = styled.button`

    background-color: ${({theme}) => theme.colors.accentColor};
    color: ${({theme}) => theme.colors.pageBackground};
    border: 2px solid ${({theme}) => theme.colors.pageBackground};
    border-radius: 0.5rem;
    display: block;
    width: max-content;
    padding: 0.5rem 1.2rem;
    font-size: 14px;
    transition: all .4s ease 0s;


&:hover {
    background-color: ${({theme}) => theme.colors.pageBackground};
    color: ${({theme}) => theme.colors.accentColor};
    border: 2px solid ${({theme}) => theme.colors.accentColor};
    transform: scale(1.2);
}
`;