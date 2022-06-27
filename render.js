String.prototype.render = function(obj)
{
    var stringInput = this.valueOf();

    function replacewords(stringParam, replacementParam, newchar)
    {
        if (stringParam.includes(replacementParam))
        {
            stringParam = stringParam.replace("${"+replacementParam+"}",String(newchar));
        }
        return stringParam;
    }

    for (const [key, value] of Object.entries(obj)) {
        if (typeof(value) == 'string' || typeof(value) == "number")
        {
            stringInput = replacewords(stringInput, key, value);
        }
        else if (typeof(value) == "object")
        {
            for (let i =0; i < Object.keys(obj).length; i++)
            {
            let newValue = Object.values(value)[i];
            stringInput = replacewords(stringInput,key+"."+Object.keys(value)[i], newValue);
            }
        }
    }
    return stringInput;
}

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
document.body.innerHTML=renderStr;
console.log(renderStr) // 'My name is fatfish, age 100, I am a front end development'