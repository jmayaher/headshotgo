import styled from "styled-components"

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, 0.35fr) repeat(4, 0.18fr) repeat(2, 0.35fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;

    img,
    picture {
      height: 100%;
      width: 100%;
    }
  }

  /* Top Left */
  .Image1 {
    grid-area: 1 / 1 / 5 / 3;
  }
  /* Bottom Left */
  .Image2 {
    grid-area: 5 / 1 / 9 / 3;
  }
  /* Top Right  */
  .Image3 {
    grid-area: 1 / 9/ 5 / 11;
  }
  /* Bottom Right  */
  .Image4 {
    grid-area: 5 / 9/ 9 / 11;
  }

  /* Top Center Images Outer  */
  .Image5 {
    grid-area: 1 / 3 / 3 / 5;
  }

  .Image6 {
    grid-area: 1 / 7 / 3 / 9;
  }

  /* Bottom Center Images Outer  */
  .Image7 {
    grid-area: -3 / 3 / -1 / 5;
  }

  .Image8 {
    grid-area: -3 / 7/ -1 /9;
  }

  /* Top Center Picture */
  .Image9 {
    grid-area: 1 / 5 / 3/ 7;
  }

  /* Bottom Center Picture  */
  .Image10 {
    grid-area: -3/ 5/ -1 / 7;
  }

  @media only screen and (max-width: 65em) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 0.7fr 0.8fr 0.7fr;

    .Image1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .Image2 {
      grid-area: 3 / 1 / 4 / 2;
    }
    .Image3 {
      grid-area: 1 / 3/ 2 / 4;
    }
    .Image4 {
      grid-area: 3 / 3 / 4 / 4;
    }

    .Image5 {
      grid-area: 1 / 2 / 2 / 3;
    }

    .Image6 {
      grid-area: 3 / 2 / 4 / 3;
    }

    .Image7,
    .Image8,
    .Image9,
    .Image10 {
      display: none;
      visibility: hidden;
    }
  }

  @media only screen and (max-width: 50em) {
    grid-column-gap: 0.3rem;
  }

  @media only screen and (max-width: 34.375em) {
    grid-template-rows: 0.7fr 0.9fr 0.7fr;

    .gatsby-image-wrapper {
      img {
        object-position: center 30% !important;
      }
    }

    .Image3,
    .Image6 {
      img {
        object-position: center center !important;
      }
    }
  }
`
export const MiddleContent = styled.section`
  grid-area: 3 / 3 / 7 / 9;
  display: grid;
  place-items: center;
  h1 {
    font-size: 3rem;
    margin-bottom: 0.2rem;
  }
  p {
    font-size: 1.8rem;
    text-align: center;
    width: 70%;
  }

  button {
    background-image: linear-gradient(135deg, #2c73d2, #845ec2);
  }

  @media only screen and (max-width: 65em) {
    grid-area: 2 / 1/ 3 / 4;
    p {
      line-height: 1.7;
    }
  }

  @media only screen and (max-width: 50em) {
    h1 {
      font-size: 3rem;
    }
    button {
      font-size: 3.2rem;
    }
  }

  @media only screen and (max-width: 34.5em) {
    h1,
    p,
    a {
      padding: 1.4rem 0;
    }
  }
`