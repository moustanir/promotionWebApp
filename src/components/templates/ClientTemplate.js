import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { retrieveAuth } from '../../stores/actions/auth'
import { getPosts } from '../../stores/actions/post'

import Navbar from '../molecules/FullNavbar'

const ClientTemplate = props => {
  const dispatch = useDispatch()
  const themeState = useSelector(state => state.global.theme)
  const authState = useSelector(state => state.auth.authUser)

  useEffect(() => {
    dispatch(retrieveAuth())
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Template colorBackground={themeState.colors.backgroundMain}>
      <Navbar theme={themeState} authUser={authState}></Navbar>
      {props.children}
    </Template>
  )
}

const Template = styled.div`
  background-color: ${props => props.colorBackground};
  min-height: ${window.innerHeight - 100}px;
  padding-top: 100px;
`

export default ClientTemplate
