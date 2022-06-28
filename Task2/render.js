String.prototype.render = function(obj)
{
    var stringInput = this.valueOf();
    let keyList = [];
    
    function replacewords(stringParam, replacementParam, newchar)
    {
        if (stringParam.includes(replacementParam))
        {
            stringParam = stringParam.replace("${"+replacementParam+"}",String(newchar));
        }
        return stringParam;
    }
    
    function iterate(obj, prevObj=[]){        
        for (const [key, value] of Object.entries(obj)) {
            if (typeof(value) == 'string' || typeof(value) == "number")
            {
                let replacementWord = key;
                if (prevObj.length > 0) {
                    replacementWord = prevObj.join(".") + "."+key;
                }
                stringInput = replacewords(stringInput, replacementWord, value);
            }
            else if (typeof(value) == "object")
            {            
                keyList.push(key);
                iterate(value, keyList);
                keyList.pop(); 
            }
        }    
    return stringInput;
}
    return iterate(obj);
}

const template = 'My name is ${name}, age ${age}, I am a ${job.name}'
const employee = {
  name: 'fatfish',
  age: 100,
  job: {
    name: 'front end developer'
  },
}
const renderStr = template.render(employee)
document.body.innerHTML = renderStr;
console.log(renderStr) // 'My name is fatfish, age 100, I am a front end development'