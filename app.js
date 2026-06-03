const MUSK_WEALTH = 10000;

const gdpRows = [
  { rank: 1, name: "美国", value: 287509.5613 },
  { rank: 3, name: "中国", value: 187438.0317 },
  { rank: 5, name: "德国", value: 46855.92578 },
  { rank: 6, name: "日本", value: 40275.97524 },
  { rank: 7, name: "印度", value: 39098.91534 },
  { rank: 8, name: "英国", value: 36860.33044 },
  { rank: 9, name: "法国", value: 31604.42622 },
  { rank: 10, name: "意大利", value: 23808.25077 },
  { rank: 11, name: "加拿大", value: 22436.36827 },
  { rank: 12, name: "巴西", value: 21858.21649 },
  { rank: 13, name: "俄罗斯", value: 21738.35807 },
  { rank: 14, name: "韩国", value: 18753.88209 },
  { rank: 15, name: "墨西哥", value: 18563.7 },
  { rank: 16, name: "澳大利亚", value: 17570.2 },
  { rank: 17, name: "西班牙", value: 17256.7 },
  { rank: 18, name: "印尼", value: 13963.0 },
  { rank: 19, name: "土耳其", value: 13591.2 },
  { rank: 20, name: "沙特", value: 12398.0 },
  { rank: 21, name: "荷兰", value: 12149.3 },
  { rank: 22, name: "马斯克", value: 10000, isMusk: true },
  { rank: 23, name: "瑞士", value: 9365.6 },
  { rank: 24, name: "波兰", value: 9177.7 },
  { rank: 25, name: "比利时", value: 6713.7 },
  { rank: 26, name: "阿根廷", value: 6383.7 },
  { rank: 27, name: "爱尔兰", value: 6091.6 },
  { rank: 28, name: "瑞典", value: 6037.2 },
  { rank: 29, name: "阿联酋", value: 5523.2 },
  { rank: 30, name: "新加坡", value: 5473.9 }
];

const gdpFlags = {
  1: "🇺🇸", 2: "🇪🇺", 3: "🇨🇳", 4: "🇪🇺", 5: "🇩🇪", 6: "🇯🇵", 7: "🇮🇳", 8: "🇬🇧", 9: "🇫🇷", 10: "🇮🇹",
  11: "🇨🇦", 12: "🇧🇷", 13: "🇷🇺", 14: "🇰🇷", 15: "🇲🇽", 16: "🇦🇺", 17: "🇪🇸", 18: "🇮🇩", 19: "🇹🇷", 20: "🇸🇦",
  21: "🇳🇱", 22: "🚀", 23: "🇨🇭", 24: "🇵🇱", 25: "🇧🇪", 26: "🇦🇷", 27: "🇮🇪", 28: "🇸🇪", 29: "🇦🇪", 30: "🇸🇬"
};

