import styled from "styled-components";

export const AsideCart = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 486px;   
    z-index: 10;
    background: #0F52BA;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const CartWrapper = styled.div`
    display: grid;
    grid-template-rows: 97px calc(100vh - 184px) 97px;
    color: #FFF;
`;

export const CartHeader = styled.div`
    display: flex;
    padding: 5% 10% 0 10%;
    background: #0F52BA;
    align-items: center;
    justify-content: space-between;
`;

export const CartTitle = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;
`;

export const CartMain = styled.div`
    position: relative;
    padding: 10% 10% 0 10%;
`;

export const CartItems = styled.div`
    overflow-y: auto;
    display: grid;
    gap: 20px;
    align-items: center;    
    max-height: 320px;
    padding: 5px;
    overflow-y: auto;  
    overflow-x: hidden;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        max-height: 450px;
    }
`;

export const CartItem = styled.div`
    width: 379px;
    height: 95px;
    background: #FFFFFF;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    position: relative;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const RemoveItem = styled.div`
    position: absolute;
    top: -5px;
    right: -5px;
    background: #000000;
    width: 18px;
    height: 18px;
    border-radius: 20px;
    cursor: pointer;
    padding: 4px;
`;

export const CartItemInfo = styled.div`
    color: #000;
    display: grid;
    grid-template-columns: 3fr 2fr 1fr;
    height: 100%;

    @media (max-width: 768px) {
        grid-template-columns: 3fr 1fr 1fr;
    }
`;

export const CartItemImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 100px;
    height: 70%;
    position: relative;
    overflow: hidden;

    img {
        padding: 0 15px
    }
`;
export const CartItemName = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    /* or 131% */
    color: #2C2C2C;
`;
export const CartItemAmount = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CartItemPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    padding-right: 30px;

    @media (max-width: 768px) {
        padding-right: 0px;
    }
`;

export const CartTotal = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 20%);
    
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    color: #FFF;
    margin-bottom: 42px;
`;

export const CartFooter = styled.div`
    background: #000000;
    color: #FFF;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;