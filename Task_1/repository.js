import * as constants from "./Constants.js";

export async function getJsonData() {
    try{
        let response = await fetch(constants.url);
        let data = await response.json()
        console.log(data);
        return data;
    }
    catch(err)
    {
        alert(err);
    }    
}