const gdpExtraRows = [
  { rank: 31, name: "以色列", value: 5403.799213, flag: "🇮🇱" },
  { rank: 32, name: "奥地利", value: 5347.907205, flag: "🇦🇹" },
  { rank: 33, name: "泰国", value: 5265.176588, flag: "🇹🇭" },
  { rank: 34, name: "挪威", value: 4835.926483, flag: "🇳🇴" },
  { rank: 35, name: "越南", value: 4763.882303, flag: "🇻🇳" },
  { rank: 36, name: "伊朗", value: 4752.520892, flag: "🇮🇷" },
  { rank: 37, name: "菲律宾", value: 4616.175098, flag: "🇵🇭" },
  { rank: 38, name: "孟加拉国", value: 4501.194321, flag: "🇧🇩" },
  { rank: 39, name: "丹麦", value: 4245.24722, flag: "🇩🇰" },
  { rank: 40, name: "马来西亚", value: 4222.270054, flag: "🇲🇾" },
  { rank: 41, name: "哥伦比亚", value: 4188.181549, flag: "🇨🇴" },
  { rank: 42, name: "中国香港", value: 4068.633965, flag: "🇭🇰" },
  { rank: 43, name: "南非", value: 4011.449984, flag: "🇿🇦" },
  { rank: 44, name: "埃及", value: 3890.59911, flag: "🇪🇬" },
  { rank: 45, name: "罗马尼亚", value: 3825.64218, flag: "🇷🇴" },
  { rank: 46, name: "巴基斯坦", value: 3715.700001, flag: "🇵🇰" },
  { rank: 47, name: "捷克", value: 3470.340629, flag: "🇨🇿" },
  { rank: 48, name: "智利", value: 3302.671374, flag: "🇨🇱" },
  { rank: 49, name: "葡萄牙", value: 3132.711851, flag: "🇵🇹" },
  { rank: 50, name: "芬兰", value: 2986.969613, flag: "🇫🇮" },
  { rank: 51, name: "哈萨克斯坦", value: 2914.802746, flag: "🇰🇿" },
  { rank: 52, name: "秘鲁", value: 2892.219691, flag: "🇵🇪" },
  { rank: 53, name: "伊拉克", value: 2796.412576, flag: "🇮🇶" },
  { rank: 54, name: "阿尔及利亚", value: 2693.222817, flag: "🇩🇿" },
  { rank: 55, name: "新西兰", value: 2601.723851, flag: "🇳🇿" },
  { rank: 56, name: "希腊", value: 2562.383718, flag: "🇬🇷" },
  { rank: 57, name: "尼日利亚", value: 2522.618801, flag: "🇳🇬" },
  { rank: 58, name: "匈牙利", value: 2227.227389, flag: "🇭🇺" },
  { rank: 59, name: "卡塔尔", value: 2191.626374, flag: "🇶🇦" },
  { rank: 60, name: "乌克兰", value: 1907.412624, flag: "🇺🇦" },
  { rank: 61, name: "摩洛哥", value: 1606.109941, flag: "🇲🇦" },
  { rank: 62, name: "科威特", value: 1602.272731, flag: "🇰🇼" },
  { rank: 63, name: "埃塞俄比亚", value: 1497.40298, flag: "🇪🇹" },
  { rank: 64, name: "斯洛伐克", value: 1409.340765, flag: "🇸🇰" },
  { rank: 65, name: "波多黎各", value: 1260.29527, flag: "🇵🇷" },
  { rank: 66, name: "厄瓜多尔", value: 1246.760747, flag: "🇪🇨" },
  { rank: 67, name: "多米尼加", value: 1242.822456, flag: "🇩🇴" },
  { rank: 68, name: "肯尼亚", value: 1203.395579, flag: "🇰🇪" },
  { rank: 69, name: "委内瑞拉", value: 1198.029633, flag: "🇻🇪" },
  { rank: 70, name: "乌兹别克斯坦", value: 1149.652935, flag: "🇺🇿" },
  { rank: 71, name: "保加利亚", value: 1133.433558, flag: "🇧🇬" },
  { rank: 72, name: "危地马拉", value: 1131.995812, flag: "🇬🇹" },
  { rank: 73, name: "阿曼", value: 1071.371988, flag: "🇴🇲" },
  { rank: 74, name: "安哥拉", value: 1009.989168, flag: "🇦🇴" },
  { rank: 75, name: "斯里兰卡", value: 989.631855, flag: "🇱🇰" },
  { rank: 76, name: "哥斯达黎加", value: 953.504232, flag: "🇨🇷" },
  { rank: 77, name: "卢森堡", value: 932.798519, flag: "🇱🇺" },
  { rank: 78, name: "克罗地亚", value: 929.838103, flag: "🇭🇷" },
  { rank: 79, name: "塞尔维亚", value: 900.97766, flag: "🇷🇸" },
  { rank: 80, name: "科特迪瓦", value: 871.131792, flag: "🇨🇮" },
  { rank: 81, name: "巴拿马", value: 865.239591, flag: "🇵🇦" },
  { rank: 82, name: "立陶宛", value: 848.692155, flag: "🇱🇹" },
  { rank: 83, name: "加纳", value: 823.081104, flag: "🇬🇭" },
  { rank: 84, name: "乌拉圭", value: 809.615111, flag: "🇺🇾" },
  { rank: 85, name: "坦桑尼亚", value: 788.444054, flag: "🇹🇿" },
  { rank: 86, name: "白俄罗斯", value: 759.618655, flag: "🇧🇾" },
  { rank: 87, name: "阿塞拜疆", value: 743.158824, flag: "🇦🇿" },
  { rank: 88, name: "缅甸", value: 740.683495, flag: "🇲🇲" },
  { rank: 89, name: "斯洛文尼亚", value: 729.720152, flag: "🇸🇮" },
  { rank: 90, name: "刚果（金）", value: 709.621858, flag: "🇨🇩" },
  { rank: 91, name: "玻利维亚", value: 548.813275, flag: "🇧🇴" },
  { rank: 92, name: "乌干达", value: 539.119071, flag: "🇺🇬" },
  { rank: 93, name: "约旦", value: 533.522896, flag: "🇯🇴" },
  { rank: 94, name: "喀麦隆", value: 532.966943, flag: "🇨🇲" },
  { rank: 95, name: "土库曼斯坦", value: 513.872099, flag: "🇹🇲" },
  { rank: 96, name: "突尼斯", value: 513.322857, flag: "🇹🇳" },
  { rank: 97, name: "苏丹", value: 496.724355, flag: "🇸🇩" },
  { rank: 98, name: "中国澳门", value: 494.672589, flag: "🇲🇴" },
  { rank: 99, name: "利比亚", value: 484.871512, flag: "🇱🇾" },
  { rank: 100, name: "巴林", value: 471.097343, flag: "🇧🇭" },
  { rank: 101, name: "柬埔寨", value: 463.52647, flag: "🇰🇭" },
  { rank: 102, name: "巴拉圭", value: 444.581184, flag: "🇵🇾" },
  { rank: 103, name: "拉脱维亚", value: 436.842544, flag: "🇱🇻" },
  { rank: 104, name: "爱沙尼亚", value: 431.304198, flag: "🇪🇪" },
  { rank: 105, name: "尼泊尔", value: 429.142683, flag: "🇳🇵" },
  { rank: 106, name: "津巴布韦", value: 415.394115, flag: "🇿🇼" },
  { rank: 107, name: "塞浦路斯", value: 376.345333, flag: "🇨🇾" },
  { rank: 108, name: "洪都拉斯", value: 370.935659, flag: "🇭🇳" },
  { rank: 109, name: "萨尔瓦多", value: 353.6496, flag: "🇸🇻" },
  { rank: 110, name: "格鲁吉亚", value: 341.894235, flag: "🇬🇪" },
  { rank: 111, name: "冰岛", value: 332.551815, flag: "🇮🇸" },
  { rank: 112, name: "塞内加尔", value: 328.080566, flag: "🇸🇳" },
  { rank: 113, name: "巴布亚新几内亚", value: 318.004283, flag: "🇵🇬" },
  { rank: 114, name: "波黑", value: 296.13572, flag: "🇧🇦" },
  { rank: 115, name: "阿尔巴尼亚", value: 270.464293, flag: "🇦🇱" },
  { rank: 116, name: "马里", value: 267.947472, flag: "🇲🇱" },
  { rank: 117, name: "亚美尼亚", value: 259.552754, flag: "🇦🇲" },
  { rank: 118, name: "特立尼达和多巴哥", value: 256.335445, flag: "🇹🇹" },
  { rank: 119, name: "赞比亚", value: 253.031853, flag: "🇿🇲" },
  { rank: 120, name: "海地", value: 252.24155, flag: "🇭🇹" },
  { rank: 121, name: "几内亚", value: 250.086783, flag: "🇬🇳" },
  { rank: 122, name: "马耳他", value: 249.715745, flag: "🇲🇹" },
  { rank: 123, name: "圭亚那", value: 246.627098, flag: "🇬🇾" },
  { rank: 124, name: "蒙古", value: 237.9454, flag: "🇲🇳" },
  { rank: 125, name: "布基纳法索", value: 231.247299, flag: "🇧🇫" },
  { rank: 126, name: "莫桑比克", value: 227.453413, flag: "🇲🇿" },
  { rank: 127, name: "牙买加", value: 220.143971, flag: "🇯🇲" },
  { rank: 128, name: "贝宁", value: 214.826437, flag: "🇧🇯" },
  { rank: 129, name: "加蓬", value: 208.956844, flag: "🇬🇦" },
  { rank: 130, name: "尼日尔", value: 198.761285, flag: "🇳🇪" },
  { rank: 131, name: "尼加拉瓜", value: 196.93983, flag: "🇳🇮" },
  { rank: 132, name: "乍得", value: 195.188198, flag: "🇹🇩" },
  { rank: 133, name: "博茨瓦纳", value: 194.020635, flag: "🇧🇼" },
  { rank: 134, name: "摩尔多瓦", value: 182.003409, flag: "🇲🇩" },
  { rank: 135, name: "吉尔吉斯斯坦", value: 174.782597, flag: "🇰🇬" },
  { rank: 136, name: "马达加斯加", value: 174.205015, flag: "🇲🇬" },
  { rank: 137, name: "北马其顿", value: 169.516823, flag: "🇲🇰" },
  { rank: 138, name: "老挝", value: 165.029331, flag: "🇱🇦" },
  { rank: 139, name: "巴哈马", value: 158.328, flag: "🇧🇸" },
  { rank: 140, name: "刚果（布）", value: 157.199861, flag: "🇨🇬" },
  { rank: 141, name: "文莱", value: 153.408086, flag: "🇧🇳" },
  { rank: 142, name: "毛里求斯", value: 149.378618, flag: "🇲🇺" },
  { rank: 143, name: "卢旺达", value: 142.516422, flag: "🇷🇼" },
  { rank: 144, name: "塔吉克斯坦", value: 142.045756, flag: "🇹🇯" },
  { rank: 145, name: "纳米比亚", value: 133.723545, flag: "🇳🇦" },
  { rank: 146, name: "赤道几内亚", value: 127.657777, flag: "🇬🇶" },
  { rank: 147, name: "索马里", value: 119.67, flag: "🇸🇴" },
  { rank: 148, name: "马拉维", value: 113.164113, flag: "🇲🇼" },
  { rank: 149, name: "科索沃", value: 111.972463, flag: "🇽🇰" },
  { rank: 150, name: "摩纳哥", value: 111.257834, flag: "🇲🇨" },
  { rank: 151, name: "毛里塔尼亚", value: 109.080457, flag: "🇲🇷" },
  { rank: 152, name: "多哥", value: 106.511802, flag: "🇹🇬" },
  { rank: 153, name: "百慕大", value: 92.336, flag: "🇧🇲" },
  { rank: 154, name: "新喀里多尼亚", value: 85.489194, flag: "🇳🇨" },
  { rank: 155, name: "黑山", value: 82.700167, flag: "🇲🇪" },
  { rank: 156, name: "巴巴多斯", value: 74.9805, flag: "🇧🇧" },
  { rank: 157, name: "马尔代夫", value: 70.616083, flag: "🇲🇻" },
  { rank: 158, name: "塞拉利昂", value: 69.711272, flag: "🇸🇱" },
  { rank: 159, name: "法属波利尼西亚", value: 63.237164, flag: "🇵🇫" },
  { rank: 160, name: "斐济", value: 59.681259, flag: "🇫🇯" },
  { rank: 161, name: "斯威士兰", value: 48.588858, flag: "🇸🇿" },
  { rank: 162, name: "利比里亚", value: 47.793009, flag: "🇱🇷" },
  { rank: 163, name: "苏里南", value: 44.167751, flag: "🇸🇷" },
  { rank: 164, name: "阿鲁巴", value: 42.656507, flag: "🇦🇼" },
  { rank: 165, name: "吉布提", value: 41.521459, flag: "🇩🇯" },
  { rank: 166, name: "法罗群岛", value: 40.529372, flag: "🇫🇴" },
  { rank: 167, name: "安道尔", value: 40.398424, flag: "🇦🇩" },
  { rank: 168, name: "库拉索", value: 35.611782, flag: "🇨🇼" },
  { rank: 169, name: "伯利兹", value: 32.036318, flag: "🇧🇿" },
  { rank: 170, name: "布隆迪", value: 30.824331, flag: "🇧🇮" },
  { rank: 171, name: "中非", value: 27.514943, flag: "🇨🇫" },
  { rank: 172, name: "佛得角", value: 27.254142, flag: "🇨🇻" },
  { rank: 173, name: "圣卢西亚", value: 25.49063, flag: "🇱🇨" },
  { rank: 174, name: "冈比亚", value: 24.048887, flag: "🇬🇲" },
  { rank: 175, name: "莱索托", value: 22.717595, flag: "🇱🇸" },
  { rank: 176, name: "几内亚比绍", value: 22.183938, flag: "🇬🇼" },
  { rank: 177, name: "安提瓜和巴布达", value: 22.076229, flag: "🇦🇬" },
  { rank: 178, name: "塞舌尔", value: 21.672396, flag: "🇸🇨" },
  { rank: 179, name: "东帝汶", value: 18.656085, flag: "🇹🇱" },
  { rank: 180, name: "荷属圣马丁", value: 17.978367, flag: "🇸🇽" },
  { rank: 181, name: "特克斯和凯科斯群岛", value: 17.45378, flag: "🇹🇨" },
  { rank: 182, name: "所罗门群岛", value: 15.839647, flag: "🇸🇧" },
  { rank: 183, name: "科摩罗", value: 14.409915, flag: "🇰🇲" },
  { rank: 184, name: "格林纳达", value: 13.719185, flag: "🇬🇩" },
  { rank: 185, name: "萨摩亚", value: 11.757498, flag: "🇼🇸" },
  { rank: 186, name: "圣文森特和格林纳丁斯", value: 11.572074, flag: "🇻🇨" },
  { rank: 187, name: "圣基茨和尼维斯", value: 11.223889, flag: "🇰🇳" },
  { rank: 188, name: "瓦努阿图", value: 11.17972, flag: "🇻🇺" },
  { rank: 189, name: "圣多美和普林西比", value: 8.221546, flag: "🇸🇹" },
  { rank: 190, name: "多米尼克", value: 6.888815, flag: "🇩🇲" },
  { rank: 191, name: "密克罗尼西亚", value: 4.714251, flag: "🇫🇲" },
  { rank: 192, name: "基里巴斯", value: 3.078626, flag: "🇰🇮" },
  { rank: 193, name: "马绍尔群岛", value: 2.901085, flag: "🇲🇭" },
  { rank: 194, name: "瑙鲁", value: 1.625886, flag: "🇳🇷" },
  { rank: 195, name: "阿富汗", value: 0, flag: "🇦🇫" },
  { rank: 196, name: "美属萨摩亚", value: 0, flag: "🇦🇸" },
  { rank: 197, name: "不丹", value: 0, flag: "🇧🇹" },
  { rank: 198, name: "海峡群岛", value: 0, flag: "🇯🇪" },
  { rank: 199, name: "古巴", value: 0, flag: "🇨🇺" },
  { rank: 200, name: "开曼群岛", value: 0, flag: "🇰🇾" },
  { rank: 201, name: "厄立特里亚", value: 0, flag: "🇪🇷" },
  { rank: 202, name: "直布罗陀", value: 0, flag: "🇬🇮" },
  { rank: 203, name: "格陵兰", value: 0, flag: "🇬🇱" },
  { rank: 204, name: "关岛", value: 0, flag: "🇬🇺" },
  { rank: 205, name: "马恩岛", value: 0, flag: "🇮🇲" },
  { rank: 206, name: "黎巴嫩", value: 0, flag: "🇱🇧" },
  { rank: 207, name: "列支敦士登", value: 0, flag: "🇱🇮" },
  { rank: 208, name: "法属圣马丁", value: 0, flag: "🇫🇷" },
  { rank: 209, name: "北马里亚纳群岛", value: 0, flag: "🇲🇵" },
  { rank: 210, name: "帕劳", value: 0, flag: "🇵🇼" },
  { rank: 211, name: "朝鲜", value: 0, flag: "🇰🇵" },
  { rank: 212, name: "圣马力诺", value: 0, flag: "🇸🇲" },
  { rank: 213, name: "南苏丹", value: 0, flag: "🇸🇸" },
  { rank: 214, name: "叙利亚", value: 0, flag: "🇸🇾" },
  { rank: 215, name: "汤加", value: 0, flag: "🇹🇴" },
  { rank: 216, name: "图瓦卢", value: 0, flag: "🇹🇻" },
  { rank: 217, name: "英属维尔京群岛", value: 0, flag: "🇻🇬" },
  { rank: 218, name: "美属维尔京群岛", value: 0, flag: "🇻🇮" },
  { rank: 219, name: "也门", value: 0, flag: "🇾🇪" }
];

