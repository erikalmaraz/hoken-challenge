import styled from 'styled-components'
import { primary } from '../../../../styles/colors'

export const StyledInfoCard = styled.div`
  .info-card--name {
    font-weight: 600;
    margin-top: 0.9em;
    margin-bottom: 0.7em;
    span {
      font-size: 1.49em;
      transition: color 0.2s ease;
      cursor: pointer;
      &:hover {
        color: ${primary.cyan};
      }
    }
  }
  .info-card--desc {
    font-weight: 300;
    font-size: 1.17em;
    line-height: 1.5em;
  }
`
