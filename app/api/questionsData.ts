// 三角问题数据
const triangleQData = [
    { first: [3, 12, 7, 2], second: [4, 11, 2, 5], third: [3, "?", 9, 2] },
    { first: [3, 10, 2, 4], second: [5, 11, 4, 3], third: [2, "?", 2, 7] },
    { first: [3, "?", 4, 6], second: [4, 13, 2, 7], third: [2, 13, 6, 8] },
    { first: [4, 18, 2, 7], second: [6, 14, 3, 5], third: [8, "?", 4, 2] },
    { first: ["D", "S", "E", "F"], second: ["G", "S", "B", "C"], third: ["D", "?", "E", "I"] },
    { first: ["M", "G", "C", "H"], second: ["K", "F", "D", "M"], third: ["C", "?", "E", "G"] },
    { first: ["T", "E", "Q", "B"], second: ["V", "B", "X", "D"], third: ["Y", "?", "R", "F"] },
    { first: ["H", "45", "R", "S"], second: ["R", "39", "N", "J"], third: ["T", "?", "K", "L"] },
    { first: ["M", "", "A", "R"], second: ["?", "", "K", "T"], third: ["I", "", "W", "A"] },
    { first: ["E", "", "?", "N"], second: ["I", "", "I", "E"], third: ["N", "", "T", "S"] },
    { first: ["E", "", "?", "N"], second: ["I", "", "I", "E"], third: ["N", "", "T", "S"] },//to delete
]
// 圆形问题数据
const pie1 = [
    { data1: 2, data2: "?", data3: 6 },
    { data1: 3, data2: 6, data3: 3 },
    { data1: 5, data2: 7, data3: 2 },
    { data1: 3, data2: 4, data3: 1 },
    { data1: 6, data2: 9, data3: 3 },
    { data1: 9, data2: 10, data3: 1 },
    { data1: 2, data2: 3, data3: 1 },
    { data1: 4, data2: 7, data3: 3 },
];

const pie2 = [
    { data1: 4, data2: "?", data3: 7 },
    { data1: 5, data2: 9, data3: 3 },
    { data1: 6, data2: 12, data3: 3 },
    { data1: 4, data2: 7, data3: 4 },
    { data1: 6, data2: 11, data3: 5 },
    { data1: 7, data2: 8, data3: 2 },
    { data1: 2, data2: 9, data3: 10 },
    { data1: 6, data2: 8, data3: 1 }
]

const pie3 = [
    { data1: 3, data2: "?", data3: 4 },
    { data1: 6, data2: 12, data3: 2 },
    { data1: 9, data2: 12, data3: 3 },
    { data1: 8, data2: 27, data3: 4 },
    { data1: 3, data2: 32, data3: 2 },
    { data1: 1, data2: 6, data3: 5 },
    { data1: 6, data2: 5, data3: 8 },
    { data1: 2, data2: 48, data3: 7 }
]
const pie4 = [
    { data1: 4, data2: 9, data3: 7 },
    { data1: 3, data2: "?", data3: 6 },
    { data1: 5, data2: 11, data3: 5 },
    { data1: 6, data2: 9, data3: 7 },
    { data1: 2, data2: 10, data3: 8 },
    { data1: 9, data2: 13, data3: 6 },
    { data1: 3, data2: 10, data3: 6 },
    { data1: 2, data2: 15, data3: 8 } 
]

const pie5 = [
    { data1: 3, data2: 10, data3: 7 },
    { data1: 2, data2: 4, data3: 8 },
    { data1: 10, data2: 6, data3: 5 },
    { data1: 4, data2: 6, data3: 6 },
    { data1: 8, data2: 0, data3: 5 },
    { data1: 3, data2: 12, data3: 6 },
    { data1: 7, data2: 8, data3: 7 },
    { data1: 2, data2: "?", data3: 8 } 
]


