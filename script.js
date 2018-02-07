// 1. Randomize the order of the following number set:
// "22, 14, 3, 4, 37, 6, 7, 81, 9, 10"

function randomize(numbers) {
  var numbers = [22, 14, 3, 4, 37, 6, 7, 81, 9, 10]
  let randomized = []

  while (randomized.length < numbers.length) {
    let index = Math.floor(Math.random() * numbers.length)

    if (randomized.indexOf(numbers[index]) === -1) {
      randomized.push(numbers[index])
    }
  }
  return randomized
}
console.log(randomize())

// 2. Find the mean of the following number set:
// "22, 14, 3, 4, 37, 6, 7, 81, 9, 10"

function findMean() {
  var numbers = [22, 14, 3, 4, 37, 6, 7, 81, 9, 10]
  let total = 0
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i]
  }
  let mean = total / numbers.length
  return mean
}

console.log(findMean())

// 3. Fetch and parse the json data to produce the table

$.ajax({
  url: 'http://bptest.net/devtest/data.php',
  type: 'GET',
  dataType: 'json',
}).done(response => {
  showTable(response)
}).fail(() => {
  console.log('Ajax request failed.')
})

function showTable(response) {
  $('.first-name1').text(response[0].firstname)
  $('.first-name2').text(response[1].firstname)
  $('.first-name3').text(response[2].firstname)
  $('.first-name4').text(response[3].firstname)
  $('.last-name1').text(response[0].lastname)
  $('.last-name2').text(response[1].lastname)
  $('.last-name3').text(response[2].lastname)
  $('.last-name4').text(response[3].lastname)
  $('.email1').text(response[0].email)
  $('.email2').text(response[1].email)
  $('.email3').text(response[2].email)
  $('.email4').text(response[3].email)
  $('.gender1').text(response[0].gender)
  $('.gender2').text(response[1].gender)
  $('.gender3').text(response[2].gender)
  $('.gender4').text(response[3].gender)
}
