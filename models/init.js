const mongoose  = require("mongoose");
const chat = require("./chat.js");


main() 
.then(()=>{
    console.log("connection successful");
})
.catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");  
}

let allchats = [
    {
    from:"neha",
    to:"priya",
    msg : "send me your exam sheet",
    created_at: new Date()
},
 {
    from:"anjali",
    to:"aman",
    msg : "where are you",
    created_at: new Date()
},
 {
    from:"anjana",
    to:"saurabh",
    msg : "hlo hubby",
    created_at: new Date()
},
 {
    from:"kumkum",
    to:"shekhar",
    msg : "hlo ji",
    created_at: new Date()
}
];

chat.insertMany(allchats);