const pie6 = [
    { data1: 2, data2: 3, data3: 10 },
    { data1: 5, data2: 7, data3: 11 },
    { data1: 3, data2: 4, data3: 10 },
    { data1: 7, data2: 9, data3: 11 },
    { data1: 8, data2: 9, data3: 10 },
    { data1: 6, data2: 8, data3: 11 },
    { data1: 7, data2: 8, data3: 10 },
    { data1: 4, data2: "?", data3: 11 } 
]
const pie7 = [
    { data1: 5, data2: 25, data3: 125 },
    { data1: 9, data2: 81, data3: 729 },
    { data1: 6, data2: 36, data3: 216 },
    { data1: 4, data2: 16, data3: 64 },
    { data1: 8, data2: 64, data3: 512 },
    { data1: 2, data2: 4, data3: 8 },
    { data1: 7, data2: 49, data3: 343 },
    { data1: 3, data2: 9, data3: '?' } 
]


const pie8 = [
    { data1: 'b', data2: 'u', data3: 'a' },
    { data1: 'm', data2: 'q', data3: 'f' },
    { data1: 'g', data2: '?', data3: 'o' },
    { data1: 'd', data2: 'd', data3: 'n' },
    { data1: 'j', data2: 'c', data3: 'k' },
    { data1: 'i', data2: 's', data3: 'h' },
    { data1: 'd', data2: 'v', data3: 'h' },
    { data1: 'a', data2: 'r', data3: 'c' } 
]
const pie9 = [
    { data1: 4, data2: 'h', data3: 1 },
    { data1: 5, data2: 'p', data3: 2 },
    { data1: 6, data2: '?', data3: 2 },
    { data1: 3, data2: 'f', data3: 8 },
    { data1: 2, data2: 'd', data3: 4 },
    { data1: 4, data2: 'j', data3: 4 },
    { data1: 7, data2: 'l', data3: 2 },
    { data1: 2, data2: 'x', data3: 3 } 
]



const pie10 = [
    { data1: 4, data2: "", data3: 10 },
    { data1: 5, data2: "", data3: 7 },
    { data1: 3, data2: "", data3: 11 },
    { data1: 5, data2: '', data3: 6 },
    { data1: 2, data2: "", data3: 8 },
    { data1: 1, data2: "", data3: 13 },
    { data1: "?", data2: "", data3: 12 },
    { data1: 8, data2: "", data3: 5 } 
]

const pieData = [
    pie1, pie2, pie3,pie4,pie5, pie6,pie7, pie8, pie9, pie10
]

// grid 问题数据
const grid1 = [
    ['a','c','d','b','a','c','d','b','a','c','d','b','a','c','d'],
    ['b','a','c','d','b','a','c','d','b','a','c','d','b','a','c'],
    ['d','b','a','c','d','b','a','c','d','b','a','c', 'd','b','a'],
    ['c','d','b','a','c','d','b','a','c','d','b','a','c','d','b'],
    ['a','c','d','b','a','c','d','b','a','c','d','b','a','c','d'],
    ['b','a','c','d','b','a','','','','a','c','d','b','a','c'],
    ['d','b','a','c','d','b','','','','b','a','c','d','b','a'],
    ['c','d','b','a','c','d','','','','d','b','a','c','d','b'],
    ['a','c','d','b','a','c','d','b','a','c','d','b','a','c','d'],
    ['b','a','c','d','b','a','c','d','b','a','c','d','b','a','c'],
    ['d','b','a','c','d','b','a','c','d','b','a','c','d','b','a'],
    ['c','d','b','a','c','d','b','a','c','d','b','a','c','d','b'],
    ['a','c','d','b','a','c','d','b','a','c','d','b','a','c','d'],
    ['b','a','c','d','b','a','c','d','b','a','c','d','b','a','c'],
    ['d','b','a','c','d','b','a','c','d','b','a','c','d','b','a']
]
// todo: too easy change vertical
const grid2 = [
    [1,4,3,2,1,4,3,2,1,4,3,2,1,4,3],
    [4,1,2,3,4,1,2,3,4,1,2,'','','',2],
    [3,2,1,4,3,2,1,4,3,2,1,'','','',1],
    [2,3,4,1,2,3,4,1,2,3,4,'','','',4],
    [1,4,3,2,1,4,3,2,1,4,3,2,1,4,3],
    [4,1,2,3,4,1,2,3,4,1,2,3,4,1,2],
    [3,2,1,4,3,2,1,4,3,2,1,4,3,2,1],
    [2,3,4,1,2,3,4,1,2,3,4,1,2,3,4],
    [1,4,3,2,1,4,3,2,1,4,3,2,1,4,3],
    [4,1,2,3,4,1,2,3,4,1,2,3,4,1,2],
    [3,2,1,4,3,2,1,4,3,2,1,4,3,2,1],
    [2,3,4,1,2,3,4,1,2,3,4,1,2,3,4],
    [1,4,3,2,1,4,3,2,1,4,3,2,1,4,3],
    [4,1,2,3,4,1,2,3,4,1,2,3,4,1,2],
    [3,2,1,4,3,2,1,4,3,2,1,4,3,2,1],
]

