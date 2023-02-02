import styled from "styled-components";

const Skeleton : React.FC = () => {
    return (
        <>
            <SkeletonLoader>
                {[...Array(8).keys()].map((item, index) => <SkeletonItem key={index} className="shimmer" />)}
            </SkeletonLoader>
        </>
    );
}

const SkeletonLoader = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        grid-template-rows: repeat(8, 1fr);
        grid-template-columns: 1fr;
    }
`;

const SkeletonItem = styled.div`
    width: 220px;
    height: 285px;
    border-radius: 8px;
    background-color: #f2f2f2;

    @media (max-width: 768px) {
        width: 280px;
    }
`;

export default Skeleton;