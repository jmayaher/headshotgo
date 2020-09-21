import styled from "styled-components"
import { FadeInAnimation } from "../components/Animations/FadeIn"

export default styled.h1`
  font-size: clamp(3.4rem, 2.5vw, 4rem);
  text-align: center;
  color: var(--color-primary);
  margin: 3rem 0 5rem;
  animation: 0.5s ${FadeInAnimation} ease-out;
`