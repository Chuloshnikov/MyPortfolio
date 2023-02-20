import styled from "styled-components";

export const ServicesContainer = styled.div`
    background-color: ${({theme}) => theme.colors.accentColor};
    color: ${({theme}) => theme.colors.pageBackground};
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    border-radius: 2rem;
    margin: 5rem 20rem;

    @media screen and (max-width:${({theme}) => theme.layout.tablet}){
        margin: 2.5rem auto;
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

    @media screen and (max-width:${({theme}) => theme.layout.tablet}){
        font-size: 12px;
        
    }

`;