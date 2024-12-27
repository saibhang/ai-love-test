// 生肖数据
const zodiacAnimals = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];

// 星座数据
const constellations = [
    { name: '水瓶座', start: '0120', end: '0218' },
    { name: '双鱼座', start: '0219', end: '0320' },
    { name: '白羊座', start: '0321', end: '0419' },
    { name: '金牛座', start: '0420', end: '0520' },
    { name: '双子座', start: '0521', end: '0621' },
    { name: '巨蟹座', start: '0622', end: '0722' },
    { name: '狮子座', start: '0723', end: '0822' },
    { name: '处女座', start: '0823', end: '0922' },
    { name: '天秤座', start: '0923', end: '1023' },
    { name: '天蝎座', start: '1024', end: '1122' },
    { name: '射手座', start: '1123', end: '1221' },
    { name: '摩羯座', start: '1222', end: '0119' }
];

// 生肖相合度数据
const zodiacCompatibility = {
    '鼠': { '鼠': 90, '牛': 70, '虎': 85, '兔': 75, '龙': 95, '蛇': 70, '马': 60, '羊': 65, '猴': 90, '鸡': 75, '狗': 80, '猪': 85 },
    '牛': { '鼠': 70, '牛': 90, '虎': 65, '兔': 85, '龙': 75, '蛇': 90, '马': 70, '羊': 65, '猴': 75, '鸡': 90, '狗': 75, '猪': 80 },
    '虎': { '鼠': 85, '牛': 65, '虎': 90, '兔': 80, '龙': 90, '蛇': 70, '马': 85, '羊': 80, '猴': 75, '鸡': 70, '狗': 95, '猪': 75 },
    '兔': { '鼠': 75, '牛': 85, '虎': 80, '兔': 90, '龙': 80, '蛇': 85, '马': 75, '羊': 90, '猴': 70, '鸡': 75, '狗': 80, '猪': 85 },
    '龙': { '鼠': 95, '牛': 75, '虎': 90, '兔': 80, '龙': 90, '蛇': 85, '马': 80, '羊': 75, '猴': 85, '鸡': 80, '狗': 70, '猪': 80 },
    '蛇': { '鼠': 70, '牛': 90, '虎': 70, '兔': 85, '龙': 85, '蛇': 90, '马': 75, '羊': 80, '猴': 85, '鸡': 90, '狗': 75, '猪': 70 },
    '马': { '鼠': 60, '牛': 70, '虎': 85, '兔': 75, '龙': 80, '蛇': 75, '马': 90, '羊': 90, '猴': 75, '鸡': 80, '狗': 85, '猪': 70 },
    '羊': { '鼠': 65, '牛': 65, '虎': 80, '兔': 90, '龙': 75, '蛇': 80, '马': 90, '羊': 90, '猴': 80, '鸡': 75, '狗': 80, '猪': 85 },
    '猴': { '鼠': 90, '牛': 75, '虎': 75, '兔': 70, '龙': 85, '蛇': 85, '马': 75, '羊': 80, '猴': 90, '鸡': 85, '狗': 75, '猪': 80 },
    '鸡': { '鼠': 75, '牛': 90, '虎': 70, '兔': 75, '龙': 80, '蛇': 90, '马': 80, '羊': 75, '猴': 85, '鸡': 90, '狗': 70, '猪': 75 },
    '狗': { '鼠': 80, '牛': 75, '虎': 95, '兔': 80, '龙': 70, '蛇': 75, '马': 85, '羊': 80, '猴': 75, '鸡': 70, '狗': 90, '猪': 85 },
    '猪': { '鼠': 85, '牛': 80, '虎': 75, '兔': 85, '龙': 80, '蛇': 70, '马': 70, '羊': 85, '猴': 80, '鸡': 75, '狗': 85, '猪': 90 }
};

