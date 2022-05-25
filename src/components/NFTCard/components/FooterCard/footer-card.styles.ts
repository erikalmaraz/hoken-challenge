import styled from 'styled-components'
import { neutral, primary } from '../../../../styles/colors'

export const StyledFooterCard = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.7em;
  border-top: 1px solid ${neutral.line};
  padding-top: 1.2em;
  padding-bottom: 0.4em;
  .footer-card--avatar {
    max-width: 35px;
    img {
      max-width: 35px;
    }
  }
  .footer-card--name {
    font-weight: 300;
    margin-left: 1em;
    b {
      transition: color 0.3s ease;
      cursor: pointer;
      &:hover {
        color: ${primary.cyan};
      }
    }
  }
`
