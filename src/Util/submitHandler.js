import {addNewToContacts} from "./userMessages";

const errorMsg = ["", "Please fill all required fields!", "Wrong username or password!", "Password does not meet the requirements!", "Username already taken!", "Passwords do not match!"]
const userData = new Map();
userData.set("ofek", {
  password: "1234",
  display: "ofek",
  image: "./Images/user1.png",
});
userData.set("tamir", {
  password: "12345",
  display: "tamir",
  image: "./Images/user2.png",
});
userData.set("matan", {
  password: "11",
  display: "matan",
  image: "./Images/user3.jpg",
});
userData.set("elad", {
  password: "12345",
  display: "elad",
  image: "./Images/user4.png",
});
userData.set("Neria", {
  password: "12345",
  display: "Neria",
  image: "./Images/user4.png",
});
userData.set("yossi", {
  password: "12345",
  display: "yossi",
  image: "./Images/user4.png",
});
userData.set("dina", {
  password: "12345",
  display: "dina",
  image: "./Images/user4.png",
});
userData.set("roni", {
  password: "123",
  display: "roni",
  image: "./Images/user4.png",
});
userData.set("Nellbi", {
  password: "123",
  display: "Nellbi",
  image: "./Images/user1.png",
});
export function submitSignIn(name, password) {
  if(name == "" || password == ""){
    return {message : errorMsg[1], userData : ""}
  }
  let data = userData.get(name);
  if (data && data.password == password) {
    //login: 
    return {message : errorMsg[0], userData : name};
} else {
    return {message : errorMsg[2], userData : ""};
  }
}
export function submitSignUp(name, password, confirmPass, nickName, image) {
  let regHasLetter = /[A-Z|a-z]/;
  let regHasNumber = /[0-9]/;
  let regLength = /^[\s\S]{5,18}$/;
  if(!regHasLetter.test(password) || !regHasNumber.test(password) || !regLength.test(password)){
    return {message : errorMsg[3], userData : ""};
  }
  if(name == "" || password == ""||nickName =="" || image == null || confirmPass=="") {
    return {message : errorMsg[1], userData : ""}
  }
  if(userData.has(name)){
    return {message : errorMsg[4], userData : ""}
  }
  if(password != confirmPass){
    return {message: errorMsg[5], userData: ""}
  }
  //login:
  userData.set(name, {password: password, display: nickName, image: image})
  addNewToContacts(name)
  return {message : errorMsg[0], userData : name}
}

export function getUserData(name){
  let data = userData.get(name);
  if (data) {
    return {name: name, display: data.display, image: data.image};
  }
  return null
}

export function isExist(username) {
  return userData.has(username);
}


