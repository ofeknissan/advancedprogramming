import Message from "./Message";

const contacts = [
    { username: "ofek", contacts:{
         "tamir": [new Message("Hello!","12:50","text",true,12356)],
         "matan": [new Message("Hello  ma kore:)!","12:30","text",true,12356)]
        }},
    { username: "tamir", contacts:{
         "ofek": [new Message("Hello!","12:50","text",false,12356)],
         "matan": [new Message("Hello!","12:50","text", false,12356), new Message("Hello there!!","12:55","text",true,12356)]
        }},
    { username: "elad", contacts: {
        "matan": [new Message("Hello!","12:50","text", true,12356), new Message("Hello there!!","12:55","text",true), new Message("AAAAAAA!","15:00","text", false,12356)]
        }},
    {username: "matan", contacts: {
        "ofek": [new Message("Hello :)!","12:30","text",false,12356)],
        "tamir": [new Message("Hello!","12:50","text", true,12356), new Message("Hello there!!","12:55","text",false,12356)],
        "elad": [new Message("Hello!","12:50","text", false,12356), new Message("Hello there!!","12:55","text",false,12356), new Message("AAAAAAA!","15:00","text", true,12356)],
        "Neria": [new Message("/videos/background-signup.mp4","22:50","video", false,12356), new Message("Hello there!!","23:55","text",false,12356), new Message("/Images/user3.jpg","22:50","image", true,12356), new Message("AAAAAAA!","23:59","text", true,12356)]
    }},
    {username: "Neria", contacts:{
        "matan": [new Message("/videos/background-signup.mp4","22:50","video", true,12356), new Message("Hello there!!","23:55","text",true,12356), new Message("/Images/user3.jpg","22:50","image", false,12356), new Message("AAAAAAA!","23:59","text", false,12356)]
    }}];

 export function getContactsByName (name)  {
    for (const element of contacts) {
        if(element.username === name) {
            return element.contacts;
        }
      }
    }
    export function addNewToContacts(username){
        contacts.push({username: username, contacts:{}})
        console.log(contacts)
    }

