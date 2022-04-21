import Message from "./Message";

const contacts = [
    { username: "ofek", contacts:{
         "tamir": [new Message("Hello!","12:50","text",true,12356)],
         "matan": [new Message("Hello :)!","10:30","text",true,12356), new Message("/videos/background-signup.mp4","12:50","video", false,12356), new Message("/images/temp.jpg","13:10","image", true,12356),
                  new Message("/Sounds/mixkit-sweet-kitty-meow.wav","13:33","voice", true,12356), new Message("/Files/sample.pdf","13:34","file", false,12356),
                  new Message("Thanks!!","14:30","text",false,12356), new Message("🌝😃😁😇😸","14:55","text",false,12356), new Message("32.0697766937894, 34.843882682566125","15:45","geo",true,12356)
                ],
        }},
    { username: "tamir", contacts:{
         "ofek": [new Message("Hello!","12:50","text",false,12356)],
         "matan": [new Message("Hello :)!","10:30","text",true,12356), new Message("/videos/background-signup.mp4","12:50","video", false,12356), new Message("/images/temp.jpg","13:10","image", true,12356),
         new Message("/Sounds/mixkit-sweet-kitty-meow.wav","13:33","voice", true,12356), new Message("/Files/sample.pdf","13:34","file", false,12356),
             new Message("Thanks!!","14:30","text",false,12356), new Message("🌝😃😁😇😸","14:55","text",false,12356), new Message("32.0697766937894, 34.843882682566125","15:45","geo",true,12356)
         ],
        }},
    { username: "elad", contacts: {
        "matan": [new Message("Hello :)!","10:30","text",true,12356), new Message("/videos/background-signup.mp4","12:50","video", false,12356), new Message("/images/temp.jpg","13:10","image", true,12356),
        new Message("/Sounds/mixkit-sweet-kitty-meow.wav","13:33","voice", true,12356), new Message("/Files/sample.pdf","13:34","file", false,12356),
            new Message("Thanks!!","14:30","text",false,12356), new Message("🌝😃😁😇😸","14:55","text",false,12356), new Message("32.0697766937894, 34.843882682566125","15:45","geo",true,12356)
        ],
        }},
    {username: "matan", contacts: {
        "ofek": [new Message("Hello :)!","10:30","text",false,12356), new Message("/videos/background-signup.mp4","12:50","video", true,12356), new Message("/images/temp.jpg","13:10","image", false,12356),
                 new Message("/Sounds/mixkit-sweet-kitty-meow.wav","13:33","voice", false,12356), new Message("/Files/sample.pdf","13:34","file", true,12356),
                  new Message("Thanks!!","14:30","text",true,12356), new Message("🌝😃😁😇😸","14:55","text",true,12356), new Message("32.0697766937894, 34.843882682566125","15:45","geo",false,12356)
                ],
        "tamir": [new Message("Hello :)!","10:30","text",false,123), new Message("/videos/background-signup.mp4","12:50","video", true,123), new Message("/images/temp.jpg","13:10","image", false,123),
        new Message("/Sounds/mixkit-sweet-kitty-meow.wav","13:33","voice", false,123), new Message("/Files/sample.pdf","13:34","file", true,123),
            new Message("Thanks!!","14:30","text",true,123), new Message("🌝😃😁😇😸","14:55","text",true,123), new Message("32.0697766937894, 34.843882682566125","15:45","geo",false,123)
        ],
        "elad": [new Message("Hello :)!","10:30","text",false,12356), new Message("/videos/background-signup.mp4","12:50","video", true,12356), new Message("/images/temp.jpg","13:10","image", false,12356),
        new Message("/Sounds/mixkit-sweet-kitty-meow.wav","13:33","voice", false,12356), new Message("/Files/sample.pdf","13:34","file", true,12356),
            new Message("Thanks!!","14:30","text",true,12356), new Message("🌝😃😁😇😸","14:55","text",true,12356), new Message("32.0697766937894, 34.843882682566125","15:45","geo",false,12356)
        ],
        "Neria": [new Message("Hello :)!","10:30","text",false,12356), new Message("/videos/background-signup.mp4","12:50","video", true,12356), new Message("/images/temp.jpg","13:10","image", false,12356),
        new Message("/Sounds/mixkit-sweet-kitty-meow.wav","13:33","voice", false,12356), new Message("/Files/sample.pdf","13:34","file", true,12356),
            new Message("Thanks!!","14:30","text",true,12356), new Message("🌝😃😁😇😸","14:55","text",true,12356), new Message("32.0697766937894, 34.843882682566125","15:45","geo",false,12356)
        ],
        "dina": [new Message("Hello :)!","10:30","text",false,12356), new Message("/videos/background-signup.mp4","12:50","video", true,12356), new Message("/images/temp.jpg","13:10","image", false,12356),
        new Message("/Sounds/mixkit-sweet-kitty-meow.wav","13:33","voice", false,12356), new Message("/Files/sample.pdf","13:34","file", true,12356),
            new Message("Thanks!!","14:30","text",true,12356), new Message("🌝😃😁😇😸","14:55","text",true,12356), new Message("32.0697766937894, 34.843882682566125","15:45","geo",false,12356)
        ],
    }},
    {username: "Neria", contacts:{
        "matan": [new Message("Hello :)!","10:30","text",true,12356), new Message("/videos/background-signup.mp4","12:50","video", false,12356), new Message("/images/temp.jpg","13:10","image", true,12356),
        new Message("/Sounds/mixkit-sweet-kitty-meow.wav","13:33","voice", true,12356), new Message("/Files/sample.pdf","13:34","file", false,12356),
            new Message("Thanks!!","14:30","text",false,12356), new Message("🌝😃😁😇😸","14:55","text",false,12356), new Message("32.0697766937894, 34.843882682566125","15:45","geo",true,12356)
        ],
    }},
    {username: "dina", contacts:{
        "matan": [new Message("Hello :)!","10:30","text",true,12356), new Message("/videos/background-signup.mp4","12:50","video", false,12356), new Message("/images/temp.jpg","13:10","image", true,12356),
        new Message("/Sounds/mixkit-sweet-kitty-meow.wav","13:33","voice", true,12356), new Message("/Files/sample.pdf","13:34","file", false,12356),
            new Message("Thanks!!","14:30","text",false,12356), new Message("🌝😃😁😇😸","14:55","text",false,12356), new Message("32.0697766937894, 34.843882682566125","15:45","geo",true,12356)
        ],
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
    }

