'use strict';

const fs = require('fs');

function login(user, passwd) {

    let rawdata = fs.readFileSync('./public/json/users.json');
    let objUser = JSON.parse(rawdata);
    let flag;

    objUser.forEach(element => {
        console.log(element); 
       console.log(element.user);
       console.log(element.password); 
       if (element.user === user && element.password === passwd) {
          flag = 1;
       }    
    });    

    return flag;
}

exports.login = login;