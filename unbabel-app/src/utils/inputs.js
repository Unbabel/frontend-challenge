module.exports = {
  //  Blatant steal: https://stackoverflow.com/a/3866442/1899290
  positionCursorEnd (element) {
    let range, selection

    if (document.createRange) {
      range = document.createRange()
      range.selectNodeContents(element)
      range.collapse(false)
      selection = window.getSelection()
      selection.removeAllRanges()
      selection.addRange(range)
    } else if (document.selection) {
      range = document.body.createTextRange()
      range.moveToElementText(element)
      range.collapse(false)
      range.select()
    }
  }
}
