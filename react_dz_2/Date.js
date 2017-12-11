/**
 * Returns the component which will print the current date when the button will be pressed
 * @type {{dateButton: function()}}
 */
module.exports = {
  dateButton: () => {
    const div = document.createElement('div')
    div.classList = 'date-component'
    document.body.appendChild(div)

    const timeContainer = document.createElement('div')
    timeContainer.classList = 'date-component__time-container'
    div.appendChild(timeContainer)

    const button = document.createElement('button')
    button.innerText = 'Click to get the date'
    button.onclick = () => {
      timeContainer.innerText = formatDate(new Date())
    }
    div.appendChild(button)
  }
}

/**
 * Returns the date in "dd-mm-yy" format
 * @param date
 * @return {string}
 */
function formatDate (date) {
  let dd = date.getDate()
  if (dd < 10) dd = '0' + dd

  let mm = date.getMonth() + 1
  if (mm < 10) mm = '0' + mm

  let yy = date.getFullYear() % 100
  if (yy < 10) yy = '0' + yy

  return dd + '.' + mm + '.' + yy
}
