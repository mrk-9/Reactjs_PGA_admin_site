import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Main from '../Main'

const AdminPanel = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

const FlexWrapper = styled.div`
  display: flex;
  flex: 1;
  margin-top: 55px;
  min-height: 100%;
`

export default () => (
  <AdminPanel>
    <Header />
    <FlexWrapper>
      <Main />
      <Sidebar />
    </FlexWrapper>

  </AdminPanel>
)
