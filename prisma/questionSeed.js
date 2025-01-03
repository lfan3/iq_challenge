"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var questions, qdata;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    questions = [
                        { key: 1, answer: 12 },
                        { key: 2, answer: 12 },
                        { key: 3, answer: 16 },
                        { key: 4, answer: 9 },
                        { key: 5, answer: 'v' },
                        { key: 6, answer: 'b' },
                        { key: 7, answer: 'm' },
                        { key: 8, answer: 28 },
                        { key: 9, answer: 'n' },
                        { key: 10, answer: 'a' },
                        { key: 11, answer: 8 },
                        { key: 12, answer: 11 },
                        { key: 13, answer: 14 },
                        { key: 14, answer: 10 },
                        { key: 15, answer: 12 },
                        { key: 16, answer: 6 },
                        { key: 17, answer: 27 },
                        { key: 18, answer: '?' },
                        { key: 19, answer: '?' },
                        { key: 20, answer: 5 },
                        { key: 21, answer: { 56: 'c', 57: 'd', 58: 'b', 66: 'a', 67: 'c', 68: 'd', 76: 'b', 77: 'a', 78: 'c' } },
                        { key: 22, answer: { 21: '3', 22: '4', 23: '1', 31: '4', 32: '3', 33: '2', 41: '1', 42: '2', 43: '3' } },
                        { key: 23, answer: { 53: 'p', 54: 'f', 55: 'f', 63: 'x', 64: 'p', 65: 'a', 73: 'l', 74: 'l', 75: 'l' } },
                        { key: 24, answer: { 58: 'b', 59: 'x', 60: 'b', 68: 'b', 69: 'z', 70: 'x', 78: 'x', 79: 't', 80: 'z' } },
                        { key: 25, answer: { 108: 'c', 109: 'p', 110: 'v', 118: 'v', 119: 'p', 120: 'a', 128: 'v', 129: 'b', 130: 'p' } },
                        { key: 26, answer: ["4000", "5001", "6002", "7003", "8004", "9005", "10006", "11007", "12008", "13009", "120010", "110011", "100012", "90013", "80014", "90014", "100014", "110014", "120014", "130014", "140014", "140011", "140010", "14009", "14008", "14007", "14006", "7000", "8000", "9000", "10000", "11000", "12000", "13000", "13001", "13002", "13003", "13004", "13005", "13006", "13007", "13008", "12001", "11001", "10001", "9001", "8001", "7001", "6001", "1001", "1002", "1003", "1004", "1005", "2005", "3005", "4005", "5005", "6005", "07", "06", "05", "04", "03", "02", "01", "09", "010", "011", "10011", "20011", "20012", "20013", "20014", "7004", "7005", "7006", "6006", "5006", "4006", "3006", "40013", "40012", "40011", "40010", "80013", "80012", "80011", "80010", "8009", "8008", "8007", "10004", "10003", "10002", "9002", "8002", "40014", "14005", "1007", "1008", "1009", "2009", "3009"] },
                        {
                            key: 27,
                            answer: ["12001", "11002", "10003", "9004", "10005", "11006", "12007", "13008", "8005", "7005", "6005", "5005", "4005", "3005", "2005", "1005", "30013", "20013", "10013", "013", "012", "011", "010", "09", "08", "07", "5003", "4003", "3003", "2003", "1003", "03", "5008", "6009", "70010", "80011", "4009", "30010", "20011", "10012", "140014", "130013", "120012", "110011", "100010", "9009", "8008", "9008", "10008", "11008", "60012", "50012", "40012", "40013", "110012", "100012", "90012", "80012", "70012", "110013", "100013", "90013", "80013", "70013", "60013", "50013", "3001", "3002", "4002", "5002", "6002", "110014", "100014", "90014", "80014", "70014", "60014", "50014", "40014", "30014", "12000", "11000", "10000", "9000", "8000", "8001", "8002", "8003", "7003", "6003", "7002", "4000", "3000", "2000", "1000", "00", "01", "02", "14009", "14008", "14007", "14006", "14005", "9007", "8007", "7007", "6007", "5007", "4007", "3007", "2007", "1007", "14000", "13001", "12002", "11003", "10004", "9005", "30011", "40011", "50011", "60011"]
                        },
                        {
                            key: 28,
                            answer: ["1002", "1001", "1003", "1004", "1005", "70014", "60014", "50014", "40014", "30014", "20014", "10014", "014", "8004", "7004", "6004", "5004", "4004", "3004", "2004", "10007", "11008", "12009", "130010", "140011", "09", "1008", "08", "07", "06", "05", "04", "03", "7007", "6007", "5007", "4007", "3007", "8007", "9007", "4000", "5000", "6000", "7000", "2002", "3001", "80011", "90012", "100013", "110014", "70010", "13001", "12002", "11003", "10003", "9003", "8003", "13006", "12006", "11006", "10006", "9006", "8006", "7006", "6006", "9002", "8002", "10002", "7002", "6002", "5002", "4002", "11002", "80014", "70013", "60012", "50011", "40010", "30011", "20012", "10013", "140014", "130013", "120012", "110011", "100010", "9009", "8008", "7008", "7009"]
                        },
                        {
                            key: 29,
                            answer: ["1002", "1003", "1004", "2004", "3004", "4004", "7004", "8004", "9004", "6004", "6002", "6003", "7006", "6006", "5006", "4006", "3006", "2006", "2007", "2008", "110013", "110012", "110011", "140014", "130014", "120014", "110014", "14005", "13006", "12007", "11008", "10009", "90010", "80011", "70011", "70012", "14000", "13000", "12000", "11000", "10000", "10001", "10002", "10003", "10004", "3007", "3008", "3009", "4009", "4008", "4007", "6000", "5001", "4001", "3001", "2001", "1001", "014", "013", "012", "10012", "20012", "30012", "40012", "50012", "60012", "60011", "40010", "30010", "20010", "50010", "60010", "70010", "80010", "8009", "8008", "8007", "4000", "3000", "2000", "1000", "00", "01", "02", "03", "04", "10005", "11005", "12005", "12004", "12003", "100011", "90012", "80013", "70013", "60013", "50013", "40013", "30013", "110010", "12009", "13008", "14007", "80014", "90013", "100012", "70014", "60014", "14008", "14009", "140010", "140011", "140012", "130012", "120012"]
                        },
                        {
                            key: 30,
                            answer: ["1002", "2003", "3004", "4005", "5006", "6009", "5008", "4007", "3006", "2005", "1005", "05", "14003", "14002", "14001", "14000", "13000", "12000", "11000", "014", "013", "10013", "10014", "20014", "30014", "30013", "20013", "80013", "80012", "80011", "80010", "8009", "7009", "7008", "7007", "7006", "6000", "7002", "8002", "8003", "8004", "8005", "8006", "8007", "9007", "9008", "03", "02", "01", "00", "1000", "2000", "3000", "4000", "4001", "4002", "4003", "4004", "11004", "10005", "10006", "10007", "11008", "12009", "130010", "12003", "110014", "130014", "120014", "100014", "90014", "80014", "70014", "60014", "12006", "11007", "10008", "9009", "90010", "90011", "90012", "140014", "140013", "140012", "140011", "140010", "14009", "14008", "14007", "13007", "12007", "10011", "10012", "012", "011", "010", "09", "08", "07", "60010", "70011", "60012", "50013", "40014", "5009", "1008", "1009", "10010", "20010", "30010", "40010", "40011", "40012", "30012", "20012", "100011", "100012", "100013", "110013", "110012", "110011", "110010", "06", "6001", "6002"]
                        },
                        { key: 31, answer: "I" },
                        { key: 32, answer: "N" },
                        { key: 33, answer: "J" },
                        { key: 34, answer: "O" },
                        { key: 35, answer: "S" },
                        { key: 36, answer: "E" },
                        { key: 37, answer: "M" },
                        { key: 38, answer: "M" },
                        { key: 39, answer: "64/256" },
                        { key: 40, answer: "C" },
                        { key: 41, answer: 19 },
                        { key: 42, answer: 26 },
                        { key: 43, answer: 28 },
                        { key: 44, answer: 42 },
                        { key: 45, answer: 116 },
                    ];
                    qdata = questions.map(function (q) {
                        return ({ key: q.key, answer: typeof q.answer == "object" ? JSON.stringify(q.answer) : String(q.answer) });
                    });
                    return [4 /*yield*/, prisma.question.createMany({
                            data: qdata
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