const allGdpRows = [...gdpRows, ...gdpExtraRows].map((row) => ({
  ...row,
  flag: row.flag || gdpFlags[row.rank] || "🏳️"
}));

let countryDisplayRank = 0;
const displayGdpRows = allGdpRows
  .sort((a, b) => a.rank - b.rank)
  .map((row, index) => ({
    ...row,
    chartRank: index + 1,
    displayRank: row.isMusk ? null : (countryDisplayRank += 1)
  }));

const companyRows = [
  { rank: 1, name: "英伟达", value: 54125.60568, logoSrc: "./assets/company-logos/nvidia.png" },
  { rank: 2, name: "谷歌", value: 46632.34003, logoSrc: "./assets/company-logos/google.png" },
  { rank: 3, name: "苹果", value: 44392.53451, logoSrc: "./assets/company-logos/apple.png" },
  { rank: 4, name: "微软", value: 31278.16749, logoSrc: "./assets/company-logos/microsoft.png" },
  { rank: 5, name: "亚马逊", value: 28507.41813, logoSrc: "./assets/company-logos/amazon.png" },
  { rank: 6, name: "台积电", value: 20829.91636, logoSrc: "./assets/company-logos/tsmc.png" },
  { rank: 7, name: "博通", value: 19779.55123, logoSrc: "./assets/company-logos/broadcom.png" },
  { rank: 8, name: "沙特阿美", value: 17960.61308, logoSrc: "./assets/company-logos/saudi-aramco.png" },
  { rank: 9, name: "特斯拉", value: 15671.13347, logoSrc: "./assets/company-logos/tesla.png" },
  { rank: 10, name: "Meta", value: 15358.98419, logoSrc: "./assets/company-logos/meta.png" },
  { rank: 11, name: "三星", value: 12794.58952, logoSrc: "./assets/company-logos/samsung.png" },
  { rank: 12, name: "沃尔玛", value: 10430.04195, logoSrc: "./assets/company-logos/walmart.png" },
  { rank: 13, name: "伯克希尔哈撒韦", value: 10372.30932, logoSrc: "./assets/company-logos/berkshire.png" },
  { rank: 14, name: "马斯克", value: 10000, isMusk: true, logoSrc: "./assets/company-logos/musk.png" },
  { rank: 15, name: "海力士", value: 9160.912119, logoSrc: "./assets/company-logos/sk-hynix.png" },
  { rank: 16, name: "礼来", value: 9085.685596, logoSrc: "./assets/company-logos/eli-lilly.png" },
  { rank: 17, name: "美光科技", value: 8254.900142, logoSrc: "./assets/company-logos/micron.png" },
  { rank: 18, name: "摩根大通", value: 8091.588362, logoSrc: "./assets/company-logos/jpmorgan.png" },
  { rank: 19, name: "超威半导体", value: 7298.241659, logoSrc: "./assets/company-logos/amd.png" },
  { rank: 20, name: "埃克森美孚", value: 6477.72373, logoSrc: "./assets/company-logos/exxon.png" },
  { rank: 21, name: "维萨", value: 6290.017485 },
  { rank: 22, name: "英特尔", value: 5978.929234 },
  { rank: 23, name: "阿斯麦", value: 5974.474752 },
  { rank: 24, name: "强生", value: 5520.229663 },
  { rank: 25, name: "甲骨文", value: 5411.568353 },
  { rank: 26, name: "腾讯", value: 5293.696614 },
  { rank: 27, name: "好市多", value: 4764.872868 },
  { rank: 28, name: "思科", value: 4507.030323 },
  { rank: 29, name: "万事达", value: 4400.60117 },
  { rank: 30, name: "卡特彼勒", value: 4018.941133 }
];

