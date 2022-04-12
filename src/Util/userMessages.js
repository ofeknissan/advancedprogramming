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
        "elad": [new Message("Hello!","12:50","text", false,12356), new Message("Hello there!!","12:55","text",false,12356), new Message("AAAAAAA!","15:00","text", true,12356)]
    }},
    {username: "Neria", contacts:{}}];

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

