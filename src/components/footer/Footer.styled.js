import styled from "styled-components";


export const FooterContainer = styled.footer`
background-color: ${({theme}) => theme.colors.accentColor};
padding: 3rem 0;
text-align: center;
font-size: 0.9rem;
margin-top: 7rem;

a {
    color: ${({theme}) => theme.colors.pageBackground};
}
`;


export const Logo = styled.a`
display: inline-block;
    font-weight: 900;
    font-size: 2rem;
    margin-bottom: 2rem;

`;

export const Links = styled.ul`
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin-bottom: 3rem;

    
@media screen and (max-width:${({theme}) => theme.layout.tablet}){
    flex-direction: column;
    gap: 1.5rem;
}
`;

export const FooterSocials = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;


a {
    color: ${({theme}) => theme.colors.secondaryTextColor};
    background-color: ${({theme}) => theme.colors.pageBackground};
    border: 2px solid transparent;
    padding: 0.7rem;
    border-radius: 0.7rem;
    display: flex;
    transition: all .4s ease 0s;
}

a:hover {
    background: transparent;
    color: ${({theme}) => theme.colors.pageBackground};
    border: 2px solid ${({theme}) => theme.colors.pageBackground};
}


@media screen and (max-width:${({theme}) => theme.layout.tablet}){
    margin-bottom: 2.6rem;
}
`;

export const FooterCopyright = styled.div`
    margin-bottom: 4rem;
    color: ${({theme}) => theme.colors.pageBackground};
`;