import styled from "styled-components";


export const Nav = styled.nav`
align-items: center;
text-align: center;
background: rgba(0, 0, 0, 0.3);
width: max-content;
display: flex;
padding: 0.7rem 1.7rem;
z-index: 2;
position: fixed;
left: 50%;
transform: translate(-50%);
bottom: 2rem;
gap: 0.8rem;
border-radius: 3rem;
backdrop-filter: blur(15px);

a {
    background: transparent;
    padding: 0.8rem;
    border-radius: 50%;
    display: flex;
    font-size: 1.1rem;
    transition: all .4s ease 0s;
}

a:hover {
    background: rgba(0, 0, 0, 0.4);
}

a:active {
    background-color: ${({theme}) => theme.colors.accentColor};
    
    svg{
        color: ${({theme}) => theme.colors.pageBackground};
    }
}

a:focus {
    background-color: ${({theme}) => theme.colors.accentColor};
    
    svg{
        color: ${({theme}) => theme.colors.pageBackground};
    }
}

svg {
    color: ${({theme}) => theme.colors.accentColor};
    transition: all .4s ease 0s;
}

svg:hover {
    color: ${({theme}) => theme.colors.accentHoverColor};
}

`