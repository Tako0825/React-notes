import styled from 'styled-components'

export const AppWrapper = styled.div.attrs(props => {
    console.log(props);
    return { textcolor: props.textcolor }
})`
    color: ${props => props.textcolor};
    border: 1px solid skyblue;
    font-style: italic;
`

const buttonBasic = styled.button`
    background-color: #eee;
    border: 2px solid #000;
    padding: 5px 10px;
    border-radius: 5px;
`

export const ButtonWrapper = styled(buttonBasic)`
`

export const ConfirmWrapper = styled(buttonBasic)`
    background-color: green;
`

export const CancelWrapper = styled(buttonBasic)`
    background-color: red;
`