// 星座相合度数据
const constellationCompatibility = {
    '水瓶座': { '水瓶座': 90, '双鱼座': 75, '白羊座': 85, '金牛座': 65, '双子座': 95, '巨蟹座': 60, '狮子座': 85, '处女座': 70, '天秤座': 95, '天蝎座': 65, '射手座': 90, '摩羯座': 70 },
    '双鱼座': { '水瓶座': 75, '双鱼座': 90, '白羊座': 70, '金牛座': 85, '双子座': 75, '巨蟹座': 95, '狮子座': 70, '处女座': 85, '天秤座': 75, '天蝎座': 95, '射手座': 70, '摩羯座': 85 },
    '白羊座': { '水瓶座': 85, '双鱼座': 70, '白羊座': 90, '金牛座': 75, '双子座': 85, '巨蟹座': 65, '狮子座': 95, '处女座': 70, '天秤座': 80, '天蝎座': 85, '射手座': 95, '摩羯座': 65 },
    '金牛座': { '水瓶座': 65, '双鱼座': 85, '白羊座': 75, '金牛座': 90, '双子座': 70, '巨蟹座': 95, '狮子座': 75, '处女座': 90, '天秤座': 80, '天蝎座': 95, '射手座': 65, '摩羯座': 95 },
    '双子座': { '水瓶座': 95, '双鱼座': 75, '白羊座': 85, '金牛座': 70, '双子座': 90, '巨蟹座': 75, '狮子座': 85, '处女座': 80, '天秤座': 95, '天蝎座': 70, '射手座': 90, '摩羯座': 65 },
    '巨蟹座': { '水瓶座': 60, '双鱼座': 95, '白羊座': 65, '金牛座': 95, '双子座': 75, '巨蟹座': 90, '狮子座': 75, '处女座': 85, '天秤座': 70, '天蝎座': 95, '射手座': 65, '摩羯座': 85 },
    '狮子座': { '水瓶座': 85, '双鱼座': 70, '白羊座': 95, '金牛座': 75, '双子座': 85, '巨蟹座': 75, '狮子座': 90, '处女座': 75, '天秤座': 90, '天蝎座': 75, '射手座': 95, '摩羯座': 70 },
    '处女座': { '水瓶座': 70, '双鱼座': 85, '白羊座': 70, '金牛座': 90, '双子座': 80, '巨蟹座': 85, '狮子座': 75, '处女座': 90, '天秤座': 75, '天蝎座': 90, '射手座': 70, '摩羯座': 95 },
    '天秤座': { '水瓶座': 95, '双鱼座': 75, '白羊座': 80, '金牛座': 80, '双子座': 95, '巨蟹座': 70, '狮子座': 90, '处女座': 75, '天秤座': 90, '天蝎座': 75, '射手座': 90, '摩羯座': 70 },
    '天蝎座': { '水瓶座': 65, '双鱼座': 95, '白羊座': 85, '金牛座': 95, '双子座': 70, '巨蟹座': 95, '狮子座': 75, '处女座': 90, '天秤座': 75, '天蝎座': 90, '射手座': 70, '摩羯座': 85 },
    '射手座': { '水瓶座': 90, '双鱼座': 70, '白羊座': 95, '金牛座': 65, '双子座': 90, '巨蟹座': 65, '狮子座': 95, '处女座': 70, '天秤座': 90, '天蝎座': 70, '射手座': 90, '摩羯座': 75 },
    '摩羯座': { '水瓶座': 70, '双鱼座': 85, '白羊座': 65, '金牛座': 95, '双子座': 65, '巨蟹座': 85, '狮子座': 70, '处女座': 95, '天秤座': 70, '天蝎座': 85, '射手座': 75, '摩羯座': 90 }
};

// 天干
const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
// 地支
const EARTHLY_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
// 五行
const FIVE_ELEMENTS = ['金', '木', '水', '火', '土'];
// 五行相生关系
const FIVE_ELEMENTS_GENERATING = {
    '金': '水',
    '水': '木',
    '木': '火',
    '火': '土',
    '土': '金'
};
// 五行相克关系
const FIVE_ELEMENTS_CONTROLLING = {
    '金': '木',
    '木': '土',
    '土': '水',
    '水': '火',
    '火': '金'
};

// 天干五行对应
const STEMS_TO_ELEMENTS = {
    '甲': '木', '乙': '木',
    '丙': '火', '丁': '火',
    '戊': '土', '己': '土',
    '庚': '金', '辛': '金',
    '壬': '水', '癸': '水'
};

// 地支五行对应
const BRANCHES_TO_ELEMENTS = {
    '子': '水', '丑': '土', '寅': '木',
    '卯': '木', '辰': '土', '巳': '火',
    '午': '火', '未': '土', '申': '金',
    '酉': '金', '戌': '土', '亥': '水'
};

// 五行关系解释
const FIVE_ELEMENTS_RELATIONS = {
    '金生水': '你性格坚毅果断，能给对方带来安全感和保护；对方则能包容理解你的决定，是很好的互补。',
    '水生木': '对方富有创造力和进取心，而你能滋养对方的梦想，帮助其成长，是很好的搭配。',
    '木生火': '你的热情能激发对方的创造力，对方的规划能力也能为你指明方向，彼此促进。',
    '火生土': '你的稳重踏实能平衡对方的活力四射，对方则能为你的生活带来欢乐，相得益彰。',
    '土生金': '你们的组合既有创新又有稳定，能互相支持，共同进步。',
    
    '金克木': '可能会有一些观念上的分歧，建议多一些包容和理解，学会欣赏彼此的不同。',
    '木克土': '在生活方式上可能需要更多调适，但只要愿意沟通，这些都不是问题。',
    '土克水': '性格上可能会有些磨合，但正是这种差异让你们的关系更有趣。',
    '水克火': '处事方式可能不尽相同，但这恰恰能让你们互相学习，共同成长。',
    '火克金': '虽然观点可能有分歧，但只要用心经营，这些差异反而能让感情更加深厚。'
};

