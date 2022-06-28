This is repository created for storing all tasks given.
# Task 1
Can you please perform following task using this API: https://duda-api.newhomesource.com/api/v2/Search/dudahomes?partnerid=8684&builderid=10430&[…]IncludeSalesOffice=true&IncludePromos=1&IncludeEvents=1
Make an HTML page , display all homes with 5-10 properties from the API
Make a button to enable a feature -  Sort homes by PlanName ascending
Make a text input and button to enable a feature -  Filter homes by Price
(edited)

# Task 2
Please add a render(obj) method to the String object. Its function is to replace specific characters in the string with the corresponding properties of obj.

const template = 'My name is ${name}, age ${age}, I am a ${job.name}'
const employee = {
  name: 'fatfish',
  age: 100,
  job: {
    name: 'front end development'
  }
}
const renderStr = template.render(employee)
// What is the output string?
console.log(renderStr) // 'My name is fatfish, age 100, I am a front end development'