import styled from 'styled-components'
import { primary } from '../../../../styles/colors'

export const StyledImageCard = styled.div`
  text-align: center;
  position: relative;
  cursor: pointer;
  img {
    max-width: 100%;
    border-radius: 0.8em;
  }
  &:hover .image-card--layer {
    opacity: 0.5;
  }
  &:hover .image-card--more-info {
    opacity: 1;
  }
  .image-card--layer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    border-radius: 12px;
    max-height: 347px;
    background: ${primary.cyan};
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .image-card--more-info {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
    img {
      width: 55px;
    }
  }
`
