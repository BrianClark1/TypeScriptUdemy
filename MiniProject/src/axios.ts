import axios from "axios";
import _ from "lodash";
//make sure to install the type declaration along with the npm package if it is not included 
//for example lodash type declaration was installed with npm i --save-dev @types/lodash

// _.shuffle()

//Axios comes with its own type declaration file so we can see how it works 
axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
    console.log("WOO!")
})
    .catch((e) => {
        console.log('ERROR!', e)
    });


    //You can add a type for the data coming back 
    //or more realistically you can create your own type

interface User {
    id: number
    name: string 
    username: string 
    email: string 
}

    axios.get<User>("https://jsonplaceholder.typicode.com/users/1").then((res) => {
        console.log("WOO!")
        printUser(res.data);
})
    .catch((e) => {
        console.log('ERROR!', e)
    });


function printUser(user: User) {
    console.log(user.name);
    console.log(user.username);
    console.log(user.email);
}
