import styled from 'styled-components/native'

import { Title as TitleStyle, TextRegularMedium } from '../../styles/typography'

export const TrackOrder = styled.SafeAreaView`
  flex: 1;
`

export const Title = styled.Text`
  ${TitleStyle};
  padding-top: ${props => props.theme.metrics.spacing()};
  padding-bottom: ${props => props.theme.metrics.spacing(2)};
  text-align: center;
`

export const OrderItem = styled.View`
  margin-bottom: ${props => props.theme.metrics.spacing(2)};
`

export const OrderProduct = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const OrderProductInfo = styled.View`
  flex: 1;
  padding-left: ${props => props.theme.metrics.spacing(1.5)};
`

export const OrderTitle = styled.Text`
  ${TextRegularMedium}
  color: ${props => props.theme.GREY_DARK};
`

export const OrderImage = styled.Image`
  margin-bottom: ${props => props.theme.metrics.spacing(2)};
  width: 54px;
  height: 66px;
`

export const DividerButton = styled.View`
  margin-bottom: ${props => props.theme.metrics.spacing(2)};
`
