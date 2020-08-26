import styled from "styled-components"

export const FeaturesContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  justify-content: space-between;
  width: min(95vw, 115rem);
  margin: 2rem auto 10rem;
`

export const Feature = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;

  &:nth-of-type(even) {
    grid-template-columns: 3fr 1fr;
    .Illustration {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
    }

    & > *:last-child {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      text-align: right;
    }
  }

  & .Illustration {
    position: relative;
    transform: scale(1);
    .Blob {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      transform: scale(1.5);
    }
  }

  @media only screen and (max-width: 47em) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;

    &:nth-of-type(even) {
      grid-template-columns: 1fr;
      & > *:last-child {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        text-align: unset;
      }
    }

    /* height: 65vh; */
    .Illustration,
    &:nth-of-type(even) .Illustration {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      margin: 0 auto;
    }

    .Illustration {
      svg {
        height: 16rem;
        width: 16rem;
      }
    }

    div {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
  }
`

Feature.Content = styled.div`
  display: grid;
  place-content: center;
  padding: 1rem 10rem;
  h1 {
    font-size: clamp(2rem, 2.1vw, 3rem);
    color: var(--color-primary);
  }

  p {
    font-size: 1.6rem;
    color: var(--color-text-light);
  }
`