// 补充完整生肖性格特征数据
const ZODIAC_TRAITS = {
    '鼠': {
        positive: ['机智', '善于社交', '适应力强'],
        career: ['商业', '公关', '传媒'],
        relationship: '聪明活泼，善于��营人际关系'
    },
    '牛': {
        positive: ['踏实', '勤恳', '有耐心'],
        career: ['金融', '农业', '教育'],
        relationship: '重视承诺，注重生活品质'
    },
    '虎': {
        positive: ['勇敢', '有魄力', '领导才能'],
        career: ['管理', '军警', '体育'],
        relationship: '充满激情，追求刺激'
    },
    '兔': {
        positive: ['温和', '优雅', '善解人意'],
        career: ['艺术', '设计', '外交'],
        relationship: '浪漫温柔，重视感受'
    },
    '龙': {
        positive: ['自信', '有抱负', '魅力四射'],
        career: ['政治', '演艺', '创业'],
        relationship: '追求完美，渴望成功'
    },
    '蛇': {
        positive: ['智慧', '神秘', '洞察力强'],
        career: ['研究', '医疗', '心理'],
        relationship: '深情专一，重视精神契合'
    },
    '马': {
        positive: ['活力', '独立', '追求自由'],
        career: ['旅游', '体育', '销售'],
        relationship: '热情奔放，追求自由'
    },
    '羊': {
        positive: ['艺术气质', '同理心', '创造力'],
        career: ['艺术', '护理', '服务'],
        relationship: '温柔体贴，富有同情心'
    },
    '猴': {
        positive: ['机灵', '创新', '应变能力强'],
        career: ['科技', '娱乐', '创意'],
        relationship: '风趣幽默，善于交际'
    },
    '鸡': {
        positive: ['做事认真', '注重细节', '表达能力强'],
        career: ['文秘', '评论', '策划'],
        relationship: '重视完美，善于表达'
    },
    '狗': {
        positive: ['忠诚', '正直', '富有同情心'],
        career: ['公务', '慈善', '服务'],
        relationship: '忠贞不渝，重视道义'
    },
    '猪': {
        positive: ['善良', '真诚', '享受生活'],
        career: ['餐饮', '娱乐', '艺术'],
        relationship: '真诚率直，追求快乐'
    }
};

// 补充完整星座性格特征数据
const CONSTELLATION_TRAITS = {
    '白羊座': {
        positive: ['充满活力', '勇于冒险', '领导才能'],
        love_style: '热情直接，追求刺激'
    },
    '金牛座': {
        positive: ['可靠稳重', '享受生活', '有耐心'],
        love_style: '重视安全感，享受浪漫'
    },
    '双子座': {
        positive: ['思维活跃', '善于沟通', '适应力强'],
        love_style: '灵活多变，追求新鲜'
    },
    '巨蟹座': {
        positive: ['重感情', '富同理心', '照顾人'],
        love_style: '重视家庭，情感丰富'
    },
    '狮子座': {
        positive: ['自信阳光', '慷慨大方', '有领导力'],
        love_style: '浪漫大气，追求完美'
    },
    '处女座': {
        positive: ['细心', '分析力强', '追求完美'],
        love_style: '理性务实，注重细节'
    },
    '天秤座': {
        positive: ['优雅', '善解人意', '追求和谐'],
        love_style: '注重平衡，追求美好'
    },
    '天蝎座': {
        positive: ['洞察力强', '有魅力', '意志坚定'],
        love_style: '深情专一，重视承诺'
    },
    '射手座': {
        positive: ['乐观开朗', '追求自由', '思想开放'],
        love_style: '率真活泼，向往自由'
    },
    '摩羯座': {
        positive: ['务实', '有责任心', '目标明确'],
        love_style: '稳重可靠，循序渐进'
    },
    '水瓶座': {
        positive: ['独特', '创新', '重视友谊'],
        love_style: '追求独特，崇尚自由'
    },
    '双鱼座': {
        positive: ['浪漫', '富同情心', '直觉敏锐'],
        love_style: '感性浪漫，重视感受'
    }
};

// 计算八字
function calculateBaZi(birthday) {
    const date = new Date(birthday);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    // 计算年柱
    const yearStem = HEAVENLY_STEMS[(year - 4) % 10];
    const yearBranch = EARTHLY_BRANCHES[(year - 4) % 12];
    
    // 计算月柱（简化版）
    const monthStem = HEAVENLY_STEMS[(year * 2 + month) % 10];
    const monthBranch = EARTHLY_BRANCHES[month - 1];
    
    // 计算日柱（简化版）
    const dayStem = HEAVENLY_STEMS[Math.floor(date.getTime() / (24 * 60 * 60 * 1000)) % 10];
    const dayBranch = EARTHLY_BRANCHES[Math.floor(date.getTime() / (24 * 60 * 60 * 1000)) % 12];
    
    return {
        year: { stem: yearStem, branch: yearBranch },
        month: { stem: monthStem, branch: monthBranch },
        day: { stem: dayStem, branch: dayBranch }
    };
}

// 分析八字五行
function analyzeFiveElements(bazi) {
    const elements = {
        '金': 0, '木': 0, '水': 0, '火': 0, '土': 0
    };
    
    // 统计天干五行
    elements[STEMS_TO_ELEMENTS[bazi.year.stem]]++;
    elements[STEMS_TO_ELEMENTS[bazi.month.stem]]++;
    elements[STEMS_TO_ELEMENTS[bazi.day.stem]]++;
    
    // 统计地支五行
    elements[BRANCHES_TO_ELEMENTS[bazi.year.branch]]++;
    elements[BRANCHES_TO_ELEMENTS[bazi.month.branch]]++;
    elements[BRANCHES_TO_ELEMENTS[bazi.day.branch]]++;
    
    return elements;
}