const grid3 = [
    ['f','x','f','x','p','f','a','l','p','f','f','x','f','x','p'],
    ['a','p','a','l','x','x','p','l','x','p','a','p','a','l','f'],
    ['l','l','a','a','f','f','a','a','l','l','l','l','a','x','x'],
    ['p','x','l','p','x','x','l','a','p','a','p','x','a','f','a'],
    ['f','p','l','a','f','p','x','f','x','f','f','l','p','l','p'],
    ['f','a','l','?','?','?','x','f','x','p','p','l','p','l','f'],
    ['x','p','l','?','?','?','p','a','l','f','a','f','a','x','l'],
    ['f','a','a','?','?','?','l','a','x','x','x','x','a','a','p'],
    ['x','l','a','p','a','p','x','a','f','a','f','l','x','f','l'],
    ['p','x','f','x','f','f','l','p','l','p','p','f','x','a','p'],
    ['f','x','f','x','p','p','l','p','l','f','p','a','x','f','p'],
    ['a','p','a','l','f','a','f','a','x','l','l','f','x','l','f'],
    ['l','l','a','x','x','x','x','a','a','p','p','a','a','x','x'],
    ['p','x','a','f','a','f','l','x','f','l','l','x','a','f','a'],
    ['f','l','p','l','p','p','f','x','a','p','f','l','p','l','p'],
]

const grid4 = [
    ['z','t','a','b','x','z','t','a','b','x','z','t','a','b','x'],
    ['z','t','a','b','x','z','t','a','b','x','z','t','a','b','z'],
    ['x','b','x','z','t','a','b','x','z','t','a','b','x','x','t'],
    ['b','a','b','x','z','t','a','b','x','z','t','a','z','z','a'],
    ['a','t','a','z','t','a','b','x','z','t','a','b','t','t','b'],
    ['t','z','t','x','x','z','t','a','?','?','?','x','a','a','x'],
    ['z','x','z','b','b','z','t','a','?','?','?','z','b','b','z'],
    ['x','b','x','a','a','x','b','x','?','?','?','t','x','x','t'],
    ['b','a','b','t','t','b','a','t','z','a','t','a','z','z','a'],
    ['a','t','a','z','z','a','t','z','x','b','a','b','t','t','b'], 
    ['t','z','t','x','x','b','a','t','z','x','b','x','a','a','x'],
    ['z','x','z','b','a','t','z','x','b','a','t','z','b','b','z'],
    ['x','b','x','b','a','t','z','x','b','a','t','z','x','x','t'],
    ['b','a','t','z','x','b','a','t','z','x','b','a','t','z','a'],
    ['a','t','z','x','b','a','t','z','x','b','a','t','z','x','b'],
]

const grid5 = [
    ['v','a','u','v','v','p','c','t','t','u','a','b','b','c','p'],
    ['b','t','p','u','v','b','u','c','v','v','c','a','t','v','v'],
    ['c','v','t','a','a','v','b','p','p','t','v','u','u','a','b'],
    ['a','c','b','v','p','a','v','v','u','p','v','t','b','a','c'],
    ['b','c','p','v','v','a','u','v','v','p','c','c','v','t','a'],
    ['t','v','a','p','b','t','p','u','v','b','t','p','u','v','b'],
    ['u','b','v','c','c','v','t','a','a','u','v','v','p','c','t'],
    ['c','u','t','b','a','c','b','v','v','u','p','v','t','c','u'],
    ['t','u','a','b','b','c','p','p','t','v','u','u','b','v','c'],
    ['v','v','c','a','t','v','v','c','a','t','v','a','p','b','t'],
    ['p','t','v','u','u','a','b','b','','','','v','a','u','v'],
    ['u','p','v','t','b','a','c','b','','','','v','v','u','p'],
    ['v','p','c','c','v','t','a','a','','','','p','t','v','u'],
    ['v','b','t','p','u','v','b','u','c','v','v','c','a','t','v'],
    ['a','u','v','v','p','c','t','t','u','a','b','b','c','p','v'],
]

