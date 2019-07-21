import React from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'

import Block from '../../Atoms/Block/'
import Heading from '../../Atoms/Heading/'
import IconButton from '../../Molecules/IconButton/'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  backGround:#FFFFFF;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  max-width: ${size('maxWidth')};
  > :not(:first-child) {
    margin-left: 1rem;
  }
`
const HeadingWrapper = styled.div`
  display:flex
  width:70%;
`

const IconsWrapper = styled.div`
  display:flex
  width:30%;
`
const Header = (props) => {
  const { requestDataAction, postDataAction } = props
  return (
    <Wrapper opaque reverse {...props}>
      <InnerWrapper>
        <HeadingWrapper>
          <Heading level={1} variant="appTitle">Transcriptions</Heading>
        </HeadingWrapper>
        <IconsWrapper>
          <IconButton icon="upload" title="Post Data" transparent onClick={postDataAction} />
          <IconButton icon="fetch-document" title="Fetch Data" transparent onClick={requestDataAction} />
        </IconsWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Header
