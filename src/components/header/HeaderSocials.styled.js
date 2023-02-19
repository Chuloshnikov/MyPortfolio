import styled from "styled-components";


export const SocialContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 0.8rem;
position: absolute;
left: 2.3rem;
bottom: 3rem;


svg {
    width: 20px;
    height: 20px;
    transition: all .4s ease 0s;
    color: ${({theme}) => theme.colors.accentColor};
}

svg:hover {
    color: ${({theme}) => theme.colors.accentHoverColor};
}

&:after {
    content: '';
    width: 2px;
    height: 3rem;
    background-color: ${({theme}) => theme.colors.accentColor};

}


@media screen and (max-width:${({theme}) => theme.layout.tablet}){
    display: none;
}

`;