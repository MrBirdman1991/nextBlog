import React, {FC} from 'react'
import { Navigation } from './mainNavigation'

interface Props{
    children: JSX.Element
}

export const Layout: FC<Props> = ({children}) => {
  return (
    <>
        <Navigation/>
        <main>{children}</main>
    </>
  )
}
