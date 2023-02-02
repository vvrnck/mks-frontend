import styled from "styled-components";

export const CounterWrapper = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
    padding-bottom: 10px;
`;

export const CounterLabel = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 5px;
    line-height: 6px;
    /* identical to box height */
    color: #000000;
`;

export const CounterMain = styled.div`
    background: #FFFFFF;
    border: 0.3px solid #BFBFBF;
    border-radius: 4px;
    display: grid;
    grid-template-columns: 1fr 1px 1fr 1px 1fr;
    align-items: center;
    width: 50px;
    height: 19px;
`;

export const CounterRemove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    cursor: pointer;    
`;

export const CounterAmount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    /* identical to box height */
    color: #000000;
`;

export const CounterAdd = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    cursor: pointer;
`;

export const Separator = styled.div`
    display: flex;
    height: 70%;
    width: 0.5px;
    background: #BFBFBF;
`;