const grid6 = [
    [3,9,5,6,4,2,3,9,5,6,4,2,3,9,5],
    [2,4,2,3,9,5,6,4,2,3,9,5,6,4,6],
    [4,6,4,2,3,9,5,6,4,2,3,9,5,2,4],
    [6,5,6,3,9,5,6,4,2,3,9,5,6,3,2],
    [5,9,'','','',2,3,9,5,6,4,6,4,9,3],
    [9,3,'','','',4,2,3,9,5,2,4,2,5,9],
    [3,2,'','','',6,3,9,5,6,3,2,3,6,5],
    [2,4,2,5,9,5,2,4,6,4,9,3,9,4,6],
    [4,6,4,9,3,9,3,2,4,2,5,9,5,2,4],
    [6,5,6,3,2,4,6,5,9,3,6,5,6,3,2],
    [5,9,5,2,4,6,5,9,3,2,4,6,4,9,3],
    [9,3,9,3,2,4,6,5,9,3,2,4,2,5,9],
    [3,2,4,6,5,9,3,2,4,6,5,9,3,6,5],
    [2,4,6,5,9,3,2,4,6,5,9,3,2,4,6],
    [3,2,4,6,5,9,3,2,4,6,5,9,3,2,4]
]
// ⭕=0 ✔️=1 ❤️ =2 💲=3
const grid7 = [
    [2,1,1,0,0,3,2,1,1,0,0,3,2,1,1,0],
    [2,2,0,1,3,3,2,2,0,1,3,3,2,2,0,1],
    [1,3,3,2,2,0,1,3,3,2,2,0,1,3,3,2],
    [0,0,3,2,1,1,0,0,3,2,1,1,0,0,3,2],
    [0,0,2,3,1,1,0,0,2,3,1,1,0,0,2,3],
    [3,1,2,3,0,"","","",2,3,0,2,3,1,2,3],
    [2,2,1,0,3,"","","",1,0,3,3,2,2,1,0],
    [1,2,0,1,3,"","","",0,1,3,0,1,2,0,1],
    [1,3,0,1,2,0,1,3,0,1,2,0,1,3,0,1],
    [0,3,3,2,2,1,0,3,3,2,2,1,0,3,3,2],
    [3,0,2,3,1,2,3,0,2,3,1,2,3,0,2,3],
    [3,1,1,0,0,2,3,1,1,0,0,2,3,1,1,0],
    [2,1,1,0,0,3,2,1,1,0,0,3,2,1,1,0],
    [2,2,0,1,3,3,2,2,0,1,3,3,2,2,0,1],
    [1,3,3,2,2,0,1,3,3,2,2,0,1,3,3,2],
    [0,0,3,2,1,1,0,0,3,2,1,1,0,0,3,2]
]
// 找字游戏
const grid8 = [
    ["x","e","t","e","l","p","e","d","t","s","e","d","s","b","v"],
    ["v","t","r","a","n","s","k","v","o","c","p","i","u","x","i"],
    ["d","l","a","n","r","c","l","m","n","a","u","t","i","o","n"],
    ["m","b","m","r","f","r","d","x","t","l","r","s","g","a","c"],
    ["s","t","v","u","t","i","e","e","m","o","m","e","l","o","g"],
    ["u","t","r","i","s","b","g","v","a","l","u","a","o","t","v"],
    ["x","s","r","r","m","e","d","n","p","q","u","v","e","x","a"],
    ["j","e","s","a","b","r","i","r","b","c","f","g","i","p","t"],
    ["e","t","g","q","t","l","b","e","s","l","u","v","n","o","c"],
    ["j","e","l","r","s","e","i","n","g","u","n","e","a","o","h"],
    ["u","g","o","a","t","b","g","d","j","i","k","l","n","m","t"],
    ["n","a","p","t","v","x","u","i","a","b","d","v","c","f","n"],
    ["e","t","r","m","o","s","p","t","c","a","e","u","e","i","i"],
    ["p","l","a","u","s","i","b","l","e","x","b","c","d","a","l"],
    ["x","t","r","s","u","e","m","i","l","b","u","s","p","s","p"]
]

