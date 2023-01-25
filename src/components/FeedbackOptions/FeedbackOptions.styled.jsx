import styled from '@emotion/styled';

export const FeedbackList = styled.ul`
display: flex;
gap: 30px;
list-style: none;
justify-content: flex-start;
padding: 0;
`
export const Button = styled.button`
    padding: 15px 25px;
    border-radius: 10px;
    border: none;
    background-color: #a1a3ab;
    color: white;
    text-transform: uppercase;
    font-weight: 900;
    cursor: pointer;
    transition: all 300ms;

    :hover{
        background-color :#516aed;
    }
`