const exchangeRows = [
  { rank: 1, name: "纳斯达克美国", value: 349985 },
  { rank: 2, name: "纽约证券交易所", value: 309640.4855 },
  { rank: 3, name: "上海证券交易所", value: 101859.967 },
  { rank: 4, name: "泛欧交易所", value: 86784.4056 },
  { rank: 5, name: "日本交易所集团", value: 76434.3036 },
  { rank: 6, name: "深圳证券交易所", value: 63623.3618 },
  { rank: 7, name: "香港交易所", value: 58598.5286 },
  { rank: 8, name: "多伦多交易所集团", value: 47109.824 },
  { rank: 9, name: "印度国家证券交易所", value: 43366.3896 },
  { rank: 10, name: "印度孟买证券交易所", value: 43343.9698 },
  { rank: 11, name: "台湾证券交易所", value: 32349.7049 },
  { rank: 12, name: "韩国交易所", value: 31110.3777 },
  { rank: 13, name: "德意志交易所", value: 26611.0088 },
  { rank: 14, name: "沙特交易所", value: 26356.7513 },
  { rank: 15, name: "瑞士证券交易所", value: 24487.2251 },
  { rank: 16, name: "澳大利亚证券交易所", value: 22535.7363 },
  { rank: 17, name: "纳斯达克北欧及波罗的海市场", value: 22102.5781 },
  { rank: 18, name: "西班牙证券交易所", value: 14302.0259 },
  { rank: 19, name: "约翰内斯堡证券交易所", value: 13806.1932 },
  { rank: 20, name: "巴西证券期货交易所", value: 10371.7213 },
  { rank: 21, name: "马斯克", value: 10000, isMusk: true },
  { rank: 22, name: "新加坡交易所", value: 8513.6552 },
  { rank: 23, name: "阿布扎比证券交易所", value: 7533.3902 },
  { rank: 24, name: "印度尼西亚证券交易所", value: 7309.2719 },
  { rank: 25, name: "墨西哥证券交易所", value: 5926.0686 },
  { rank: 26, name: "泰国证券交易所", value: 5617.5834 },
  { rank: 27, name: "马来西亚交易所", value: 4937.8106 },
  { rank: 28, name: "伊斯坦布尔交易所", value: 4406.8745 },
  { rank: 29, name: "华沙证券交易所", value: 3218.7464 },
  { rank: 30, name: "胡志明证券交易所", value: 2989.3591 },
  { rank: 31, name: "圣地亚哥证券交易所", value: 2893.1193 },
  { rank: 32, name: "台北交易所", value: 2544.3516 },
  { rank: 33, name: "迪拜金融市场", value: 2356.8014 },
  { rank: 34, name: "菲律宾证券交易所", value: 2352.3207 },
  { rank: 35, name: "维也纳证券交易所", value: 2090.4942 },
  { rank: 36, name: "智利电子证券交易所", value: 1718.1992 },
  { rank: 37, name: "卡塔尔证券交易所", value: 1649.025 },
  { rank: 38, name: "科威特证券交易所", value: 1633.657 },
  { rank: 39, name: "哥伦比亚证券交易所", value: 1518.2992 },
  { rank: 40, name: "德黑兰证券交易所", value: 1220.449 },
  { rank: 41, name: "雅典证券交易所", value: 1217.5379 }
];

const scenes = {
  gdp: {
    kicker: "第一关 · 国家GDP",
    title: "相当于哪些国家的GDP",
    render: renderGdp
  },
  companies: {
    kicker: "第二关 · 公司市值",
    title: "相当于哪些公司的市值",
    render: renderCompanies
  },
  exchanges: {
    kicker: "第三关 · 交易所市值",
    title: "相当于哪些交易所的股票市值",
    render: renderExchanges
  },
  commodities: {
    kicker: "第四关 · 商品交易规模",
    title: "相当于哪些商品场内市值",
    render: renderCommodities
  }
};

const elements = {
  app: document.querySelector(".h5"),
  wealthCounter: document.querySelector("#wealthCounter"),
  scenePanel: document.querySelector("#scenePanel"),
  sceneKicker: document.querySelector("#sceneKicker"),
  sceneTitle: document.querySelector("#sceneTitle"),
  sceneContent: document.querySelector("#sceneContent"),
  closeScene: document.querySelector("#closeScene"),
  nextScene: document.querySelector("#nextScene"),
  openShare: document.querySelector("#openShare"),
  openComment: document.querySelector("#openComment"),
  downloadApp: document.querySelector("#downloadApp"),
  shareSheet: document.querySelector("#shareSheet"),
  commentSheet: document.querySelector("#commentSheet"),
  toast: document.querySelector("#toast"),
  sendComment: document.querySelector("#sendComment")
};

