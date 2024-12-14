const calculate = (selectedQ: number) => {
  switch (selectedQ) {
    case 1:
      return 14
    case 2:
      return 12
    case 3:
      return 16
    case 4:
      return 9
    case 5:
      return "v"
    case 6:
      return 'b'
    case 7:
      return 'm'
    case 8:
      return 28
    case 9:
      return 'n'
    case 10:
      return 'a'
    case 11:
      return 8
    case 12:
      return 11
    case 13:
      return 14
    case 14:
      return 10
    case 15:
      return 12
    case 16:
      return 6
    case 17:
      return 27
    case 20:
      return 5
    case 21:
      return { 56: 'c', 57: 'd', 58: 'b', 66: 'a', 67: 'c', 68: 'd', 76: 'b', 77: 'a', 78: 'c' }
    case 22:
      return { 21: '3', 22: '4', 23: '1', 31: '4', 32: '3', 33: '2', 41: '1', 42: '2', 43: '3' }
    case 23:
      return { 53: 'p', 54: 'f', 55: 'f', 63: 'x', 64: 'p', 65: 'a', 73: 'l', 74: 'l', 75: 'l' }
    case 24:
      return { 58: 'b', 59: 'x', 60: 'b', 68: 'b', 69: 'z', 70: 'x', 78: 'x', 79: 't', 80: 'z' }
    case 25:
      return { 108: 'c', 109: 'p', 110: 'v', 118: 'v', 119: 'p', 120: 'a', 128: 'v', 129: 'b', 130: 'p' }
    case 26:
      return ["4000","5001","6002","7003","8004","9005","10006","11007","12008","13009","120010","110011","100012","90013","80014","90014","100014","110014","120014","130014","140014","140011","140010","14009","14008","14007","14006","7000","8000","9000","10000","11000","12000","13000","13001","13002","13003","13004","13005","13006","13007","13008","12001","11001","10001","9001","8001","7001","6001","1001","1002","1003","1004","1005","2005","3005","4005","5005","6005","07","06","05","04","03","02","01","09","010","011","10011","20011","20012","20013","20014","7004","7005","7006","6006","5006","4006","3006","40013","40012","40011","40010","80013","80012","80011","80010","8009","8008","8007","10004","10003","10002","9002","8002","40014","14005","1007","1008","1009","2009","3009"]
    case 27:
      return ["12001","11002","10003","9004","10005","11006","12007","13008","8005","7005","6005","5005","4005","3005","2005","1005","30013","20013","10013","013","012","011","010","09","08","07","5003","4003","3003","2003","1003","03","5008","6009","70010","80011","4009","30010","20011","10012","140014","130013","120012","110011","100010","9009","8008","9008","10008","11008","60012","50012","40012","40013","110012","100012","90012","80012","70012","110013","100013","90013","80013","70013","60013","50013","3001","3002","4002","5002","6002","110014","100014","90014","80014","70014","60014","50014","40014","30014","12000","11000","10000","9000","8000","8001","8002","8003","7003","6003","7002","4000","3000","2000","1000","00","01","02","14009","14008","14007","14006","14005","9007","8007","7007","6007","5007","4007","3007","2007","1007","14000","13001","12002","11003","10004","9005","30011","40011","50011","60011"]
    case 28:
      return ["1002","1001","1003","1004","1005","70014","60014","50014","40014","30014","20014","10014","014","8004","7004","6004","5004","4004","3004","2004","10007","11008","12009","130010","140011","09","1008","08","07","06","05","04","03","7007","6007","5007","4007","3007","8007","9007","4000","5000","6000","7000","2002","3001","80011","90012","100013","110014","70010","13001","12002","11003","10003","9003","8003","13006","12006","11006","10006","9006","8006","7006","6006","9002","8002","10002","7002","6002","5002","4002","11002","80014","70013","60012","50011","40010","30011","20012","10013","140014","130013","120012","110011","100010","9009","8008","7008","7009"]
    case 29:
      return ["1002","1003","1004","2004","3004","4004","7004","8004","9004","6004","6002","6003","7006","6006","5006","4006","3006","2006","2007","2008","110013","110012","110011","140014","130014","120014","110014","14005","13006","12007","11008","10009","90010","80011","70011","70012","14000","13000","12000","11000","10000","10001","10002","10003","10004","3007","3008","3009","4009","4008","4007","6000","5001","4001","3001","2001","1001","014","013","012","10012","20012","30012","40012","50012","60012","60011","40010","30010","20010","50010","60010","70010","80010","8009","8008","8007","4000","3000","2000","1000","00","01","02","03","04","10005","11005","12005","12004","12003","100011","90012","80013","70013","60013","50013","40013","30013","110010","12009","13008","14007","80014","90013","100012","70014","60014","14008","14009","140010","140011","140012","130012","120012"]
    case 30:
      return ["1002","2003","3004","4005","5006","6009","5008","4007","3006","2005","1005","05","14003","14002","14001","14000","13000","12000","11000","014","013","10013","10014","20014","30014","30013","20013","80013","80012","80011","80010","8009","7009","7008","7007","7006","6000","7002","8002","8003","8004","8005","8006","8007","9007","9008","03","02","01","00","1000","2000","3000","4000","4001","4002","4003","4004","11004","10005","10006","10007","11008","12009","130010","12003","110014","130014","120014","100014","90014","80014","70014","60014","12006","11007","10008","9009","90010","90011","90012","140014","140013","140012","140011","140010","14009","14008","14007","13007","12007","10011","10012","012","011","010","09","08","07","60010","70011","60012","50013","40014","5009","1008","1009","10010","20010","30010","40010","40011","40012","30012","20012","100011","100012","100013","110013","110012","110011","110010","06","6001","6002"]
    case 31:
     return "I"
    case 32:
      return "N"
    case 33:
      return "J"
    case 34:
      return "O"
    case 35:
      return "S"
    case 36:
      return "E"
    case 37:
      return "M"
    case 38:
      return "M"
    case 39:
      return "64/256"
    case 40:
      return "C"
    case 41:
      return 19
    case 42:
      return 26
    case 43:
      return 28
    case 44:
      return 42
    case 45:
      return 116
    default:
      return 'a'
  }
}