// 分析八字合婚
function analyzeCompatibility(bazi1, bazi2) {
    const elements1 = analyzeFiveElements(bazi1);
    const elements2 = analyzeFiveElements(bazi2);
    
    let score = 0;
    let analysis = [];
    
    // 分析五行相生
    for (let element1 in elements1) {
        const generating = FIVE_ELEMENTS_GENERATING[element1];
        if (elements2[generating] > 0) {
            score += 10;
            const relationKey = `${element1}生${generating}`;
            analysis.push(FIVE_ELEMENTS_RELATIONS[relationKey]);
        }
    }
    
    // 分析五行相克
    for (let element1 in elements1) {
        const controlling = FIVE_ELEMENTS_CONTROLLING[element1];
        if (elements2[controlling] > 0) {
            score -= 5;
            const relationKey = `${element1}克${controlling}`;
            analysis.push(FIVE_ELEMENTS_RELATIONS[relationKey]);
        }
    }
    
    // 分析五行平衡
    const balance1 = Object.values(elements1).reduce((a, b) => a + b, 0);
    const balance2 = Object.values(elements2).reduce((a, b) => a + b, 0);
    if (Math.abs(balance1 - balance2) <= 1) {
        score += 15;
        analysis.push('你们的五行配比非常和谐，这意味着在生活中能够互相理解、包容，共同面对挑战。无论是工作还是生活，都能给对方有力的支持。');
    }
    
    // 添加个性化建议
    if (score >= 85) {
        analysis.push('从五行分析来看，你们是非常理想的组合。彼此的性格特点能够很好地互补，在生活中既能互相支持，又能共同进步。建议继续保持真诚的沟通，多创造共处的美好时光。');
    } else if (score >= 70) {
        analysis.push('整体来说，你们是不错的组合。虽然可能在某些方面需要互相适应，但这些小小的差异恰恰能让你们的关系更加有趣。建议多一些耐心和包容，用心经营这段关系。');
    } else {
        analysis.push('虽然五行组合上存在一些挑战，但这并不意味着你们不合适。相反，这种差异可能会让你们的关系更加深刻。建议多关注对方的需求，学会欣赏彼此的不同，共同创造属于你们的幸福。');
    }
    
    return {
        score: Math.min(100, Math.max(0, score + 70)),
        analysis: analysis
    };
}

// 计算生肖
function getZodiac(year) {
    return zodiacAnimals[(year - 4) % 12];
}

// 计算星座
function getConstellation(month, day) {
    const date = (month < 10 ? '0' + month : month) + (day < 10 ? '0' + day : day);
    return constellations.find(c => {
        if (c.name === '摩羯座') {
            return date >= c.start || date <= c.end;
        }
        return date >= c.start && date <= c.end;
    }).name;
}

// 计算年龄差异评价
function getAgeCompatibility(year1, year2) {
    const ageDiff = Math.abs(year1 - year2);
    if (ageDiff <= 3) return 95;
    if (ageDiff <= 5) return 85;
    if (ageDiff <= 8) return 75;
    if (ageDiff <= 10) return 65;
    return 60;
}

// 修改原有的calculateCompatibility函数
function calculateCompatibility(birthday1, birthday2) {
    const date1 = new Date(birthday1);
    const date2 = new Date(birthday2);
    
    // 计算八字
    const bazi1 = calculateBaZi(birthday1);
    const bazi2 = calculateBaZi(birthday2);
    
    // 计算生肖
    const zodiac1 = getZodiac(date1.getFullYear());
    const zodiac2 = getZodiac(date2.getFullYear());
    
    // 计算星座
    const constellation1 = getConstellation(date1.getMonth() + 1, date1.getDate());
    const constellation2 = getConstellation(date2.getMonth() + 1, date2.getDate());
    
    // 计算年龄差异
    const ageScore = getAgeCompatibility(date1.getFullYear(), date2.getFullYear());
    
    // 分析八字合婚
    const baziResult = analyzeCompatibility(bazi1, bazi2);
    
    // 计算生肖合婚
    const zodiacScore = zodiacCompatibility[zodiac1][zodiac2];
    
    // 计算星座合婚
    const constellationScore = constellationCompatibility[constellation1][constellation2];
    
    // 计算总分
    const totalScore = Math.round((baziResult.score + zodiacScore + constellationScore + ageScore) / 4);
    
    // 返回结果
    return {
        totalScore,
        details: {
            bazi: {
                person1: bazi1,
                person2: bazi2,
                score: baziResult.score,
                analysis: baziResult.analysis
            },
            zodiac: {
                person1: zodiac1,
                person2: zodiac2,
                score: zodiacScore
            },
            constellation: {
                person1: constellation1,
                person2: constellation2,
                score: constellationScore
            },
            age: {
                score: ageScore
            }
        }
    };
}

