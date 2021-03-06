import styled from 'styled-components/native'

import { TextRegular } from '../../styles/typography'
import { Colors } from '../../styles/variables'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: ${props => props.theme.metrics.spacing(0.5)};
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.SECONDARY_BACKGROUND_COLOR};
`
export const ActivityIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
  color: Colors.GREEN,
})``

export const Title = styled.Text`
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
  ${TextRegular};
`
