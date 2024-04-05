import { useNavigate } from 'react-router-dom'

import { Page } from '@/common/components/ui/page'
import { useLoginMutation } from '@/feature/auth/api/autchApi'
import { LoginParams } from '@/feature/auth/api/auth.types'
import { SignIn } from '@/feature/auth/ui/signIn'

export const SignInPage = () => {
  const [login] = useLoginMutation()

  const navigate = useNavigate()
  const handelLogin = (data: LoginParams) => {
    login(data)
      .unwrap()
      .then(() => {
        navigate('/decks')
      })
  }

  return (
    <Page>
      <SignIn onSubmit={handelLogin} />
    </Page>
  )
}
