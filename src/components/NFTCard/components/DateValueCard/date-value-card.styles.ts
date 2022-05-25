import styled from 'styled-components'
import { primary } from '../../../../styles/colors'

export const StyledDateValueCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.2em;
  .footer-card--amount {
    display: flex;
    align-items: center;
    img {
      width: 13px;
      margin-right: 0.5em;
    }
    span {
      font-weight: bold;
      font-size: 1.03em;
      color: ${primary.cyan};
    }
  }
  .footer-card--time {
    display: flex;
    align-items: center;
    img {
      width: 21px;
      margin-right: 0.5em;
    }
    span {
      font-size: 1.03em;
      font-weight: 300;
    }
  }
`
