import styled from "styled-components";


export const TitleColor = styled.h2`
color: ${({theme}) => theme.colors.accentColor};
`;

export const ServicesContainer = styled.div`
    background-color: ${({theme}) => theme.colors.accentColor};
    color: ${({theme}) => theme.colors.pageBackground};
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    border-radius: 2rem;
    border: 3px solid ${({theme}) => theme.colors.accentColor};
    margin: 5rem 20rem;
    transition: all .4s ease 0s;

    @media screen and (max-width:${({theme}) => theme.layout.tablet}){
        margin: 2.5rem 2.5rem;
    }

    @media screen and (max-width:${({theme}) => theme.layout.mobile}){
        margin: 0 1rem;
        
        
    }

    :hover {
        background-color: ${({theme}) => theme.colors.pageBackground};
        color: ${({theme}) => theme.colors.accentColor};
    }

`;

export const ServiceHeader = styled.div`
padding-top: 1rem;

@media screen and (max-width:${({theme}) => theme.layout.tablet}){
    margin-top: 0.5rem;
    }
`;

export const ServiceList = styled.ul`
margin: 2rem 1rem;


li {
    display: flex;
    margin-top: 1rem;
}

li:last-child {
    padding-bottom: 2rem;
}



    @media screen and (max-width:${({theme}) => theme.layout.tablet}){
        font-size: 12px;
        
    }



`;