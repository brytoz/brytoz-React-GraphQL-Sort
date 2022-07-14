

// ALL USERS MOCK DATA
const players = [
    { id: 1, fullname: "ozoemen bright", status: "available", returned_day: 15, nationality: "nigeria" },
    { id: 2, fullname: "chukwuebuka casmir", status: "unavailable", returned_day: 20, nationality: "nigeria" },
    { id: 3, fullname: "sztwane phillips", status: "available", returned_day: 17, nationality: "ghana" },
    { id: 4, fullname: "christopher mpepe", status: "available", returned_day: 16, nationality: "france" },
    { id: 5, fullname: "Boniface chuks", status: "available", returned_day: 15, nationality: "nigeria" },
    { id: 6, fullname: "Nwonu christian", status: "available", returned_day: 16, nationality: "england" },
    { id: 7, fullname: "bastian odegard", status: "unavailable", returned_day: 20, nationality: "germany" },
    { id: 8, fullname: "lionel messi", status: "available", returned_day: 16, nationality: "argentina" },
    { id: 9, fullname: "di maria", status: "available", returned_day: 15, nationality: "argentina" },
    { id: 10, fullname: "khaby lame", status: "unavailable", returned_day: 20, nationality: "france" },

    { id: 11, fullname: "chuka paul", status: "available", returned_day: 18, nationality: "nigeria" },
    { id: 12, fullname: "chukwuemeka paul", status: "available", returned_day: 19, nationality: "nigeria" },
    { id: 13, fullname: "kagawe nsotho", status: "available", returned_day: 19, nationality: "ghana" },
    { id: 14, fullname: "chris chukwu", status: "available", returned_day: 15, nationality: "france" },
    { id: 15, fullname: "paul chuks", status: "available", returned_day: 15, nationality: "nigeria" },
    { id: 16, fullname: "nwamara dorathy", status: "available", returned_day: 16, nationality: "england" },
    { id: 17, fullname: "partey", status: "available", returned_day: 16, nationality: "ghana" },
    { id: 18, fullname: "chuka messi", status: "available", returned_day: 16, nationality: "argentina" },
    { id: 19, fullname: "another wan", status: "available", returned_day: 15, nationality: "columbia" },
    { id: 20, fullname: "odumegu ojukwu", status: "unavailable", returned_day: 20, nationality: "nigeria" }

]


const mockplay = [
    { id: 1, fullname: "ozoemen bright", status: "available", returned_day: 15 },
    { id: 2, fullname: "chukwuebuka casmir", status: "unavailable", returned_day: 20, },
    { id: 3, fullname: "sztwane phillips", status: "available", returned_day: 17 },
    { id: 4, fullname: "christopher mpepe", status: "available", returned_day: 16 },
    { id: 5, fullname: "Boniface chuks", status: "available", returned_day: 15  },
]

// DEFINE THE COUNTRY TABLE FROM ALL USERS TABLE 
const country = [
    { id: 1,  nationality: "nigeria", playerId: 1 },
    { id: 2,  nationality: "nigeria", playerId: 2 },
    { id: 3,  nationality: "france", playerId: 4 },
    { id: 4,  nationality: "ghana", playerId: 5 },
    { id: 5,  nationality: "argentina", playerId: 3 },
    

]



// REDEFINE THE UNAVAILABLE TABLE FROM ALL USERS TABLE 
const unAvailable = [
    { id: 2, fullname: "chukwuebuka casmir", status: "unavailable", returned_day: 20, nationality: "nigeria" },
    { id: 7, fullname: "bastian odegard", status: "unavailable", returned_day: 20, nationality: "germany" },
    { id: 10, fullname: "khaby lame", status: "unavailable", returned_day: 20, nationality: "france" },

    { id: 20, fullname: "odumegu ojukwu", status: "unavailable", returned_day: 20, nationality: "nigeria" }

]

// REDEFINE THE AVAILABLE TABLE FROM ALL USERS TABLE 
const available = [
    { id: 1, fullname: "ozoemen bright", status: "available", returned_day: 15, nationality: "nigeria" },
    { id: 3, fullname: "sztwane phillips", status: "available", returned_day: 17, nationality: "ghana" },
    { id: 4, fullname: "christopher mpepe", status: "available", returned_day: 16, nationality: "france" },
    { id: 5, fullname: "Boniface chuks", status: "available", returned_day: 15, nationality: "nigeria" },
    { id: 6, fullname: "Nwonu christian", status: "available", returned_day: 16, nationality: "england" },
    { id: 8, fullname: "lionel messi", status: "available", returned_day: 16, nationality: "argentina" },
    { id: 9, fullname: "di maria", status: "available", returned_day: 15, nationality: "argentina" },

    { id: 11, fullname: "chuka paul", status: "available", returned_day: 18, nationality: "nigeria" },
    { id: 12, fullname: "chukwuemeka paul", status: "available", returned_day: 19, nationality: "nigeria" },
    { id: 13, fullname: "kagawe nsotho", status: "available", returned_day: 19, nationality: "ghana" },
    { id: 14, fullname: "chris chukwu", status: "available", returned_day: 15, nationality: "france" },
    { id: 15, fullname: "paul chuks", status: "available", returned_day: 15, nationality: "nigeria" },
    { id: 16, fullname: "nwamara dorathy", status: "available", returned_day: 16, nationality: "england" },
    { id: 17, fullname: "partey", status: "available", returned_day: 16, nationality: "ghana" },
    { id: 18, fullname: "chuka messi", status: "available", returned_day: 16, nationality: "argentina" },
    { id: 19, fullname: "another wan", status: "available", returned_day: 15, nationality: "columbia" },

]

// EXPORTS THE CONSTANT VARIABLES
module.exports = { players, unAvailable, available, country, mockplay }