const grid9 = [
    ['r','n','a','l','h','e','l','a','l','i','h','p','o','s','v'],
    ['e','s','e','o','u','g','i','o','p','t','y','n','t','o','a'],
    ['b','k','l','g','i','r','u','i','l','i','e','n','h','r','n'],
    ['i','m','o','o','m','u','d','l','a','d','e','g','i','d','y'],
    ['h','n','p','o','t','o','r','g','c','t','b','y','z','e','g'],
    ['p','r','o','g','e','b','o','o','i','e','j','v','i','n','o'],
    ['t','a','k','n','r','u','s','r','r','n','d','e','c','r','l'],
    ['e','l','e','o','d','a','o','b','n','a','e','a','a','e','o'],
    ['r','e','t','i','u','f','p','m','s','l','l','p','r','t','d'],
    ['c','p','g','n','c','m','h','i','a','s','p','s','t','s','e'],
    ['n','r','k','s','u','u','o','t','t','p','i','g','s','o','a'],
    ['o','s','u','i','h','l','l','s','e','o','o','p','o','p','p'],
    ['c','m','l','i','y','p','o','a','g','s','t','e','s','a','t'],
    ['t','e','o','t','j','g','o','o','r','r','n','x','d','n','o'],
    ['h','v','a','s','p','x','i','l','e','h','h','e','l','g','i']
]

const grid10 = [
    ['u','n','l','y','l','e','m','i','t','u','n','h','d','l','c'],
    ['i','u','m','b','r','a','d','a','n','j','n','a','t','u','i'],
    ['m','t','u','d','e','u','n','e','u','u','e','i','n','b','t'],
    ['i','n','e','u','s','v','v','d','u','r','v','c','u','n','i'],
    ['w','n','d','n','r','o','o','e','n','t','i','k','v','u','r'],
    ['i','n','e','g','o','l','s','l','o','n','g','n','a','n','a'],
    ['n','h','r','o','h','p','l','e','r','u','j','l','a','c','c'],
    ['d','o','a','d','n','u','a','n','e','r','u','l','n','t','u'],
    ['u','l','r','l','u','n','v','a','t','o','h','l','r','r','e'],
    ['n','u','t','l','e','o','a','n','t','s','a','m','e','d','b'],
    ['v','n','l','i','e','e','e','u','a','s','l','n','e','m','r'],
    ['o','t','u','h','f','s','h','p','n','t','b','o','a','m','a'],
    ['l','o','p','g','r','s','p','s','l','a','s','p','h','n','l'],
    ['d','u','o','n','l','o','u','t','p','a','r','s','l','p','p'],
    ['u','n','e','a','l','r','e','c','l','u','r','y','t','o','u']
]

const grid11 = [
    ['a','m','i','t','e','s','h','r','o','u','b','a','r','h','s'],
    ['l','d','s','h','i','s','h','l','o','b','r','s','o','d','o'],
    ['u','u','s','h','n','h','o','n','e','c','h','h','v','m','s'],
    ['h','o','a','e','t','a','h','s','h','r','g','n','e','h','h'],
    ['s','r','l','s','o','m','s','e','v','o','a','p','t','c','r'],
    ['i','h','a','h','i','p','o','a','r','t','l','l','i','i','u'],
    ['s','h','s','h','o','m','h','s','h','r','e','e','d','v','h'],
    ['s','h','o','l','g','p','s','h','p','s','l','g','e','o','s'],
    ['r','a','b','m','u','s','a','s','h','i','l','a','l','k','u'],
    ['u','l','v','o','n','s','h','r','o','g','k','d','a','h','t'],
    ['b','b','e','r','y','s','u','o','d','n','e','t','s','t','m'],
    ['u','p','l','o','r','h','m','n','i','s','s','n','u','g','t'],
    ['r','s','l','e','k','e','n','r','a','o','n','s','e','u','o'],
    ['h','h','s','v','t','r','h','v','h','p','o','t','l','v','h'],
    ['s','l','m','r','u','s','t','s','s','h','u','t','t','r','s']
]

