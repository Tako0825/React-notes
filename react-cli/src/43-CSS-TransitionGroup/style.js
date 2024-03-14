import styled from 'styled-components'

export const NumWrapper = styled.div`
    li {
        background-color: seagreen;
        margin: 5px 0;
    }

    .num-enter, .num-appear {
        opacity: 0;
        transform: scale(.8);
    }

    .num-enter-active, .num-appear-active {
        opacity: 1;
        transform: scale(1);
        transition: opacity 1s, transform 1s;
    }

    .num-exit {
        opacity: 1;
    }

    .num-exit-active {
        opacity: 0;
        transform: scale(.8);
        transition: opacity 1s, transform 1s;
    }
`