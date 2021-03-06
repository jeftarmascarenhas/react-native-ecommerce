import { Platform } from 'react-native'
import styled from 'styled-components/native'

import { Title } from '../../styles/typography'

export const SignIn = styled.ScrollView`
  background-color: ${props => props.theme.SECONDARY_BACKGROUND_COLOR};
`

export const SignInKeyboardView = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : null,
})`
  flex: 1;
`

export const SignInSafeView = styled.SafeAreaView`
  padding-left: ${props => props.theme.metrics.spacing(2)};
  padding-right: ${props => props.theme.metrics.spacing(2)};
`
export const TitleSignIn = styled.Text`
  ${Title};
  text-align: center;
  color: ${props => props.theme.WHITE};
  margin-top: ${props => props.theme.metrics.spacing(2)};
  margin-bottom: ${props => props.theme.metrics.spacing(2)};
`
