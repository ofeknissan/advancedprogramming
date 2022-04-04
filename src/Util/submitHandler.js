import {addNewToContacts} from "./userMessages";

const errorMsg = ["", "Please fill all required fields!", "Wrong username or password!", "Invalid password"]
const userData = new Map();
userData.set("ofek", {
  password: "1234",
  display: "ofekniss",
  image: "user1.png",
});
userData.set("tamir", {
  password: "12345",
  display: "tamir12",
  image: "user2.png",
});
userData.set("matan", {
  password: "11",
  display: "123123",
  image: "user3.jpg",
});
userData.set("elad", {
  password: "12345",
  display: "blair",
  image: "user4.png",
});
userData.set("Neria", {
  password: "12345",
  display: "Ner",
  image: "user4.png",
});

export function submitSignIn(name, password) {
    console.log("Signin");
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
export function submitSignUp(name, password, nickName, image) {
  let regHasLetter = /[A-Z|a-z]/;
  let regHasNumber = /[0-9]/;
  let regLength = /^[\s\S]{5,18}$/;
  if(!regHasLetter.test(password) || !regHasNumber.test(password) || !regLength.test(password)){
    return {message : errorMsg[3], userData : ""};
  }
  if(name == "" || password == ""||nickName =="" || image == null) {
    return {message : errorMsg[1], userData : ""}
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


