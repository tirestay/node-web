var path = require('path');
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');

module.exports = function(router) {

    router.get('/module2/hello', function (req, res, next) {
        var msg = {
            status:0,
            msg:"hello module2"
        };
        res.json(msg);
    });
    
    router.post('/o2o-customer-web/unauth/clas/findByCode', function(req,res,next) {
        var newData =
            [ {
                "id" : "20000",
                "clasSeq" : "1",
                "clasValue" : "美食",
                "clasSta" : "1",
                "pareClasId" : "0    ",
                "classIcon" : "/upload/20170214/17021409194700304.PNG",
                "mercNum" : null,
                "recoFlg" : "1",
                "classCode" : "1 ",
                "classStyle" : "goodsList.html?id=20000",
                "isMerc" : "1",
                "clasLevel" : "0",
                "new" : false
            }, {
                "id" : "10000",
                "clasSeq" : "2",
                "clasValue" : "购物",
                "clasSta" : "1",
                "pareClasId" : "0    ",
                "classIcon" : "/upload/20170214/17021409200200305.PNG",
                "mercNum" : null,
                "recoFlg" : "1",
                "classCode" : "1 ",
                "classStyle" : "goodsList.html?id=10000",
                "isMerc" : "1",
                "clasLevel" : "0",
                "new" : false
            }, {
                "id" : "30000",
                "clasSeq" : "3",
                "clasValue" : "电影",
                "clasSta" : "1",
                "pareClasId" : "0    ",
                "classIcon" : "/upload/20170214/17021409204800306.PNG",
                "mercNum" : 100,
                "recoFlg" : "1",
                "classCode" : "1 ",
                "classStyle" : "movie-index.html",
                "isMerc" : "0",
                "clasLevel" : "0",
                "new" : false
            }, {
                "id" : "40000",
                "clasSeq" : "4",
                "clasValue" : "医疗",
                "clasSta" : "1",
                "pareClasId" : "0    ",
                "classIcon" : "/upload/20170214/17021409210000307.PNG",
                "mercNum" : null,
                "recoFlg" : "1",
                "classCode" : "1 ",
                "classStyle" : "hosIndex.html",
                "isMerc" : "0",
                "clasLevel" : "0",
                "new" : false
            }, {
                "id" : "50000",
                "clasSeq" : "5",
                "clasValue" : "话费充值",
                "clasSta" : "1",
                "pareClasId" : "0    ",
                "classIcon" : "/upload/20170214/17021409212800308.PNG",
                "mercNum" : null,
                "recoFlg" : "1",
                "classCode" : "1 ",
                "classStyle" : "other-service-telBill.html",
                "isMerc" : "0",
                "clasLevel" : "0",
                "new" : false
            }, {
                "id" : "60000",
                "clasSeq" : "6",
                "clasValue" : "缴交电费",
                "clasSta" : "1",
                "pareClasId" : "0    ",
                "classIcon" : "/upload/20170214/17021409213900309.PNG",
                "mercNum" : null,
                "recoFlg" : "1",
                "classCode" : "1 ",
                "classStyle" : "other-service-bills.html",
                "isMerc" : "0",
                "clasLevel" : "0",
                "new" : false
            }, {
                "id" : "70000",
                "clasSeq" : "7",
                "clasValue" : "酒店",
                "clasSta" : "1",
                "pareClasId" : "0    ",
                "classIcon" : "/upload/20170214/17021409215100310.PNG",
                "mercNum" : null,
                "recoFlg" : "1",
                "classCode" : "1 ",
                "classStyle" : "goodsList.html?id=70000",
                "isMerc" : "1",
                "clasLevel" : "0",
                "new" : false
            }, {
                "id" : "91007",
                "clasSeq" : "8",
                "clasValue" : "休闲娱乐",
                "clasSta" : "1",
                "pareClasId" : "0    ",
                "classIcon" : "/upload/20170214/17021409215800311.PNG",
                "mercNum" : null,
                "recoFlg" : "1",
                "classCode" : "1 ",
                "classStyle" : "goodsList.html?id=91007",
                "isMerc" : "1",
                "clasLevel" : "0",
                "new" : false
            }, {
                "id" : "91008",
                "clasSeq" : "9",
                "clasValue" : "优惠券",
                "clasSta" : "1",
                "pareClasId" : "0    ",
                "classIcon" : "/upload/20170214/17021414240800005.png",
                "mercNum" : null,
                "recoFlg" : "1",
                "classCode" : "1 ",
                "classStyle" : "quanList.html",
                "isMerc" : "0",
                "clasLevel" : "0",
                "new" : false
            }, {
                "id" : "80000",
                "clasSeq" : "10",
                "clasValue" : "理财",
                "clasSta" : "1",
                "pareClasId" : "0    ",
                "classIcon" : "/upload/20170214/17021409222200313.PNG",
                "mercNum" : null,
                "recoFlg" : "1",
                "classCode" : "1 ",
                "classStyle" : "financeList.html",
                "isMerc" : "0",
                "clasLevel" : "0",
                "new" : false
            }, {
                "id" : "90000",
                "clasSeq" : "11",
                "clasValue" : "基金",
                "clasSta" : "1",
                "pareClasId" : "0    ",
                "classIcon" : "/upload/20170214/17021409224600314.PNG",
                "mercNum" : null,
                "recoFlg" : "1",
                "classCode" : "1 ",
                "classStyle" : "foundList.html",
                "isMerc" : "0",
                "clasLevel" : "0",
                "new" : false
            }, {
                "id" : "91000",
                "clasSeq" : "12",
                "clasValue" : "微银行",
                "clasSta" : "1",
                "pareClasId" : "0    ",
                "classIcon" : "/upload/20170214/17021409225700315.PNG",
                "mercNum" : 100,
                "recoFlg" : "1",
                "classCode" : "1 ",
                "classStyle" : "myBank.html",
                "isMerc" : "0",
                "clasLevel" : "0",
                "new" : false
            }, {
                "id" : "80003",
                "clasSeq" : "13",
                "clasValue" : "便民服务",
                "clasSta" : "1",
                "pareClasId" : "0    ",
                "classIcon" : "/upload/20170214/17021409231000316.PNG",
                "mercNum" : null,
                "recoFlg" : "1",
                "classCode" : "1 ",
                "classStyle" : "other-service.html",
                "isMerc" : "0",
                "clasLevel" : "0",
                "new" : false
            }, {
                "id" : "80004",
                "clasSeq" : "14",
                "clasValue" : "社区活动",
                "clasSta" : "1",
                "pareClasId" : "0    ",
                "classIcon" : "/upload/20170214/17021409231900317.PNG",
                "mercNum" : null,
                "recoFlg" : "1",
                "classCode" : "1 ",
                "classStyle" : "activity.html",
                "isMerc" : "0",
                "clasLevel" : "0",
                "new" : false
            }, {
                "id" : "80005",
                "clasSeq" : "15",
                "clasValue" : "社区公告",
                "clasSta" : "1",
                "pareClasId" : "0    ",
                "classIcon" : "/upload/20170214/17021409232600318.PNG",
                "mercNum" : null,
                "recoFlg" : "1",
                "classCode" : "1 ",
                "classStyle" : "activity.html?id=2",
                "isMerc" : "0",
                "clasLevel" : "0",
                "new" : false
            }, {
                "id" : "80006",
                "clasSeq" : "16",
                "clasValue" : "全部",
                "clasSta" : "1",
                "pareClasId" : "0    ",
                "classIcon" : "/upload/20170214/17021409233500319.PNG",
                "mercNum" : null,
                "recoFlg" : "1",
                "classCode" : "1 ",
                "classStyle" : null,
                "isMerc" : "0",
                "clasLevel" : "0",
                "new" : false
            }, {
                "id" : "80007",
                "clasSeq" : "17",
                "clasValue" : "一元秒杀",
                "clasSta" : "1",
                "pareClasId" : "0    ",
                "classIcon" : "/upload/20170120/17012009013200036.png",
                "mercNum" : 100,
                "recoFlg" : "1",
                "classCode" : "4 ",
                "classStyle" : "secKill.html?id=2",
                "isMerc" : "0",
                "clasLevel" : "0",
                "new" : false
            }, {
                "id" : "80008",
                "clasSeq" : "18",
                "clasValue" : "积分兑换",
                "clasSta" : "1",
                "pareClasId" : "0    ",
                "classIcon" : "/upload/20170120/17012009014900037.png",
                "mercNum" : 100,
                "recoFlg" : "1",
                "classCode" : "4 ",
                "classStyle" : "secKill.html?id=4",
                "isMerc" : "0",
                "clasLevel" : "0",
                "new" : false
            }, {
                "id" : "80009",
                "clasSeq" : "19",
                "clasValue" : "限时团购",
                "clasSta" : "1",
                "pareClasId" : "0    ",
                "classIcon" : "/upload/20170118/17011818141800209.png",
                "mercNum" : 100,
                "recoFlg" : "1",
                "classCode" : "4 ",
                "classStyle" : "secKill.html?id=3",
                "isMerc" : "0",
                "clasLevel" : "0",
                "new" : false
            } ];
        res.json(newData);
    });

};

