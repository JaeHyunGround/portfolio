import styled from 'styled-components'

export const ProjectWrapper = styled.div`
    width: 23%;
    margin: 0 1% 5% 1%;
    border-bottom: 0.1rem solid transparent;
    display: flex;
    flex-direction: column;
    transition: all 0.3s;
    font-size: 13px;
    word-break: keep-all;
    
    &:hover {
        color: rgb(62, 255, 255);
        cursor: pointer;
        border-bottom: 0.1rem solid rgb(255, 75, 62);
    }

    div {
        margin-bottom: 5%
    }
`