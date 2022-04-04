import Message from "./Message";

const contacts = [
    { username: "ofek", contacts:{
         "tamir": [new Message("Hello!","12:50","text",true)],
         "matan": [new Message("Hello :)!","12:30","text",true)]
        }},
    { username: "tamir", contacts:{
         "ofek": [new Message("Hello!","12:50","text",false)],
         "matan": [new Message("Hello!","12:50","text", false), new Message("Hello there!!","12:55","text",true)]
        }},
    { username: "elad", contacts: {
        "matan": [new Message("Hello!","12:50","text", true), new Message("Hello there!!","12:55","text",true), new Message("AAAAAAA!","15:00","text", false)]
        }},
    {username: "matan", contacts: {
        "ofek": [new Message("Hello :)!","12:30","text",false)],
        "tamir": [new Message("Hello!","12:50","text", true), new Message("Hello there!!","12:55","text",false)],
        "elad": [new Message("Hello!","12:50","text", false), new Message("Hello there!!","12:55","text",false), new Message("AAAAAAA!","15:00","text", true)]
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

