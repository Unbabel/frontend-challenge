import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import { ifProp, prop } from 'styled-tools'

import Checkbox from '../../Atoms/Checkbox/'
import List from '../../Atoms/List/'
import Heading from '../../Atoms/Heading/'
import Paragraph from '../../Atoms/Paragraph/'
import Icon from '../../Atoms/Icon/'
import HorizontalRule from '../../Atoms/HorizontalRule/'
import Spinner from '../../Atoms/Spinner/'
import ContentEditable from '../../Atoms/ContentEditable/'
import IconButton from '../../Molecules/IconButton/'

const StyledList = styled(List)`
  margin: 0 auto;
  width: 70%;
  background: white;
  border: 1px solid #eaedef;
  padding: 0;
  margin: 0 auto;
  margin-top: 2rem;
`

const StyledHeading = styled(Heading)`
  width: 100%;
  margin: 0.2rem 0.5rem;
`

const StyledParagraph = styled(Paragraph)`
  width: 100%;
  margin: 0.2rem 0.5rem;
`
const StyledIcon = styled(Icon)`
  margin-top: 0.25rem;
`

const Wrapper = styled.div`
  //   display: flex;
  //   width: 100%;
  //   height: 100%;
  //   padding:1rem;
`

const ColIcon = styled.div`
  display: flex;
  align-items: stretch;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 80%;
`

const ListItem = styled.li`
  display: flex;
  // width: 100%;
  height: 100%;
  padding: 1rem;
`
const AddRowWrapper = styled.div`
    width:100%
    display:flex;
    justify-content:center;
`

const SpinnerWrapper = styled.div`
  padding:5rem;
`

const handleCheckboxChange = (event) => {
  console.log('Check')
}

const TranscriptioList = ({ items, ...props }) => {
  const [showDeleteIcon, setShowDeleteIcon] = useState(0)

  const {
    isLoading, handleDeleteElement, handleAddRow, handleUpdateElement,
  } = props
  const mappedItems = (typeof items !== 'undefined' && items.length > 0) && items.map((el, i) => {
    const EditableTitle = ContentEditable('span')
    const EditableContent = ContentEditable('span')
    return (
      <div key={i}>
        <ListItem key={el.id} onMouseEnter={() => { setShowDeleteIcon(0) }} onMouseLeave={() => { setShowDeleteIcon(1) }}>
          <ColIcon>
            <Checkbox onChange={handleCheckboxChange} />
          </ColIcon>
          <ColIcon>
            <StyledIcon icon="person" />
          </ColIcon>
          <Col>
            <StyledHeading level={2} variant="itemTitle">
              <EditableTitle value={el.voice} idelement={el.id} propelement="voice" handleUpdateElement={handleUpdateElement} suppressContentEditableWarning="true" />
            </StyledHeading>

            <StyledParagraph>
              <EditableContent value={el.text} idelement={el.id} propelement="text" handleUpdateElement={handleUpdateElement} suppressContentEditableWarning="true" />
            </StyledParagraph>

          </Col>
          <ColIcon>
            <IconButton icon="delete" title="Delete item" transparent onClick={() => { handleDeleteElement(el.id) }} />
          </ColIcon>
        </ListItem>
        <HorizontalRule />
      </div>
    )
  })

  return (
    <StyledList decoration={false} {...props}>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        mappedItems
      )}
      <ListItem>
        <AddRowWrapper>
          <IconButton
            transparent
            icon="add-row"
            height={100}
            onClick={handleAddRow}
          />
        </AddRowWrapper>
      </ListItem>
    </StyledList>
  )
}

TranscriptioList.propTypes = {
  items: PropTypes.array,
}

TranscriptioList.defaultProps = {
  breakpoint: 420,
}

export default TranscriptioList