let toastTimer;
let companyTipTimer;
let currentSceneKey = "gdp";
const sceneOrder = ["gdp", "companies", "exchanges", "commodities"];

window.addEventListener("load", () => {
  animateCounter();
});

document.querySelectorAll("[data-scene]").forEach((button) => {
  button.addEventListener("click", () => openScene(button.dataset.scene));
});

elements.closeScene.addEventListener("click", closeScene);
elements.nextScene.addEventListener("click", openNextScene);
elements.openShare.addEventListener("click", () => openSheet(elements.shareSheet));
elements.openComment.addEventListener("click", () => openSheet(elements.commentSheet));

elements.downloadApp.addEventListener("click", () => {
  showToast("已预留金十数据下载跳转");
});

elements.sendComment.addEventListener("click", () => {
  const input = document.querySelector(".comment-input input");
  const text = input.value.trim();

  if (!text) {
    showToast("先写一句评论吧");
    return;
  }

  input.value = "";
  showToast("评论已提交到原型态");
});

document.querySelectorAll("[data-close-sheet]").forEach((button) => {
  button.addEventListener("click", () => {
    const isPosterAction = button.classList.contains("primary-action");
    closeSheet(elements.shareSheet);
    closeSheet(elements.commentSheet);

    if (isPosterAction) {
      showToast("已生成分享海报预览");
    }
  });
});

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-replay-gdp]")) {
    openScene("gdp");
    return;
  }

  if (event.target.closest("[data-replay-exchanges]")) {
    openScene("exchanges");
    return;
  }

  const tableToggle = event.target.closest("[data-toggle-gdp-table]");
  if (tableToggle) {
    tableToggle.closest(".gdp-rank-table")?.classList.add("is-expanded");
    return;
  }

  if (event.target.closest("[data-preview-toast]")) {
    showToast("这个路径已完成版式预留，等待正式数据接入");
    return;
  }

  const companyTip = event.target.closest("[data-company-tip]");
  if (companyTip) {
    showCompanyTip(companyTip, companyTip.dataset.companyTip);
    return;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeScene();
  closeSheet(elements.shareSheet);
  closeSheet(elements.commentSheet);
});

