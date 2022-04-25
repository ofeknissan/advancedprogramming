import Message from "./Message";

const contacts = [
    { username: "ofek", contacts:{
         "tamir": [new Message("Hello!","00:06","text",true,1650920810,"26-4-2022")],
         "matan": [new Message("Hello :)!","00:06","text",true,1650920810,"26-4-2022"), new Message("/videos/background-signup.mp4","00:06","video", false,1650920810,"26-4-2022"), new Message("/images/temp.jpg","00:06","image", true,1650920810,"26-4-2022"),
                  new Message("/Sounds/mixkit-sweet-kitty-meow.wav","00:06","voice", true,1650920810,"26-4-2022"), new Message("/Files/sample.pdf","00:06","file", false,1650920810,"26-4-2022"),
                  new Message("Thanks!!","00:06","text",false,1650920810,"26-4-2022"), new Message("🌝😃😁😇😸","00:06","text",false,1650920810,"26-4-2022"), new Message("32.0697766937894, 34.843882682566125","00:06","geo",true,1650920810,"26-4-2022")
                ],
        }},
    { username: "tamir", contacts:{
         "ofek": [new Message("Hello!","00:06","text",false,1650920810,"26-4-2022")],
         "matan": [new Message("Hello :)!","00:06","text",true,1650920810,"26-4-2022"), new Message("/videos/background-signup.mp4","00:06","video", false,1650920810,"26-4-2022"), new Message("/images/temp.jpg","00:06","image", true,1650920810,"26-4-2022"),
         new Message("/Sounds/mixkit-sweet-kitty-meow.wav","00:06","voice", true,1650920810,"26-4-2022"), new Message("/Files/sample.pdf","00:06","file", false,1650920810,"26-4-2022"),
             new Message("Thanks!!","00:06","text",false,1650920810,"26-4-2022"), new Message("🌝😃😁😇😸","00:06","text",false,1650920810,"26-4-2022"), new Message("32.0697766937894, 34.843882682566125","00:06","geo",true,1650920810,"26-4-2022")
         ],
        }},
    { username: "elad", contacts: {
        "matan": [new Message("Hello :)!","00:06","text",true,1650920810,"26-4-2022"), new Message("/videos/background-signup.mp4","00:06","video", false,1650920810,"26-4-2022"), new Message("/images/temp.jpg","00:06","image", true,1650920810,"26-4-2022"),
        new Message("/Sounds/mixkit-sweet-kitty-meow.wav","00:06","voice", true,1650920810,"26-4-2022"), new Message("/Files/sample.pdf","00:06","file", false,1650920810,"26-4-2022"),
            new Message("Thanks!!","00:06","text",false,1650920810,"26-4-2022"), new Message("🌝😃😁😇😸","00:06","text",false,1650920810,"26-4-2022"), new Message("32.0697766937894, 34.843882682566125","00:06","geo",true,1650920810,"26-4-2022")
        ],
        }},
    {username: "matan", contacts: {
        "ofek": [new Message("Hello :)!","00:06","text",false,1650920810,"26-4-2022"), new Message("/videos/background-signup.mp4","00:06","video", true,1650920810,"26-4-2022"), new Message("/images/temp.jpg","00:06","image", false,1650920810,"26-4-2022"),
                 new Message("/Sounds/mixkit-sweet-kitty-meow.wav","00:06","voice", false,1650920810,"26-4-2022"), new Message("/Files/sample.pdf","00:06","file", true,1650920810,"26-4-2022"),
                  new Message("Thanks!!","00:06","text",true,1650920810,"26-4-2022"), new Message("🌝😃😁😇😸","00:06","text",true,1650920810,"26-4-2022"), new Message("32.0697766937894, 34.843882682566125","00:06","geo",false,1650920810,"26-4-2022")
                ],
        "tamir": [new Message("Hello :)!","00:06","text",false,1650920810,"26-4-2022"), new Message("/videos/background-signup.mp4","00:06","video", true,1650920810,"26-4-2022"), new Message("/images/temp.jpg","00:06","image", false,1650920810,"26-4-2022"),
        new Message("/Sounds/mixkit-sweet-kitty-meow.wav","00:06","voice", false,1650920810,"26-4-2022"), new Message("/Files/sample.pdf","00:06","file", true,1650920810,"26-4-2022"),
            new Message("Thanks!!","00:06","text",true,1650920810,"26-4-2022"), new Message("🌝😃😁😇😸","00:06","text",true,1650920810,"26-4-2022"), new Message("32.0697766937894, 34.843882682566125","00:06","geo",false,1650920810,"26-4-2022")
        ],
        "elad": [new Message("Hello :)!","00:06","text",false,1650920810,"26-4-2022"), new Message("/videos/background-signup.mp4","00:06","video", true,1650920810,"26-4-2022"), new Message("/images/temp.jpg","00:06","image", false,1650920810,"26-4-2022"),
        new Message("/Sounds/mixkit-sweet-kitty-meow.wav","00:06","voice", false,1650920810,"26-4-2022"), new Message("/Files/sample.pdf","00:06","file", true,1650920810,"26-4-2022"),
            new Message("Thanks!!","00:06","text",true,1650920810,"26-4-2022"), new Message("🌝😃😁😇😸","00:06","text",true,1650920810,"26-4-2022"), new Message("32.0697766937894, 34.843882682566125","00:06","geo",false,1650920810,"26-4-2022")
        ],
        "Neria": [new Message("Hello :)!","00:06","text",false,1650920810,"26-4-2022"), new Message("/videos/background-signup.mp4","00:06","video", true,1650920810,"26-4-2022"), new Message("/images/temp.jpg","00:06","image", false,1650920810,"26-4-2022"),
        new Message("/Sounds/mixkit-sweet-kitty-meow.wav","00:06","voice", false,1650920810,"26-4-2022"), new Message("/Files/sample.pdf","00:06","file", true,1650920810,"26-4-2022"),
            new Message("Thanks!!","00:06","text",true,1650920810,"26-4-2022"), new Message("🌝😃😁😇😸","00:06","text",true,1650920810,"26-4-2022"), new Message("32.0697766937894, 34.843882682566125","00:06","geo",false,1650920810,"26-4-2022")
        ],
        "dina": [new Message("Hello :)!","00:06","text",false,1650920810,"26-4-2022"), new Message("/videos/background-signup.mp4","00:06","video", true,1650920810,"26-4-2022"), new Message("/images/temp.jpg","00:06","image", false,1650920810,"26-4-2022"),
        new Message("/Sounds/mixkit-sweet-kitty-meow.wav","00:06","voice", false,1650920810,"26-4-2022"), new Message("/Files/sample.pdf","00:06","file", true,1650920810,"26-4-2022"),
            new Message("Thanks!!","00:06","text",true,1650920810,"26-4-2022"), new Message("🌝😃😁😇😸","00:06","text",true,1650920810,"26-4-2022"), new Message("32.0697766937894, 34.843882682566125","00:06","geo",false,1650920810,"26-4-2022")
        ],
    }},
    {username: "Neria", contacts:{
        "matan": [new Message("Hello :)!","00:06","text",true,1650920810,"26-4-2022"), new Message("/videos/background-signup.mp4","00:06","video", false,1650920810,"26-4-2022"), new Message("/images/temp.jpg","00:06","image", true,1650920810,"26-4-2022"),
        new Message("/Sounds/mixkit-sweet-kitty-meow.wav","00:06","voice", true,1650920810,"26-4-2022"), new Message("/Files/sample.pdf","00:06","file", false,1650920810,"26-4-2022"),
            new Message("Thanks!!","00:06","text",false,1650920810,"26-4-2022"), new Message("🌝😃😁😇😸","00:06","text",false,1650920810,"26-4-2022"), new Message("32.0697766937894, 34.843882682566125","00:06","geo",true,1650920810,"26-4-2022")
        ],
    }},
    {username: "dina", contacts:{
        "matan": [new Message("Hello :)!","00:06","text",true,1650920810,"26-4-2022"), new Message("/videos/background-signup.mp4","00:06","video", false,1650920810,"26-4-2022"), new Message("/images/temp.jpg","00:06","image", true,1650920810,"26-4-2022"),
        new Message("/Sounds/mixkit-sweet-kitty-meow.wav","00:06","voice", true,1650920810,"26-4-2022"), new Message("/Files/sample.pdf","00:06","file", false,1650920810,"26-4-2022"),
            new Message("Thanks!!","00:06","text",false,1650920810,"26-4-2022"), new Message("🌝😃😁😇😸","00:06","text",false,1650920810,"26-4-2022"), new Message("32.0697766937894, 34.843882682566125","00:06","geo",true,1650920810,"26-4-2022")
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

