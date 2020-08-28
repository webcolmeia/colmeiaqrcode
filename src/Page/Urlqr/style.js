import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    & > div{
        flex: 1;
        &:first-child{
            flex: 2;
        }
    }
`;