function animateCounter() {
  const duration = 1100;
  const start = performance.now();
  const end = 1000000000000;

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    elements.wealthCounter.textContent = Math.floor(end * eased).toLocaleString("en-US");

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

function openScene(key) {
  const scene = scenes[key];
  if (!scene) return;

  currentSceneKey = key;
  elements.sceneKicker.textContent = scene.kicker;
  elements.sceneTitle.textContent = scene.title;
  elements.sceneContent.innerHTML = scene.render();
  elements.app.classList.add("is-scene-open");
  elements.scenePanel.classList.add("is-open");
  elements.scenePanel.setAttribute("aria-hidden", "false");
  elements.scenePanel.scrollTop = 0;
  window.scrollTo(0, 0);

  if (key === "companies") {
    requestAnimationFrame(setupCompanyClusterDrag);
  }
}

function openNextScene() {
  const currentIndex = sceneOrder.indexOf(currentSceneKey);
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % sceneOrder.length : 0;
  openScene(sceneOrder[nextIndex]);
}

function closeScene() {
  elements.scenePanel.classList.remove("is-open");
  elements.scenePanel.setAttribute("aria-hidden", "true");
  elements.app.classList.remove("is-scene-open");
  window.scrollTo(0, 0);
}

function renderGdp() {
  const trackRows = displayGdpRows.slice().sort((a, b) => b.chartRank - a.chartRank);
  const step = 40;
  const centerOffset = 184;
  const findMilestoneRow = (value) => displayGdpRows
    .filter((row) => !row.isMusk && row.value <= value)
    .sort((a, b) => b.value - a.value)[0];
  const milestone1000 = findMilestoneRow(1000);
  const milestone5000 = findMilestoneRow(5000);
  const milestone8000 = findMilestoneRow(8000);
  const getMilestoneX = (row) => Math.round(centerOffset - trackRows.findIndex((item) => item.chartRank === row.chartRank) * step);
  const milestone1000X = getMilestoneX(milestone1000);
  const milestone5000X = getMilestoneX(milestone5000);
  const milestone8000X = getMilestoneX(milestone8000);
  const finalRightOffset = 304;
  const muskIndex = trackRows.findIndex((row) => row.isMusk);
  const topThirtyIndex = trackRows.findIndex((row) => row.displayRank === 30);
  const topThirtyX = Math.round(centerOffset - topThirtyIndex * step);
  const pauseX = Math.round(centerOffset - muskIndex * step);
  const endX = Math.round(finalRightOffset - (trackRows.length - 1) * step);
  const topThirtyRows = displayGdpRows
    .filter((row) => row.isMusk || (row.displayRank && row.displayRank <= 30))
    .sort((a, b) => a.chartRank - b.chartRank);
  const bars = trackRows
    .map((row) => {
      const maxValue = displayGdpRows[0].value;
      const height = row.value <= 0 ? 12 : Math.round(18 + (Math.log10(row.value + 1) / Math.log10(maxValue + 1)) * 430);
      const topClass = row.displayRank && row.displayRank <= 30 ? "is-top30" : "";
      const labelClass = (row.displayRank && row.displayRank <= 30) || row.isMusk ? "is-labeled" : "";

      return `
        <div class="gdp-bar ${topClass} ${labelClass} ${row.isMusk ? "is-musk" : ""}" style="--h:${height}px">
          <strong>${row.name}</strong>
          <i><span class="gdp-flag">${row.flag}</span></i>
          ${row.isMusk ? `<img class="gdp-landed-musk" src="./assets/musk-fly.png" alt="" />` : ""}
          ${row.displayRank && row.displayRank <= 30 ? `<b>#${String(row.displayRank).padStart(2, "0")}</b>` : ""}
        </div>
      `;
    })
    .join("");

  const zoomRows = displayGdpRows
    .filter((row) => row.isMusk || (row.displayRank && row.displayRank <= 20))
    .sort((a, b) => b.chartRank - a.chartRank);
  const zoomBars = zoomRows
    .map((row) => {
      const maxValue = displayGdpRows[0].value;
      const height = row.value <= 0 ? 16 : Math.round(22 + (Math.log10(row.value + 1) / Math.log10(maxValue + 1)) * 390);
      const showName = row.isMusk || [1, 2, 3, 5, 10, 15, 18].includes(row.displayRank);

      return `
        <div class="gdp-mini-bar ${row.isMusk ? "is-musk" : ""}" style="--mh:${height}px">
          ${showName ? `<strong>${row.name}</strong>` : ""}
          <i><span>${row.flag}</span></i>
        </div>
      `;
    })
    .join("");

  const tableRows = topThirtyRows
    .map((row) => {
      const ratio = row.value / MUSK_WEALTH;
      const isSummaryRow = row.isMusk || row.displayRank <= 3 || row.displayRank >= 18;
      const rowClass = [row.isMusk ? "is-musk" : "", isSummaryRow ? "" : "is-hidden-summary"].filter(Boolean).join(" ");
      const moreRow = row.displayRank === 4
        ? `
          <tr class="gdp-table-more">
            <td colspan="4">
              <span>...</span>
              <button type="button" data-toggle-gdp-table>查看全部</button>
            </td>
          </tr>
        `
        : "";

      return `
        ${moreRow}
        <tr class="${rowClass}">
          <td>${row.isMusk ? "—" : `#${String(row.displayRank).padStart(2, "0")}`}</td>
          <td><span class="table-flag">${row.flag}</span><span>${row.name}</span></td>
          <td>${formatBillion(row.value)}</td>
          <td>${formatRatio(ratio)}</td>
        </tr>
      `;
    })
    .join("");

  return `
    <section class="gdp-cinema" style="--gdp-1000-x:${milestone1000X}px;--gdp-5000-x:${milestone5000X}px;--gdp-8000-x:${milestone8000X}px;--gdp-top30-x:${topThirtyX}px;--gdp-pause-x:${pauseX}px;--gdp-end-x:${endX}px;--gdp-duration:22s" aria-label="国家GDP像素分镜">
      <div class="gdp-unit">单位：亿美元</div>
      <button class="gdp-replay" type="button" data-replay-gdp>重新播放</button>
      <div class="gdp-watermark" aria-hidden="true"></div>
      <div class="gdp-milestone gdp-milestone-1000">
        <b>2020年</b>
        <span>马斯克身家达到1000亿</span>
        <strong>超过${milestone1000.name}GDP</strong>
      </div>
      <div class="gdp-milestone gdp-milestone-5000">
        <b>2021年</b>
        <span>马斯克身家达到5000亿</span>
        <strong>超过${milestone5000.name}GDP</strong>
      </div>
      <div class="gdp-milestone gdp-milestone-8000">
        <b>2025年</b>
        <span>马斯克身家达到8000亿</span>
        <strong>超过${milestone8000.name}GDP</strong>
      </div>
      <div class="gdp-track">
        ${bars}
      </div>
      <div class="gdp-zoom-map" aria-label="马斯克前方GDP前20名">
        ${zoomBars}
      </div>
      <div class="gdp-fly-layer">
        <img class="gdp-musk-fly" src="./assets/musk-fly.png" alt="飞行中的马斯克" />
      </div>
      <div class="gdp-bubble">
        <b>马斯克身家</b>
        <span>达到1万亿</span>
        <strong>超越197个经济体GDP</strong>
      </div>
    </section>

    <section class="gdp-rank-table" aria-label="全球GDP前30名与马斯克">
      <h3>全球GDP前30名与马斯克</h3>
      <table>
        <thead>
          <tr>
            <th>排名</th>
            <th>国家</th>
            <th>2024GDP(亿美元)</th>
            <th>相当于马斯克身家</th>
          </tr>
        </thead>
        <tbody>${tableRows}</tbody>
      </table>
    </section>
  `;
}

function renderCompanies() {
  const clusterLayout = [
    { size: 116, x: 136, y: 260 },
    { size: 102, x: 60, y: 386 },
    { size: 100, x: 38, y: 244 },
    { size: 100, x: 136, y: 92 },
    { size: 100, x: 248, y: 222 },
    { size: 84, x: 288, y: 338 },
    { size: 76, x: 249, y: 430 },
    { size: 70, x: 168, y: 464 },
    { size: 66, x: 98, y: 496 },
    { size: 62, x: 10, y: 360 },
    { size: 62, x: 64, y: 146 },
    { size: 58, x: 254, y: 104 },
    { size: 56, x: 318, y: 180 },
    { size: 68, x: 193, y: 192 },
    { size: 44, x: 333, y: 298 },
    { size: 42, x: 14, y: 464 },
    { size: 42, x: 325, y: 438 },
    { size: 40, x: 190, y: 386 },
    { size: 40, x: 232, y: 394 },
    { size: 36, x: 196, y: 430 },
    { size: 40, x: 0, y: 298 },
    { size: 38, x: 118, y: 198 },
    { size: 38, x: 314, y: 100 },
    { size: 38, x: 52, y: 526 },
    { size: 38, x: 160, y: 552 },
    { size: 38, x: 256, y: 544 },
    { size: 36, x: 342, y: 134 },
    { size: 36, x: 6, y: 518 },
    { size: 36, x: 342, y: 562 },
    { size: 36, x: 6, y: 564 }
  ];
  const planets = companyRows
    .slice(0, 30)
    .map((row, index) => {
      const layout = clusterLayout[index] || { size: 48, x: 240, y: 680 };
      const planetType = row.isMusk ? "is-mars" : row.value >= MUSK_WEALTH ? "is-mercury" : "is-saturn";
      const sizeClass = layout.size >= 78 ? "is-large" : layout.size <= 46 ? "is-tiny" : "is-compact";
      const hasLogo = Boolean(row.logoSrc);
      const logo = row.logoSrc
        ? `<span class="company-logo-mark"><img class="company-logo-img" src="${row.logoSrc}" alt="" /></span>`
        : "";
      const marketValueText = formatMarketPlanetValue(row.value);
      const tip = row.isMusk
        ? `马斯克身家：${marketValueText}`
        : `排名：#${String(row.rank).padStart(2, "0")}\n公司：${row.name}\n市值：${marketValueText}`;
      const showName = row.isMusk || layout.size >= 52 || !row.logoSrc;
      const displayName = layout.size <= 40 && !row.logoSrc && row.name.length > 3
        ? row.name.slice(0, 2)
        : row.name;

      return `
        <button class="company-cluster-planet company-planet ${planetType} ${sizeClass} ${hasLogo ? "has-logo" : "no-logo"} ${row.isMusk ? "is-musk" : ""}" type="button" style="--size:${layout.size}px;--x:${layout.x}px;--y:${layout.y}px;--delay:${index * 0.018}s;--z:${row.isMusk ? 80 : 70 - index}" data-company-tip="${tip}" aria-label="${tip}">
          ${!row.isMusk && row.rank <= 15 ? `<span class="company-rank-tag">#${String(row.rank).padStart(2, "0")}</span>` : ""}
          ${logo}
          ${showName ? `<strong>${displayName}</strong>` : ""}
        </button>
      `;
    })
    .join("");
  const tableRows = renderCompanyRankTableRows(companyRows);

  return `
    <section class="market-cinema company-cinema" aria-label="公司市值紧凑星球榜">
      <div class="gdp-unit">单位：亿美元</div>
      <div class="gdp-watermark" aria-hidden="true"></div>
      <div class="company-cluster-viewport">
        <div class="company-cluster-field">
          ${planets}
        </div>
      </div>
    </section>

    <section class="gdp-rank-table market-rank-table" aria-label="公司市值排行与马斯克">
      <h3>公司市值排行与马斯克</h3>
      <table>
        <thead>
          <tr>
            <th>排名</th>
            <th>公司</th>
            <th>市值(亿美元)</th>
            <th>相当于马斯克身家</th>
          </tr>
        </thead>
        <tbody>${tableRows}</tbody>
      </table>
    </section>
  `;
}

function renderExchanges() {
  const exchangeOvertakeCount = 63;
  const processRows = exchangeRows.filter((row) => !row.isMusk && row.rank > 21).slice(0, 15);
  const staticCars = processRows
    .map((row, index) => {
      const lane = index % 3;
      const line = Math.floor(index / 3);
      const x = [0, 76, 152][lane];
      const y = line * 88 + (lane === 1 ? 16 : 34);

      return `
        <div class="race-overtake-car" style="--x:${x}px;--y:${y}px">
          <div class="race-car is-blue"><img src="./assets/race-blue.png" alt="" /></div>
          <strong>${row.name}</strong>
        </div>
      `;
    })
    .join("");
  const finalSlots = {
    1: [3, 1],
    2: [2, 2], 3: [4, 2],
    4: [1, 3], 5: [2, 3], 6: [3, 3], 7: [4, 3], 8: [5, 3],
    9: [1, 4], 10: [2, 4], 11: [3, 4], 12: [4, 4], 13: [5, 4],
    14: [1, 5], 15: [2, 5], 16: [3, 5], 17: [4, 5], 18: [5, 5],
    19: [2, 6], 20: [3, 6], 21: [4, 6]
  };
  const finalRows = [
    ...exchangeRows.filter((row) => !row.isMusk && row.rank <= 20),
    { ...exchangeRows.find((row) => row.isMusk), displayRank: 21 }
  ].map((row) => ({
    ...row,
    displayRank: row.displayRank || row.rank
  }));
  const finalCars = finalRows
    .sort((a, b) => a.displayRank - b.displayRank)
    .map((row) => {
      const [col, line] = finalSlots[row.displayRank] || [1, 1];

      return `
        <div class="race-final-car ${row.isMusk ? "is-musk-final" : ""}" style="grid-column:${col};grid-row:${line}">
          ${row.isMusk ? "" : `<b>#${String(row.displayRank).padStart(2, "0")}</b>`}
          <div class="race-car ${row.isMusk ? "is-red" : "is-blue"}"><img src="./assets/${row.isMusk ? "race-red" : "race-blue"}.png" alt="" /></div>
          <span class="race-final-text">
            <strong>${row.isMusk ? "马斯克" : row.name}</strong>
            <em>${formatBillion(row.value)}</em>
          </span>
        </div>
      `;
    })
    .join("");
  const tableRows = renderExchangeRankTableRows(exchangeRows);

  return `
    <section class="market-cinema exchange-cinema" aria-label="交易所像素风赛车超车">
      <div class="gdp-unit">单位：亿美元</div>
      <button class="gdp-replay" type="button" data-replay-exchanges>重新播放</button>
      <div class="gdp-watermark" aria-hidden="true"></div>
      <div class="exchange-race-track">
        <div class="race-process">
          <div class="race-counter">马斯克正在超越身后的 <b>${exchangeOvertakeCount}</b> 个交易所</div>
          <div class="race-main-lane">
            ${staticCars}
          </div>
          <div class="race-overtake-lanes" aria-hidden="true">
            <i></i>
            <i></i>
          </div>
          <div class="race-musk-runner">
            <div class="race-car is-red"><img src="./assets/race-red.png" alt="" /></div>
            <strong>马斯克</strong>
          </div>
        </div>
        <div class="race-final-grid" aria-label="马斯克合流展示">
          ${finalCars}
          <div class="race-final-summary">
            <span>马斯克身家 1万亿</span>
            <strong>超过${exchangeOvertakeCount}个交易所市值</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="gdp-rank-table market-rank-table" aria-label="交易所市值排行与马斯克">
      <h3>交易所市值排行与马斯克</h3>
      <table>
        <thead>
          <tr>
            <th>排名</th>
            <th>交易所</th>
            <th>市值(亿美元)</th>
            <th>相当于马斯克身家</th>
          </tr>
        </thead>
        <tbody>${tableRows}</tbody>
      </table>
    </section>
  `;
}

function renderExchangeRankTableRows(rows) {
  return rows
    .slice()
    .sort((a, b) => a.rank - b.rank)
    .map((row) => {
      const ratio = row.value / MUSK_WEALTH;
      const isSummaryRow = row.rank <= 3 || row.rank >= 21;
      const rowClass = [row.isMusk ? "is-musk" : "", isSummaryRow ? "" : "is-hidden-summary"].filter(Boolean).join(" ");
      const moreRow = row.rank === 4
        ? `
          <tr class="gdp-table-more">
            <td colspan="4">
              <span>...</span>
              <button type="button" data-toggle-gdp-table>查看全部</button>
            </td>
          </tr>
        `
        : "";

      return `
        ${moreRow}
        <tr class="${rowClass}">
          <td>${row.isMusk ? "—" : `#${String(row.rank).padStart(2, "0")}`}</td>
          <td><span>${row.name}</span></td>
          <td>${formatBillion(row.value)}</td>
          <td>${formatRatio(ratio)}</td>
        </tr>
      `;
    })
    .join("");
}

function renderCompanyRankTableRows(rows) {
  return rows
    .slice()
    .sort((a, b) => a.rank - b.rank)
    .map((row) => {
      const ratio = row.value / MUSK_WEALTH;
      const isSummaryRow = row.rank <= 3 || row.rank >= 13;
      const rowClass = [row.isMusk ? "is-musk" : "", isSummaryRow ? "" : "is-hidden-summary"].filter(Boolean).join(" ");
      const moreRow = row.rank === 4
        ? `
          <tr class="gdp-table-more">
            <td colspan="4">
              <span>...</span>
              <button type="button" data-toggle-gdp-table>查看全部</button>
            </td>
          </tr>
        `
        : "";

      return `
        ${moreRow}
        <tr class="${rowClass}">
          <td>${row.isMusk ? "—" : `#${String(row.rank).padStart(2, "0")}`}</td>
          <td><span>${row.name}</span></td>
          <td>${formatBillion(row.value)}</td>
          <td>${formatRatio(ratio)}</td>
        </tr>
      `;
    })
    .join("");
}

function renderRankTableRows(rows) {
  return rows
    .slice()
    .sort((a, b) => a.rank - b.rank)
    .map((row) => {
      const ratio = row.value / MUSK_WEALTH;

      return `
        <tr class="${row.isMusk ? "is-musk" : ""}">
          <td>${row.isMusk ? "—" : `#${String(row.rank).padStart(2, "0")}`}</td>
          <td><span>${row.name}</span></td>
          <td>${formatBillion(row.value)}</td>
          <td>${formatRatio(ratio)}</td>
        </tr>
      `;
    })
    .join("");
}

function renderCommodities() {
  const rows = [
    {
      name: "马斯克身家",
      basis: "目标对比值",
      value: 10000,
      ratio: "1倍"
    },
    {
      name: "美债日均全市场交易量",
      basis: "2025年",
      value: 10000,
      ratio: "1倍"
    },
    {
      name: "黄金日均全市场交易量",
      basis: "2026年4月",
      value: 3939.7,
      ratio: "2.5倍"
    },
    {
      name: "原油日均场内交易量",
      basis: "以2024年交易所成交量与2026年4月原油均价估算",
      value: 3174.3,
      ratio: "3.2倍"
    }
  ];
  const tableRows = rows
    .map((row) => `
      <tr class="${row.name === "马斯克身家" ? "is-musk" : ""}">
        <td>${row.name}</td>
        <td><span>${row.basis}</span></td>
        <td>${formatBillion(row.value)}</td>
        <td>${row.ratio}</td>
      </tr>
    `)
    .join("");

  return `
    <section class="market-cinema commodity-cinema" aria-label="商品交易规模分镜">
      <div class="gdp-watermark" aria-hidden="true"></div>
      <figure class="commodity-static-musk">
        <span>马斯克身家</span>
        <img src="./assets/commodity-musk-full.png" alt="马斯克全身插画" />
        <strong>$1万亿</strong>
      </figure>
      <b class="commodity-equal">≈</b>
      <div class="commodity-asset-stage" aria-label="美债、黄金、原油依次出现">
        <figure class="commodity-asset-card commodity-bond-start">
          <div class="commodity-asset-copy">
            <p>2025年</p>
            <span>美债日均全市场交易量</span>
          </div>
          <div class="commodity-image-wrap">
            <img src="./assets/commodity-bond.png" alt="美债交易量插画" />
          </div>
          <strong>$1万亿</strong>
        </figure>
        <figure class="commodity-asset-card commodity-gold-card">
          <div class="commodity-asset-copy">
            <p>2026年4月</p>
            <span>黄金日均全市场交易量</span>
          </div>
          <div class="commodity-image-wrap">
            <img src="./assets/commodity-gold.png" alt="黄金交易量插画" />
            <em>x2.5</em>
          </div>
          <strong>$3939.7亿</strong>
        </figure>
        <figure class="commodity-asset-card commodity-oil-card">
          <div class="commodity-asset-copy">
            <p>以2024年交易所成交量与2026年4月原油均价估算</p>
            <span>原油日均场内交易量</span>
          </div>
          <div class="commodity-image-wrap">
            <img src="./assets/commodity-oil.png" alt="原油交易量插画" />
            <em>x3.2</em>
          </div>
          <strong>$3174.3亿</strong>
        </figure>
      </div>
    </section>

    <section class="gdp-rank-table commodity-rank-table" aria-label="商品交易规模与马斯克">
      <h3>商品交易规模与马斯克</h3>
      <table>
        <thead>
          <tr>
            <th>对象</th>
            <th>口径</th>
            <th>规模(亿美元)</th>
            <th>1万亿约等于</th>
          </tr>
        </thead>
        <tbody>${tableRows}</tbody>
      </table>
    </section>
  `;
}

function setupCompanyClusterDrag() {
  const viewport = elements.sceneContent.querySelector(".company-cluster-viewport");
  const field = elements.sceneContent.querySelector(".company-cluster-field");
  if (!viewport || !field) return;

  let dragging = false;
  let moved = false;
  let startX = 0;
  let startY = 0;
  let baseX = 0;
  let baseY = 0;
  let currentX = baseX;
  let currentY = baseY;
  let tapTarget = null;

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const apply = () => {
    field.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
  };

  apply();

  viewport.addEventListener("pointerdown", (event) => {
    dragging = true;
    moved = false;
    startX = event.clientX;
    startY = event.clientY;
    baseX = currentX;
    baseY = currentY;
    tapTarget = event.target.closest("[data-company-tip]");
    viewport.setPointerCapture?.(event.pointerId);
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!dragging) return;

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    if (Math.abs(deltaX) + Math.abs(deltaY) > 4) moved = true;

    currentX = clamp(baseX + deltaX, -8, 8);
    currentY = clamp(baseY + deltaY, -10, 8);
    apply();
  });

  const stopDragging = (event) => {
    if (!dragging) return;
    dragging = false;
    viewport.releasePointerCapture?.(event.pointerId);
    if (!moved && tapTarget) {
      event.preventDefault();
      event.stopPropagation();
      showCompanyTip(tapTarget, tapTarget.dataset.companyTip);
    }
    tapTarget = null;
  };

  viewport.addEventListener("pointerup", stopDragging);
  viewport.addEventListener("pointercancel", stopDragging);
  viewport.querySelectorAll("[data-company-tip]").forEach((planet) => {
    planet.addEventListener("click", (event) => {
      if (moved) return;
      event.preventDefault();
      event.stopPropagation();
      showCompanyTip(planet, planet.dataset.companyTip);
    });
  });
  viewport.addEventListener("click", (event) => {
    if (!moved) return;
    event.preventDefault();
    event.stopPropagation();
    moved = false;
  }, true);
}

function showCompanyTip(target, message) {
  const cinema = elements.sceneContent.querySelector(".company-cinema");
  if (!cinema) {
    showToast(message);
    return;
  }

  let tip = cinema.querySelector(".company-local-tip");
  if (!tip) {
    tip = document.createElement("div");
    tip.className = "company-local-tip";
    cinema.appendChild(tip);
  }

  const targetRect = target.getBoundingClientRect();
  const cinemaRect = cinema.getBoundingClientRect();
  const tipWidth = 148;
  const targetCenter = targetRect.left - cinemaRect.left + targetRect.width / 2;
  const left = Math.max(12, Math.min(targetCenter, cinemaRect.width - tipWidth - 12));
  const top = Math.max(54, targetRect.top - cinemaRect.top - 8);
  const rows = message.split("\n").map((line) => {
    const [label, ...valueParts] = line.split("：");
    const value = valueParts.join("：");
    return `<p><span>${escapeHtml(label)}：</span><strong>${escapeHtml(value)}</strong></p>`;
  }).join("");

  tip.innerHTML = rows;
  tip.style.left = `${left}px`;
  tip.style.top = `${top}px`;
  tip.classList.add("is-visible");

  clearTimeout(companyTipTimer);
  companyTipTimer = setTimeout(() => {
    tip.classList.remove("is-visible");
  }, 1800);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatBillion(value) {
  return Number(value).toLocaleString("zh-CN", {
    maximumFractionDigits: value >= 10000 ? 0 : 1
  });
}

function formatMarketPlanetValue(value) {
  if (value >= 10000) {
    const trillionText = (value / 10000).toLocaleString("zh-CN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).replace(/\.00$/, "");

    return `${trillionText}万亿`;
  }

  return `${Math.round(value).toLocaleString("zh-CN")}亿`;
}

function formatGdpChartValue(value, isMusk = false) {
  if (isMusk) return "1万亿";
  if (value >= 10000) {
    return `${(value / 10000).toLocaleString("zh-CN", { maximumFractionDigits: 1 })}万亿`;
  }

  return Number(value).toLocaleString("zh-CN", { maximumFractionDigits: 0 });
}

function formatGdpFullValue(value) {
  if (value >= 10000) {
    return `${(value / 10000).toLocaleString("zh-CN", { maximumFractionDigits: 1 })}万亿美元`;
  }

  return `${formatBillion(value)} 亿美元`;
}

function formatRatio(ratio) {
  if (Math.abs(ratio - 1) < 0.001) return "1倍";
  return `${ratio.toLocaleString("zh-CN", { maximumFractionDigits: ratio >= 10 ? 1 : 2 })}倍`;
}

function openSheet(sheet) {
  sheet.classList.add("is-open");
  sheet.setAttribute("aria-hidden", "false");
}

function closeSheet(sheet) {
  sheet.classList.remove("is-open");
  sheet.setAttribute("aria-hidden", "true");
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");

  toastTimer = setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 1800);
}
