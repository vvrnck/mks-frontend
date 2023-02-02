import styled from "styled-components";

type TProps = {
    size: number,
}

export const ProductList = styled.div<TProps>`
    display: grid;
    grid-template-rows: repeat(${props => Math.floor(props.size/4)}, 1fr);
    grid-template-columns: repeat(4, 1fr);
    column-gap: 22.44px;
    row-gap: 31px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        grid-template-rows: repeat(${props => props.size}, 1fr);
        grid-template-columns: 1fr;
    }
`;

export const ProductItem = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    width: 217.56px;
    height: 285px;
    position: relative;
    gap: 5px;

    @media (max-width: 768px) {
        width: 280px;
    }
`;

export const ProductImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 138px;
    position: relative;
    overflow: hidden;
    
    img {
        object-fit: contain;
    }
`;

export const ProductMain = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
`;

export const ProductTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    /* or 119% */
    color: #2C2C2C;
    //width: 124px;
    height: 38px;
`;

export const ProductPrice = styled.div`
    background: #373737;
    border-radius: 5px;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    /* or 100% */
    color: #FFFFFF;
    width: 64px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProductDescription = styled.div`
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    /* or 120% */
    color: #2C2C2C;
    padding: 0 15px;
`;

export const ProductAction = styled.div`
    background: #0F52BA;
    border-radius: 0px 0px 8px 8px;
    cursor: pointer;
    height: 31.91px;
    position: absolute;
    width: 100%;
    bottom: 0;
    color: #FFF;    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;