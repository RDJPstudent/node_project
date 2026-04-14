const express = require ('express');
const jwt = require('jsonwebtoken');

// something off the page
// This is how authentication works
//token lives in cookie, then in header, then in client side

//controllers are business logic

async function generateToken(req, res){
    const secret_key = "super_secret_key";

    const user =  {
        id :1,
        date: new Date(),
    } //simulates user logging in

    const token = jwt.sign(user, secret_key, { expiresIn: '1h' });

    //send back json response
    res.json({ token })




}

/* extract the token from the request header
 some_text auth_token
['some_text', 'auth_token']
['auth_token'] */

async function verifyToken(req, res){
    const secret_key = "super_secret_key";
     
        
        const token = req.headers['authorization']?.split(' ')[1];
        // the split makes it an ARRAY and the [1] accesses the second item in the array
        // this needs to be null'able incase the auth doesnt exist, hence the ?

        if(!token) res.status(401).json({ message: 'You are not authorized! Get back!'});
        // 401 is unauthorized
        // first we signed, then we verify
    try{ 

        const decoded = jwt.verify(token, secret_key);

        if(decoded){
            res.json({ message: 'Token is valid', decoded });
        } else {
            res.status(401).json({ message: "Invalid token"});
        }
    }catch(error){

        res.status(401).json({ message: "Internal Sever error! Escape now!"});

    }
}

//export this off the page
module.exports = {generateToken, verifyToken};