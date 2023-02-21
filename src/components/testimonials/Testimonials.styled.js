import styled from "styled-components";

export const TitleColor = styled.h2`
color: ${({theme}) => theme.colors.accentColor};
margin: 0 auto;
padding-bottom: 4rem;


@media screen and (max-width:${({theme}) => theme.layout.loptop}){
        
    }

    @media screen and (max-width:${({theme}) => theme.layout.tablet}){
        padding-bottom: 1.5rem;
        
    }

    @media screen and (max-width:${({theme}) => theme.layout.mobile}){
        
        
        
    }
`;

export const TestimonialsContainer = styled.div`
    width: 50%;
    margin: 0rem auto;

    @media screen and (max-width:${({theme}) => theme.layout.loptop}){
        width: 70%;
    }

    @media screen and (max-width:${({theme}) => theme.layout.tablet}){
        width: 80%;
        
    }

    @media screen and (max-width:${({theme}) => theme.layout.mobile}){
        width: 90%;
        
        
    }

`;

export const Testimonial = styled.article`

    background-color: ${({theme}) => theme.colors.accentColor};
    border-radius: 1rem;
    color: ${({theme}) => theme.colors.pageBackground};
    padding: 1rem 1rem;
    margin: 1rem 0;

    h5 {
        padding:0 0 0.3rem  0;
        font-weight: 600;
        font-size: 16px;
    }

    p {
        padding: 0.3rem 0;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.2rem;
    }

    @media screen and (max-width:${({theme}) => theme.layout.loptop}){
       
    }

    @media screen and (max-width:${({theme}) => theme.layout.tablet}){
        
        
        
    }

    @media screen and (max-width:${({theme}) => theme.layout.mobile}){
       
        
        
    }
`;

export const ClientAvatar = styled.div`
overflow: hidden;
margin: 0 auto 0.5rem;
display: flex;
justify-content: center;


img {
    width: 4rem;
    border-radius: 50%;
    border: 3px solid ${({theme}) => theme.colors.accentHoverColor};
    aspect-ratio: 1/1;
}
`;