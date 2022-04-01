
const errorMsg = ["", "Please fill all required fields!", "Wrong username or password!", "Invalid password"]
const userData = new Map();
userData.set("ofek", {
  password: "1234",
  display: "ofekniss",
  image: "user1.jpg",
});
userData.set("tamir", {
  password: "12345",
  display: "tamir12",
  image: "user2.jpg",
});
userData.set("matan", {
  password: "11",
  display: "123123",
  image: "user3.jpg",
});
userData.set("elad", {
  password: "12345",
  display: "blair",
  image: "user4.jpg",
});

export function submitSignIn(name, password) {
    console.log("Signin");
  if(name == "" || password == ""){
    return {message : errorMsg[1], userData : null}
  }
  let data = userData.get(name);
  console.log(data)
  if (data && data.password == password) {
    //login: 
    return {message : errorMsg[0], userData : {name: name, display : data.display, image : data.image}};
} else {
    return {message : errorMsg[2], userData : null};
  }
}
export function submitSignUp(name, password, nickName, image) {
  console.log("SignUp");

  let regHasLetter = /[A-Z|a-z]/;
  let regHasNumber = /[0-9]/;
  let regLength = /^[\s\S]{5,18}$/;
  if(!regHasLetter.test(password) || !regHasNumber.test(password) || !regLength.test(password)){
    return {message : errorMsg[3], userData : null};
  }
  if(name == "" || password == ""||nickName =="" || image == false) {
    return {message : errorMsg[1], userData : null}
  }
  //login: 
  return {message : errorMsg[0], userData : {name: name, display: nickName, image: image}}
}


