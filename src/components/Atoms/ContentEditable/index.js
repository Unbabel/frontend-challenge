import React, { Component } from 'react'

const ContentEditable = (WrappedComponent) => {
  return class extends Component {
      state = {
        editing: false,
      };

      toggleEdit = (e) => {
        e.stopPropagation()
        if (this.state.editing) {
          this.cancel()
        } else {
          this.edit()
        }
      };

      edit = () => {
        this.setState(
          {
            editing: true,
          },
          () => {
            this.domElm.focus()
          }
        )
      };

      save = () => {
        const { idelement, propelement, handleUpdateElement } = this.props
        this.setState(
          {
            editing: false,
          },
          () => {
            if (handleUpdateElement && this.isValueChanged()) {
              console.log('Value is changed', this.domElm.textContent)
              handleUpdateElement(idelement, propelement, this.domElm.textContent)
            }
          }
        )
      };

      cancel = () => {
        this.setState({
          editing: false,
        })
      };

      isValueChanged = () => {
        return this.props.value !== this.domElm.textContent
      };

      handleKeyDown = (e) => {
        const { key } = e
        switch (key) {
          case 'Enter':
          case 'Escape':
            this.save()
            break
          default:
            break
        }
      };

      render() {
        let editOnClick = true
        const { editing } = this.state
        if (this.props.editOnClick !== undefined) {
          editOnClick = this.props.editOnClick
        }
        return (
          <WrappedComponent
            className={editing ? 'editing' : ''}
            onClick={editOnClick ? this.toggleEdit : undefined}
            contentEditable={editing}
            ref={(domNode) => {
              this.domElm = domNode
            }}
            onBlur={this.save}
            onKeyDown={this.handleKeyDown}
            {...this.props}
          >
            {this.props.value}
          </WrappedComponent>
        )
      }
  }
}

export default ContentEditable