const grid12 = [
    ['e','t','n','i','o','e','e','t','a','t','s','e','t','n','i'],
    ['r','a','u','r','s','a','i','e','s','l','e','i','n','f','u'],
    ['g','t','v','l','t','l','p','s','a','l','a','m','l','n','s'],
    ['l','c','o','r','e','n','u','r','p','s','z','d','l','o','i'],
    ['a','c','i','a','l','m','o','f','u','a','e','b','a','d','m'],
    ['b','l','v','q','o','i','a','m','n','s','t','t','b','o','v'],
    ['p','r','o','a','s','r','t','u','v','i','l','r','l','o','o'],
    ['e','n','p','b','e','r','t','n','e','n','a','a','l','l','g'],
    ['e','n','o','r','t','i','o','n','s','o','p','o','r','p','n'],
    ['r','o','b','e','r','t','v','a','l','e','r','i','t','r','i'],
    ['a','l','l','e','n','a','v','o','h','n','p','l','a','n','m'],
    ['r','w','a','e','l','d','m','n','n','r','n','r','e','t','a'],
    ['o','h','e','s','l','b','i','n','s','i','x','y','o','r','l'],
    ['u','r','e','a','d','o','r','o','t','v','c','a','b','l','f'],
    ['g','n','a','l','s','t','u','i','t','a','n','o','t','n','i']
]

const gridData = [
    grid1, grid2, grid3, grid4, grid5,grid8, grid9, grid10, grid11, grid12
]

const tetra1 = [
    ['b','c','t','k'],
    ['e','f','w','n'],
    ['h','?','z','q'],
]

const tetra2 = [
    ['f','d','c','a'],
    ['j','h','g','e'],
    ['?','l','k','i'],
]

const tetra3 = [
    ['g','k','v','z'],
    ['l','p','a','e'],
    ['q','u','f','?'],
]

const tetra4 = [
    ['i','h','?','l'],
    ['z','k','f','c'],
    ['q','n','w','t'],
]

const tetra5 = [
    ['a','m','i','e'],
    ['q','c','y','u'],
    ['g','?','o','k'],
]

const tetra6 = [
    ['w','s','h','a'],
    ['k','e','s','p'],
    ['e','a','r','?'],
]

const tetra7 = [
    ['t','l','w','k'],
    ['i','?','n','a'],
    ['a','e','r','m'],
]

const tetra8 = [
    ['a','?','i','e'],
    ['g','s','o','k'],
    ['q','c','y','u'],
]


const tetra9 = [
    [2,8,4,16],
    [3,27,9,81],
    [4,"?",16,"?"],
]

const tetra10 = [
    ['i','c','l','d'],
    ['v','i','m','v'],
    ['x','l','x','?'],
]

const tetraData = [
    tetra1,
    tetra2,
    tetra3,
    tetra4,
    tetra5,
    tetra6,
    tetra7,
    tetra8,
    tetra9,
    tetra10
]

const colorgame1 = [13,14,18,24,"",1,2,3,4,"?",2,2,2,4,19,1,1,2,4,17,1,1,3,1,14]
const colorgame2 = [28,28,29,32,"",4,3,1,2,"?",4,4,4,4,32,1,4,1,1,26,1,2,2,2,33]
const colorgame3 = [35,28,34,34,"",54,12,51,41,"?",12,51,24,24,35,24,41,25,12,35,21,54,25,45,33]
const colorgame4 = [40,40,42,"?","", 21,53,32,51,40,15,12,23,35,40,23,51,23,12,42,35,23,52,13,""]
const colorgame5 = [94,98,75,"?","",31,12,52,35,88,22,35,32,55,128,52,53,11,21,91,33,52,13,12,""]

const colorgames = [
    colorgame1, colorgame2, colorgame3, colorgame4, colorgame5
]


export {triangleQData,  pieData, gridData, tetraData, colorgames}
