import { PropsWithChildren } from 'react'
import { Main } from '../atoms/Main'
import { Header, Footer } from '../molecules'

export function PageTemplate({ children }: PropsWithChildren) {
  return (
    <Main>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </Main>
  )
}