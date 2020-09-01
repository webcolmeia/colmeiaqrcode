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

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 15px 0;
`;

Input.Field = styled.input`
    padding: 10px 15px;
    border: 1px solid #999;
    border-radius: 3px;
`;

Input.Title = styled.label`
    font-size: 18px;
    margin-right: 10px;
    margin-bottom: 10px;
`;

export const Select = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 15px 0;
`;

Select.Title = styled.label`
    font-size: 18px;
    margin-right: 10px;
    margin-bottom: 10px;
`;

Select.Field = styled.select`
    padding: 10px 15px;
    border: 1px solid #999;
    border-radius: 3px;
`;