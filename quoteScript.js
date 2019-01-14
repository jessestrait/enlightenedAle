 function toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }


var quoteBank = [
"8-6-7-5-3-0-9",
"LEAVE NO TRACE",
"SUMMER 1969",
"MINDING THE GAP",
"IF IT DOESN'T MAKE DOLLARS, IT DOESN'T MAKE SENSE",
"IT IS GREATNESS",
"THIS IS MUSIC",
"STAY GOLDEN",
"YOU GOT THIS",
"TRUFFLE SHUFFLE",
"ONE DAY AT A TIME",
"NAMACRAY",
"FUCK THAT",
"NOM A SAYIN'",
"OHM BITCHES",
"SORRY NOT SORRY",
"SOOOOO GOOOD",
"BAD AND BOOJEE",
"sassassin",
"FIAH STAHTAHH",
"KILLAHH",
"ARE YOU BATHED IN SILVER, OR DROWNING IN GOLD",
"GLITCH IN THE MATRIX",
"Om mani padme hum",
"YOUR LOTUS FLOWER",
"NICKEL AND DIMIN' IT",
"PANTS OFF DANCE OFF",
"DONT GET FANCY, JUST GET DANCEY",
"THINK IT IS GOOD",
"OH MY GOTH",
"VIVA LA revolucion",
"TINY HANDS",
"DISCOBALLS",
"LIVE, LAUGH, LOVE",
"WHAT'S ANOTHER WORD FOR PIRATE TREASURE?",
"COME ON, WE CAN DO THIS",
"THESE THINGS DO HAPPEN, FROM TIME TO TIME",
"IF YOUR LOST, AND YOU LOOK, YOU WILL FIND ME",
"THE UNIVERSE IS VAST",
"I AM YOUR FATHER",
"I AM YOUR MOTHER",
"I AM YOUR INNER CHILD",
"LET YOUR CONSCIENCE BE YOUR GUIDE",
"atreyu!!!!!!!!",
"OH MY GAWD!",
"FUCK IT ALL",
"13 HOURS TO GET TO THE CENTER OF THE LABYRINTH",
"COOTER KICK!!",
"JUST THE GOOD OLE BOYS!",
"GOOD TIMES WILL BE PLENTY",
"SHAKE N BAKE",
"I'M A RAINBOW TOO",
"RAINBOW-CHILD",
"WHOODOOVOODOOLIKEYOUDOO?",
"CLIMATE CHANGE IS REAL",
"PEPSI COLA PUSSY",
"LICK MY SALT LAMP",
"GREEN HIT",
"CATCH YOU ON THE SLY",
"ME QUESO IS TU QUESO",
"CARNE GUISADA",
"BRISKETS AND BABIES",
"SAUNA DRY OUT",
"MILF MARSHMELLOW",
"DONE AND DONE",
"THERE SHE GOES",
"BeJeebus Saves",
"That's Tits",
"Like Sand in an hour glass, these are the days of our lives",
"Burn it all Down...",
"NOM what i mean...",
"Whirled Peas",
"2 tickets to Paradise",
"Won't you be my neighbor",
"We ALL FLOAT Down Here!!",
"Lollipops and Rainbows!!",
"This is Moon Music",
"Aight, Pimp",
"Count It",
"Things are getting Real....",
"All Good People are asleep and dreaming...",
"whad you gonna do?",
"Color me insane",
"I am a real boy",
"Things are getting Real....",
"The party doesn't have to end tonight",
"Take a step back"
];

var len = quoteBank.length;
var ran = Math.floor(Math.random() * len) + 1;

document.getElementById('quote').innerHTML = toTitleCase(quoteBank[ran]);

function makeComm () {
	document.getElementById('quote').innerHTML = "";
}