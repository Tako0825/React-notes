import styled from 'styled-components'

export const FadeInFadeOutDiv = styled.div`
    .slogan {
        background-color: greenyellow;
        font-weight: bold;
    }

    .slogan-enter {
        transform: translate(100%, 0);
        opacity: 0;
    }

    .slogan-enter-active {
        transform: translate(0, 0);
        opacity: 1;
        transition: all 500ms;
    }

    .slogan-exit {
        transform: translate(0, 0);
        opacity: 1;
    }

    .slogan-exit-active {
        transform: translate(-100%, 0);
        opacity: 0;
        transition: all 500ms;
    }
`