const showExplaination = (selectedQ:number)=>{
  switch(selectedQ){
    case 1:
      return "The sum of the numbers at the triangle's vertices."
    case 2:
      return "(upper corner * right corner) - left corner"
    case 3:
      return "the sum of the numbers at the right-down-side triangle's vertices. We have placed the sum of each triangle in a different triangle. "
    case 4:
      return "The sum of the numbers at the bottom-left corner of each triangle "
    case 5:
      return "Replace the letters in the string with their corresponding positions in the alphabet (a=1, b=2, ..., z=26). Then, for the given expression D * 2 + I + E, calculate the result."
    case 6:
      return "(A + B) / C, the expression is (C + G) / E = (3 + 7) / 5 = 2, so the answer is B"
    case 7:
      return "In contrast to the previous, the letters are mapped to their positions in reverse order, such as A=26, B=25. The expression is A + B - C. In the third tirangle, we have Y + F - R = 2 + 21 -9 = 14. 14 is M"
    case 8:
      return "The letters are still mapped to their positions in reverse order. The expression is (A * 2) + (B * 2) - C."
    case 9:
      return "Spell Mark Twain"
    case 10:
      return "You see Einstein from the triangles. Albert Einstein, so the answer is A."
    case 11:
      return "Add the two numbers in the Sector."
    case 12:
      return "The sum of two numbers in the sector, but we place the result in the opposite sector. 5 + 6 = 11"
    case 13:
      return "Multiple the two numbers in the sector, and place the result in the next sector in the clockwise direction. 7 * 2 = 14"
    case 14:
      return "The sum of two numbers in the sector, place the result in the one sector away in the clockwise direction."
    case 15:
      return "(big number - small number) * 2, place the result in the one sector away in the counterclockwise direction."
    case 16:
      return "Split the two-digit number outside the sector into individual digits, add them to another number, and the sum will be the result."
    case 17:
      return "3 * 3 * 3 = 27"
    case 18:
      return "D(4) + H(8) = L(12)"
    case 19:
      return "The multiplication of two numbers in the sector, but we place the result in the opposite sector. 2 * 7 = 14(N)"
    case 20:
      return "Calculate the sum of two numbers. Then split the two-digit number, add the two digits together. 13 + 1 = 14. 1 + 4 = 5"
    case 21:
      return "From left to right. The order is ACDB."
    case 22:
      return "Move in a clockwise direction like a paperclip. Repeating 1432"
    case 23:
      return "Move from bottom-left corner to top-right corner, and turning back to bottom-left corner, repeating FXALP in diagonal direction."
    case 24:
      return "Starting from the top-left corner, spiral inward, repeating ZTABX."
    case 25:
      return "Starting from the top-left corner, following VABCTUVP, move along the diagonal in a zigzag pattern"
    case 31:
      return "Each letter move nine positions forward to form the next letter."
    case 32:
      return "For the first triangle: D(4) - A(1) = 3, D(4) - C(3) = 1, D(4) - F(6) = -2. It is the same for the second triangle. So for the third one: L(12) - ? = -2. ?=14(N) "
    case 33:
      return "Letters at the same position of triangle have the same distance (5). L(12) - G(7) = 5 Q(17) - L(12) = 5. ? - E(5) = 5. ? = 10(J)"
    case 34:
      return "3 steps between two letters. For example:  Q(17) + 3 = T(20), T(20) + 3 = W(23). I(9) + 3 = L(12), L + 3 = O(15)." 
    case 35:
      return "Same logic with Q34"
    case 36:
      return "W.Shakespeare"
    case 37:
      return "W - K, R - M, N(14) - A(1) = M(13)"
    case 38:
      return "In the order from top - right - left - center, every two letters are separated by three letters"
    case 39:
      return "The top number squared, cubed, and to the power of 4"
    case 40:
      return "Standard Roman Numeral Rules I = 1, V = 5, X = 10, L = 50,C = 100, D = 500, M = 1000. Here we simple repeat in order of IVXLCDM"
    case 41:
      return "Orange = 3, Green = 4, Red = 5, Purple = 7"
    case 42:
      return "Orange = 6, Green = 9, Red = 3, Purple = 8  6 + 9 + 3 + 8 = 26"
    case 43:
      return "Yellow=3, Orange = 2, Green = 6, Purple = 5 (3 + 5) + (2 + 6) + (3 + 2) + (5 + 2) = 28"
    case 44:
      return "Yellow=2, Orange = 6, Green = 4, Red = 8  (2 + 6) + (8 + 2) + (6 + 4) + (6 + 8) = 42"
    case 45:
      return "Yellow=8, Orange = 3, Green = 6, Red = 2 (2 * 8) + (8 * 8) + (6 * 3) + (3 * 6) = 116"
    default:
      return ""
  }
}


const checkEndOfGames = ()=>{
  // get data from database
  return true
}

export { calculate, checkEndOfGames, showExplaination }