import styled from "styled-components";

const horizontalPadding = 4.51; // FIGMA definition

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 101px;
    background: #0F52BA;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${horizontalPadding}% 0 ${horizontalPadding}%; 
`;

export const HeaderInfo = styled.div`
    display: flex;    
    gap: 8px;
    height: 44px;
    align-items: center;
`;

export const HeaderTitle = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 19px;
    /* or 48% */
    color: #FFFFFF;
    mix-blend-mode: normal;
    display: flex;
    height: 44px;
    align-items: center;
`;

export const HeaderSubTitle = styled.div`
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 19px;
    /* or 95% */
    color: #FFFFFF;
    mix-blend-mode: normal;
    margin-top: 8px;
`;

export const HeaderCart = styled.div`
    background: #FFFFFF;
    border-radius: 8px;
    display: flex;
    width: 90px;
    height: 45px;
    align-items: center;
    justify-content: space-evenly;
    color: #000;
    cursor: pointer;
`;

export const HeaderCartItems = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
`;