// 添加日期格式化函数
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}年${month}月${day}日`;
}

// 修改命理师建议生成函数
function generateReport(result) {
    const { totalScore, details } = result;
    const { bazi, zodiac, constellation } = details;
    
    // 生成建议
    const advice = [];
    
    // 根据五行关系给出建议
    const elements1 = analyzeFiveElements(bazi.person1);
    const elements2 = analyzeFiveElements(bazi.person2);
    const mainElement1 = Object.entries(elements1).sort((a, b) => b[1] - a[1])[0][0];
    const mainElement2 = Object.entries(elements2).sort((a, b) => b[1] - a[1])[0][0];
    
    if (FIVE_ELEMENTS_GENERATING[mainElement1] === mainElement2) {
        advice.push(`从五行上看，你的${mainElement1}性格能滋养对方的${mainElement2}特质，形成良性循环。`);
    } else if (FIVE_ELEMENTS_CONTROLLING[mainElement1] === mainElement2) {
        advice.push(`要注意调节${mainElement1}对${mainElement2}的制约作用，保持包容理解。`);
    }
    
    // 根据生肖特征给出建议
    const zodiacCompat = zodiacCompatibility[zodiac.person1][zodiac.person2];
    if (zodiacCompat >= 85) {
        advice.push(`${zodiac.person1}和${zodiac.person2}的组合很理想，要发挥${ZODIAC_TRAITS[zodiac.person1].positive[0]}和${ZODIAC_TRAITS[zodiac.person2].positive[0]}的优点。`);
    } else {
        advice.push(`需要理解${zodiac.person1}的${ZODIAC_TRAITS[zodiac.person1].relationship}和${zodiac.person2}的${ZODIAC_TRAITS[zodiac.person2].relationship}特点。`);
    }
    
    // 根据星座特点给出建议
    const constellationCompat = constellationCompatibility[constellation.person1][constellation.person2];
    if (constellationCompat >= 85) {
        advice.push(`${constellation.person1}和${constellation.person2}在感情上很配，要保持各自${CONSTELLATION_TRAITS[constellation.person1].love_style}和${CONSTELLATION_TRAITS[constellation.person2].love_style}的特色。`);
    } else {
        advice.push(`在感情中要注意调和${constellation.person1}的${CONSTELLATION_TRAITS[constellation.person1].love_style}与${constellation.person2}的${CONSTELLATION_TRAITS[constellation.person2].love_style}的差异。`);
    }
    
    return {
        matchLevel: totalScore >= 90 ? '天生一对' : totalScore >= 80 ? '良缘佳配' : totalScore >= 70 ? '缘分尚可' : '需要努力',
        summary: `从命理角度来看，你们的整体匹配度为${totalScore}分。八字五行相合度${bazi.score}%，生肖相合度${zodiac.score}%，星座契合度${constellation.score}%。`,
        advice: advice.join(' '),
        timing: generateTimingAdvice(mainElement1, mainElement2, zodiac.person1, zodiac.person2),
        relationship: advice.join(' ')
    };
}

// 添加时机建议生成函数
function generateTimingAdvice(element1, element2, zodiac1, zodiac2) {
    const seasonMap = {
        '木': '春季',
        '火': '夏季',
        '土': '季月',
        '金': '秋季',
        '水': '冬季'
    };
    
    let timing = '';
    if (FIVE_ELEMENTS_GENERATING[element1] === element2) {
        timing = `建议选择在${seasonMap[element1]}到${seasonMap[element2]}之交的时节，这时双方的五行能量最为和谐。`;
    } else if (FIVE_ELEMENTS_CONTROLLING[element1] === element2) {
        timing = `可以选择在${seasonMap[element2]}，这时${element2}气旺，能够中和双方的五行关系。`;
    } else {
        timing = `推荐在${seasonMap[element1]}或${seasonMap[element2]}行动，这时双方的能量都比较充沛。`;
    }
    
    // 添加生肖建议
    const zodiacAdvice = zodiacCompatibility[zodiac1][zodiac2] >= 85 
        ? `尤其是在${zodiac1}年或${zodiac2}年，更容易收获好运。`
        : `避开生肖相冲的年份，选择双方生肖相合的时机。`;
    
    return timing + zodiacAdvice;
}

// 添加相处建议生成函数
function generateRelationshipAdvice(element1, element2, zodiac1, zodiac2, constellation1, constellation2) {
    let advice = [];
    
    // 五行建议
    if (FIVE_ELEMENTS_GENERATING[element1] === element2) {
        advice.push(`从五行上看，你的${element1}性格能滋养对方的${element2}特质，要多发挥这个优势。`);
    } else if (FIVE_ELEMENTS_CONTROLLING[element1] === element2) {
        advice.push(`注意调节${element1}对${element2}的制约作用，保持适度的包容和理解。`);
    }
    
    // 生肖建议
    const zodiacCompat = zodiacCompatibility[zodiac1][zodiac2];
    if (zodiacCompat >= 85) {
        advice.push(`${zodiac1}和${zodiac2}的组合很不错，建议发挥${ZODIAC_TRAITS[zodiac1].positive[0]}和${ZODIAC_TRAITS[zodiac2].positive[0]}的优点。`);
    } else {
        advice.push(`要多理解${zodiac1}的${ZODIAC_TRAITS[zodiac1].relationship}和${zodiac2}的${ZODIAC_TRAITS[zodiac2].relationship}特点。`);
    }
    
    // 星座建议
    const constellationCompat = constellationCompatibility[constellation1][constellation2];
    if (constellationCompat >= 85) {
        advice.push(`${constellation1}和${constellation2}在感情上很配，双方都要保持${CONSTELLATION_TRAITS[constellation1].love_style}的特点。`);
    } else {
        advice.push(`在感情处理上，要注意调和${constellation1}的${CONSTELLATION_TRAITS[constellation1].love_style}和${constellation2}的${CONSTELLATION_TRAITS[constellation2].love_style}的差异。`);
    }
    
    return advice.join(' ');
}

// 添加图表生成函数
function generateCharts(result) {
    // 五行分布雷达图
    const radarChart = {
        labels: ['金', '木', '水', '火', '土'],
        datasets: [
            {
                label: '你的五行分布',
                data: Object.values(analyzeFiveElements(result.details.bazi.person1))
            },
            {
                label: 'TA的五行分布',
                data: Object.values(analyzeFiveElements(result.details.bazi.person2))
            }
        ]
    };
    
    // 相合度柱状图
    const barChart = {
        labels: ['八字五行', '生肖', '星座', '年龄'],
        data: [
            result.details.bazi.score,
            result.details.zodiac.score,
            result.details.constellation.score,
            result.details.age.score
        ]
    };
    
    return {
        radar: radarChart,
        bar: barChart
    };
}

// 日期输入和选择器处理
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('matchForm');
    const dateInputs = document.querySelectorAll('input[name="birthday1"], input[name="birthday2"]');
    
    dateInputs.forEach(input => {
        // 创建日期选择器弹窗
        const popup = createDatePicker(input);
        document.body.appendChild(popup);
        
        let lastValue = '';
        
        // 添加输入处理
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/[^\d]/g, ''); // 只保留数字
            
            // 如果是删除操作，保持原样
            if (value.length < lastValue.replace(/[^\d]/g, '').length) {
                lastValue = e.target.value;
                return;
            }
            
            // 限制长度8位数字
            if (value.length > 8) {
                value = value.slice(0, 8);
            }
            
            // 格式化显示
            let formatted = '';
            if (value.length > 0) {
                // 先添加年份部分
                formatted = value.slice(0, Math.min(4, value.length));
                
                // 如果输入超过4位，添加月份部分
                if (value.length > 4) {
                    formatted += '/';
                    let month = value.slice(4, Math.min(6, value.length));
                    if (month.length === 2) {
                        month = Math.min(Math.max(parseInt(month) || 0, 1), 12)
                            .toString()
                            .padStart(2, '0');
                    }
                    formatted += month;
                    
                    // 如果输入超过6位，添加日期部分
                    if (value.length > 6) {
                        formatted += '/';
                        let day = value.slice(6, 8);
                        if (day.length === 2) {
                            const maxDays = new Date(value.slice(0, 4), parseInt(month) - 1, 0).getDate();
                            day = Math.min(Math.max(parseInt(day) || 0, 1), maxDays)
                                .toString()
                                .padStart(2, '0');
                        }
                        formatted += day;
                    }
                }
            }
            
            e.target.value = formatted;
            lastValue = formatted;
        });
        
        // 添加键盘事件处理
        input.addEventListener('keydown', function(e) {
            // 允许使用控制键
            if (e.key === 'Backspace' || e.key === 'Delete' || 
                e.key === 'ArrowLeft' || e.key === 'ArrowRight' || 
                e.key === 'Tab' || e.ctrlKey || e.metaKey) {
                return;
            }
            
            // 只允许输入数字
            if (!/^\d$/.test(e.key)) {
                e.preventDefault();
                return;
            }
            
            // 获取当前纯数字值
            const currentValue = e.target.value.replace(/[^\d]/g, '');
            
            // 如果已经输入了8位数字，阻止继续输入
            if (currentValue.length >= 8) {
                e.preventDefault();
            }
        });
        
        // 点击日期选择按钮显示弹窗
        const btn = input.nextElementSibling;
        if (btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // 关闭其他打开的弹窗
                document.querySelectorAll('.date-picker-popup').forEach(p => {
                    if (p !== popup) {
                        p.classList.remove('active');
                    }
                });
                
                popup.classList.toggle('active');
                
                // 定位弹窗
                const inputRect = input.getBoundingClientRect();
                popup.style.top = (inputRect.bottom + 5) + 'px';
                popup.style.left = inputRect.left + 'px';
                
                // 根据输入框的值设置选择器的初始值
                const value = input.value.split('/');
                if (value.length === 3) {
                    const [year, month, day] = value;
                    popup.querySelector('select:nth-child(1)').value = year;
                    popup.querySelector('select:nth-child(2)').value = month;
                    updateDays(popup);
                    popup.querySelector('select:nth-child(3)').value = day;
                }
            });
        }
    });
    
    // 点击外部关闭弹窗
    document.addEventListener('click', function(e) {
        const popups = document.querySelectorAll('.date-picker-popup');
        popups.forEach(popup => {
            if (!popup.contains(e.target) && !e.target.classList.contains('date-picker-btn')) {
                popup.classList.remove('active');
            }
        });
    });
    
    // 表单提交处理
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const birthday1 = document.getElementById('birthday1').value;
            const birthday2 = document.getElementById('birthday2').value;
            
            // 计算匹配度
            const result = calculateCompatibility(birthday1, birthday2);
            const report = generateReport(result);
            
            // 更新界面显示
            updateResultDisplay(result, report);
        });
    }
});

// 更新日期选择天数选项
function updateDays(popup) {
    const yearSelect = popup.querySelector('select:nth-child(1)');
    const monthSelect = popup.querySelector('select:nth-child(2)');
    const daySelect = popup.querySelector('select:nth-child(3)');
    
    const year = parseInt(yearSelect.value);
    const month = parseInt(monthSelect.value);
    const maxDays = new Date(year, month, 0).getDate();
    
    const currentDay = parseInt(daySelect.value) || 1;
    
    daySelect.innerHTML = '';
    for (let day = 1; day <= maxDays; day++) {
        const option = document.createElement('option');
        option.value = day.toString().padStart(2, '0');
        option.textContent = day + '日';
        daySelect.appendChild(option);
    }
    
    // 保持原来选择的日期，如果超出范围则设为最后一天
    daySelect.value = Math.min(currentDay, maxDays).toString().padStart(2, '0');
}

// 创建日期选择器
function createDatePicker(input) {
    const popup = document.createElement('div');
    popup.className = 'date-picker-popup';
    
    const yearSelect = document.createElement('select');
    const monthSelect = document.createElement('select');
    const daySelect = document.createElement('select');
    
    // 添加年份选项（1900-2024）
    for (let year = 2024; year >= 1900; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year + '年';
        yearSelect.appendChild(option);
    }
    
    // 添加月份选项
    for (let month = 1; month <= 12; month++) {
        const option = document.createElement('option');
        option.value = month.toString().padStart(2, '0');
        option.textContent = month + '月';
        monthSelect.appendChild(option);
    }
    
    // 当选择改变时更新输入框
    function updateInput() {
        const date = `${yearSelect.value}/${monthSelect.value}/${daySelect.value}`;
        input.value = date;
        popup.classList.remove('active');
    }
    
    yearSelect.addEventListener('change', () => {
        updateDays(popup);
        updateInput();
    });
    
    monthSelect.addEventListener('change', () => {
        updateDays(popup);
        updateInput();
    });
    
    daySelect.addEventListener('change', updateInput);
    
    // 组装选择器
    const selects = document.createElement('div');
    selects.className = 'date-picker-selects';
    selects.appendChild(yearSelect);
    selects.appendChild(monthSelect);
    selects.appendChild(daySelect);
    
    popup.appendChild(selects);
    
    // 初始化日期选项
    updateDays(popup);
    
    return popup;
}

// 添加更新结果显示的函数
function updateResultDisplay(result, report) {
    // 显示结果区域
    const resultSection = document.querySelector('.result-section');
    resultSection.style.display = 'block';
    
    // 更新总分
    const scoreNumber = document.querySelector('.score-number');
    if (scoreNumber) {
        scoreNumber.textContent = result.totalScore;
    }
    
    // 更新八字显示
    const baziPillars = document.querySelectorAll('.bazi-pillars');
    if (baziPillars.length >= 2) {
        // 显示第一个人的八字
        baziPillars[0].innerHTML = `
            <div class="pillar">
                <span class="stem">${result.details.bazi.person1.year.stem}</span>
                <span class="branch">${result.details.bazi.person1.year.branch}</span>
            </div>
            <div class="pillar">
                <span class="stem">${result.details.bazi.person1.month.stem}</span>
                <span class="branch">${result.details.bazi.person1.month.branch}</span>
            </div>
            <div class="pillar">
                <span class="stem">${result.details.bazi.person1.day.stem}</span>
                <span class="branch">${result.details.bazi.person1.day.branch}</span>
            </div>
        `;
        
        // 显示第二个人的八字
        baziPillars[1].innerHTML = `
            <div class="pillar">
                <span class="stem">${result.details.bazi.person2.year.stem}</span>
                <span class="branch">${result.details.bazi.person2.year.branch}</span>
            </div>
            <div class="pillar">
                <span class="stem">${result.details.bazi.person2.month.stem}</span>
                <span class="branch">${result.details.bazi.person2.month.branch}</span>
            </div>
            <div class="pillar">
                <span class="stem">${result.details.bazi.person2.day.stem}</span>
                <span class="branch">${result.details.bazi.person2.day.branch}</span>
            </div>
        `;
    }
    
    // 更新性格特征分析
    const personalityAnalysis = document.querySelector('.personality-analysis');
    if (personalityAnalysis) {
        updatePersonalityAnalysis(personalityAnalysis, result);
    }
    
    // 添加性格特征分析更新函数
    function updatePersonalityAnalysis(personalityAnalysis, result) {
        const { zodiac, constellation } = result.details;
        
        const personalityHtml = `
            <div class="personality-summary">
                <h4>性格特征分析</h4>
                <div class="person-traits">
                    <p class="highlight">你的个性特点</p>
                    <div class="traits-details">
                        <p class="trait-item">
                            <span class="trait-label">生肖特征：</span>
                            <span class="trait-value">${ZODIAC_TRAITS[zodiac.person1].positive.join('、')}</span>
                        </p>
                        <p class="trait-item">
                            <span class="trait-label">星座特质：</span>
                            <span class="trait-value">${CONSTELLATION_TRAITS[constellation.person1].positive.join('、')}</span>
                        </p>
                        <p class="trait-item">
                            <span class="trait-label">感情态度：</span>
                            <span class="trait-value">${CONSTELLATION_TRAITS[constellation.person1].love_style}</span>
                        </p>
                    </div>
                </div>
                <div class="person-traits">
                    <p class="highlight">TA的个性特点</p>
                    <div class="traits-details">
                        <p class="trait-item">
                            <span class="trait-label">生肖特征：</span>
                            <span class="trait-value">${ZODIAC_TRAITS[zodiac.person2].positive.join('、')}</span>
                        </p>
                        <p class="trait-item">
                            <span class="trait-label">星座特质：</span>
                            <span class="trait-value">${CONSTELLATION_TRAITS[constellation.person2].positive.join('、')}</span>
                        </p>
                        <p class="trait-item">
                            <span class="trait-label">感情态度：</span>
                            <span class="trait-value">${CONSTELLATION_TRAITS[constellation.person2].love_style}</span>
                        </p>
                    </div>
                </div>
                <div class="personality-compatibility">
                    <h4>性格互动分析</h4>
                    <p>${generatePersonalityCompatibility(zodiac.person1, zodiac.person2, constellation.person1, constellation.person2)}</p>
                </div>
            </div>
        `;
        
        personalityAnalysis.innerHTML = personalityHtml;
    }
    
    // 添加性格互动分析函数
    function generatePersonalityCompatibility(zodiac1, zodiac2, constellation1, constellation2) {
        const zodiacCompat = zodiacCompatibility[zodiac1][zodiac2];
        const constellationCompat = constellationCompatibility[constellation1][constellation2];
        
        let analysis = [];
        
        // 生肖互动分析
        if (zodiacCompat >= 85) {
            analysis.push(`${zodiac1}和${zodiac2}的组合非常理想，${ZODIAC_TRAITS[zodiac1].relationship}的特点与${ZODIAC_TRAITS[zodiac2].relationship}的性格能够很好地互补。`);
        } else if (zodiacCompat >= 75) {
            analysis.push(`${zodiac1}的${ZODIAC_TRAITS[zodiac1].positive[0]}特质与${zodiac2}的${ZODIAC_TRAITS[zodiac2].positive[0]}性格基本契合，需要互相理解。`);
        } else {
            analysis.push(`虽然生肖特征有所不同，但${ZODIAC_TRAITS[zodiac1].positive[1]}和${ZODIAC_TRAITS[zodiac2].positive[1]}的特点可以互相学习。`);
        }
        
        // 星座互动分析
        if (constellationCompat >= 85) {
            analysis.push(`在感情上，${constellation1}的${CONSTELLATION_TRAITS[constellation1].love_style}与${constellation2}的${CONSTELLATION_TRAITS[constellation2].love_style}非常般配。`);
        } else if (constellationCompat >= 75) {
            analysis.push(`双方在感情处理上需要调和${constellation1}和${constellation2}的不同处事方式。`);
        } else {
            analysis.push(`建议多体谅对方的感情表达方式，互相学习对方的优点。`);
        }
        
        return analysis.join(' ');
    }
    
    // 更新缘分评估
    const relationshipAnalysis = document.querySelector('.relationship-analysis');
    if (relationshipAnalysis) {
        relationshipAnalysis.innerHTML = `
            <div class="relationship-summary">
                <h4>缘分评价</h4>
                <p class="highlight">匹配等级：${report.matchLevel}</p>
                <p class="match-score">总体匹配度：${result.totalScore}%</p>
                <div class="match-details">
                    <ul>
                        <li>八字五行：${result.details.bazi.score}% - ${result.details.bazi.analysis[0]}</li>
                        <li>生肖合婚：${result.details.zodiac.score}% - ${report.summary}</li>
                        <li>星座契合：${result.details.constellation.score}%</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    // 更新进度条
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach((bar, index) => {
        const scores = [
            result.details.bazi.score,
            result.details.zodiac.score,
            result.details.constellation.score
        ];
        if (index < scores.length) {
            bar.style.setProperty('--progress', `${scores[index]}%`);
            bar.querySelector('.progress-text').textContent = `${scores[index]}%`;
        }
    });
    
    // 更新命理师建议
    const adviceContent = document.querySelector('.advice-content');
    if (adviceContent) {
        adviceContent.innerHTML = `
            <div class="advice-level">${report.matchLevel}</div>
            <div class="advice-summary">${report.advice}</div>
            <div class="advice-details">
                <h4>时机建议</h4>
                <p>${report.timing || '选择良辰吉日，可增进感情。'}</p>
                <h4>相处建议</h4>
                <p>${report.relationship || '保持真诚沟通，互相理解包容。'}</p>
            </div>
        `;
    }
    
    // 更新五行分析
    const fiveElementsAnalysis = document.querySelector('.five-elements-analysis');
    if (fiveElementsAnalysis) {
        const elements1 = analyzeFiveElements(result.details.bazi.person1);
        const elements2 = analyzeFiveElements(result.details.bazi.person2);
        
        // 找出双方最强和最弱的五行
        const sortedElements1 = Object.entries(elements1).sort((a, b) => b[1] - a[1]);
        const sortedElements2 = Object.entries(elements2).sort((a, b) => b[1] - a[1]);
        
        const strongest1 = sortedElements1[0];
        const strongest2 = sortedElements2[0];
        
        // 分析五行相生相克关系
        let relationText = '';
        if (FIVE_ELEMENTS_GENERATING[strongest1[0]] === strongest2[0]) {
            relationText = FIVE_ELEMENTS_RELATIONS[`${strongest1[0]}生${strongest2[0]}`];
        } else if (FIVE_ELEMENTS_CONTROLLING[strongest1[0]] === strongest2[0]) {
            relationText = FIVE_ELEMENTS_RELATIONS[`${strongest1[0]}克${strongest2[0]}`];
        } else if (FIVE_ELEMENTS_GENERATING[strongest2[0]] === strongest1[0]) {
            relationText = FIVE_ELEMENTS_RELATIONS[`${strongest2[0]}生${strongest1[0]}`];
        } else if (FIVE_ELEMENTS_CONTROLLING[strongest2[0]] === strongest1[0]) {
            relationText = FIVE_ELEMENTS_RELATIONS[`${strongest2[0]}克${strongest1[0]}`];
        }
        
        // 生成五行分析文本
        const analysisHtml = `
            <div class="five-elements-summary">
                <p class="highlight">五行匹配度：${result.details.bazi.score}%</p>
                <p>你的五行以<strong>${strongest1[0]}</strong>为主，TA的五行以<strong>${strongest2[0]}</strong>为主。</p>
                <p class="relationship">${relationText}</p>
            </div>
            <div class="five-elements-details">
                <h4>五行关系分析</h4>
                <ul>
                    ${result.details.bazi.analysis.slice(0, 3).map(text => 
                        `<li>${text}</li>`
                    ).join('')}
                </ul>
            </div>
        `;
        
        fiveElementsAnalysis.innerHTML = analysisHtml;
    }
    
    // 平滑滚动到结果区域
    resultSection.scrollIntoView({ behavior: 'smooth' });
} 