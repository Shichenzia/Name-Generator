"use strict";

exports.init = async function (args) {
  console.log("logic init.");
  console.log("logic init args:", args);
};
console.log("********************************************************************");
// 男性的名
let maleStr =
  ["伟","勇","军","磊","涛","斌","强","鹏","杰","峰","超","波","辉","刚","健","明","亮","俊","飞","凯","浩","华","平","鑫","毅","林","洋","宇","宁","建","兵","旭","雷","锋","彬","龙","翔","阳","剑","东","博","威","海","晨","炜","帅","岩","江","松","文","力","成","琦","进","昊","宏","欣","坤","冰","震","楠","佳","忠","庆","新","骏","君","栋","青","帆","虎","哲","铭","航","利","鸣","恒","源","聪","凡","颖","武","雄","川","清","义","滨","皓","达","民","跃","越","兴","正","靖","曦","淼","泉","程","韬","冲","硕","远","昆","瑜","晔","煜","红","权","征","雨","山","丰","珂","朋","钧","彦","然","枫","嘉","峥","烨","铮","卓","畅","钊","金","昱","爽","盛","路","晋","谦","克","方","闯","耀","奎","一","晟","勤","豪","安","尧","全","琛","腾","队","鸿","泽","凌","渊","广","顺","莹","英","峻","攀","宾","驰","霖","喆","椒","国","恺","潇","琨","轶","吉","亚","梁","焱","臻","嵩","岳","炯","宝","岗","斐","啸","元","辰","柯","羽","培","通","天","麟","晗","钰","灿","琼","锦","生","原","洲","炎","勋","奕","艺","中","德","轩","京","标","旺","南","黎","禹","蔚","总","益","祺","骥","沛","汉","真","非","鹤","升","蒙","城","钦","锴","骁","壮","罡","展","翼","为","灏","赞","懿","劲","策","魁","霄","敬","卿","均","治","迅","臣","桦","镇","骞","河","希","瑾","鹰","舟","丁","弘","纲","泳","理","福","俭","乾","纯","双","屹","涌","根","田","昭","飚","勃","嵘","贤","申","琰","宽","鼎","滔","昌","璞","逸","贵","喜","昂","柳","韶","伦","茂","景","柱","实","霞","园","学","衡","风","玺","赫","寒","圣","旋","礼","霆","月","富","薇","仁","浪","津","垒","齐","炼","瀚","泓","灵","朝","严","意","银","璇","鲲","易","行","品","澄","赛","思","旗","淳","继","友","和","革","延","能","隽","烽","昶","裕","鲁","铎","昀","骅","高","润","熠","锟","望","微","拓","名","秋","冶","雁","开","定","想","舒","庚","牧","重","孟","澎","信","郁","珉","钟","盼","恩","潮","季","烈","奔","承","来","桥","尚","前","麒","舜","会","柏","冠","融","满","添","咏","响","珩","杉","韧","同","树","遥","胤","榕","耿","崇","里","疆","旻","启","烁","楷","才","仲","隆","章","舰","璟","亭","珺","言","笛","弛","营","宪","渝","发","逊","运","翊","研","登","炳","鉴","颂","闻","桢","曙","盟","贝","千","保","功","竹","印","阔","湛","争","众","肖","祯","默","珍","余","准","忱","宸","普","韦","舸","创","彭","泰","心","廷","其","业","焕","韵","裙","唯","轲","将","战","歆","朔","崴","操","向","葵","潜","沙","胡","璋","秦","珑","朗","举","列","纬","垚","歌","献","谊","迎","州","声","栩","洵","颢","照","辛","有","育","禄","起","淮","弋","坦","楚","熹","劫","勉","典","诺","溪","显","毓","稳","甫","羿","旦","焘","宣","宙","岑","存","迁","万","煦","渤","日","翰","庭","锬","颉","雍","怀","北","西","耘","肠","玄","令","蓬","联","澜","岱","宗","闽","飙","琥","垣","年","尉","习","格","锨","桑","讳","丛","淞","领","深","赢","宜","律","朴","化","陵","庄","财","墨","直","煊","棋","孝","子","冕","傲","丞","如","燃","铖","畏","崧","墩","溢","锁","连","纪","翌","晏","任"];
// 女性的名
let femaleStr =
  ["静","敏","燕","艳","丽","娟","莉","芳","萍","玲","娜","丹","洁","红","颖","琳","霞","婷","慧","莹","晶","华","倩","英","佳","梅","雪","蕾","琴","璐","云","蓉","薇","欣","琼","宁","媛","虹","婧","雯","茜","洋","菲","琦","妍","爽","兰","晨","冰","瑶","瑾","瑛","悦","群","玮","欢","瑜","蕊","珊","琪","玉","怡","文","岚","杨","婕","旭","凤","芬","芸","晓","萌","露","菁","惠","蓓","林","璇","珍","月","微","娇","影","莎","彬","昕","乐","星","卉","晴","曼","维","晔","艺","睿","芹","畅","椒","春","柳","梦","妮","翠","然","钰","蔚","曦","茹","凌","凡","美","彤","菊","甜","花","雅","立","姣","馨","珏","秀","亚","思","冉","骊","娅","斐","嘉","莲","莺","佩","剑","娴","玥","真","奕","靓","姝","希","姗","香","容","纯","韵","玫","婵","巧","笑","俐","舒","盼","可","会","晗","滢","盈","茵","灵","贞","一","苹","秋","榕","轶","娣","辰","樱","苏","沁","霜","珠","元","湘","嫣","卿","蒙","京","泓","媚","跃","隽","泉","妹","婉","音","芝","娥","昀","野","奇","歌","鸽","竹","诚","萱","嵘","沙","念","桃","熙","幸","如","沛","意","果","寒","芮","鹃","心","海","焕","荔","逸","津","研","颜","舟","菡","笛","瑗","韶","歆","爱","唯","蕴","俏","恬","毓","杉","岭","恋","杏","斯","义","俭","漫","漪","昭","蕙","铃","桐","祺","炯","焰","葵","依","彩","蝶","筱","戈","苓","为","蔷","展","良","想","耘","淳","泽","好","妤","妙","羚","品","伶","伊","子","格","默","润","淑","蔓","皎","绮","沫","桢","童","言","涓","霏","达","宜","钧","蜜","泳","纳","忱","熠","振","碧","素","情","荟","侃","忆","知","或","鹭","霓","桔","荷","吟","仪","励","栋","多","嫒","澄","诗","艾","习","谨","优","旎","游","楚","俪","凝","眉","李","娉","芊","钥","望","朦","嫚","宝","芯","咪","连","千","冶","旖","姬","晟","霁","迅","书","妲","菱","梓","煦","嫱","娓","琚","筝","含","绚","日","殉","朵","姿","妃","暖","茉","女","珑","忻","愉","尤","喻","予","珣","慈","允","令","若","洵","汝","娆","惟"];
// 姓
let xingStr =
  ["赵","钱","孙","李","周","吴","郑","王","冯","陈","褚","卫","蒋","沈","韩","杨","朱","秦","尤","许","何","吕","施","张","孔","曹","严","华","金","魏","陶","姜","戚","谢","邹","喻","柏","水","窦","章","云","苏","潘","葛","奚","范","彭","郎","鲁","韦","昌","马","苗","凤","花","方","俞","任","袁","柳","鲍","史","唐","费","廉","岑","薛","雷","贺","倪","汤","滕","殷","罗","毕","郝","邬","常","时","傅","皮","齐","伍","余","顾","孟","平","黄","穆","萧","尹","姚","邵","舒","汪","祁","毛","明","计","伏","成","戴","宋","庞","纪","屈","祝","董","杜","阮","强","贾","娄","江","童","颜","郭","梅","盛","林","刁","钟","徐","邱","骆","高","夏","蔡","田","樊","胡","凌","霍","虞","万","支","柯","咎","管","卢","莫","经","房","裘","缪","解","宗","宣","丁","邓","郁","单","杭","洪","包","诸","左","石","崔","吉","龚","程","嵇","邢","滑","裴","陆","荣","翁","惠","甄","芮","羿","邴","松","井","段","富","巫","乌","焦","牧","侯","蓬","班","仰","秋","仲","伊","宫","宁","祖","武","符","刘","詹","束","龙","叶","幸","司","韶","郜","黎","薄","白","怀","赖","卓","蒙","乔","翟","谭","贡","劳","姬","申","郦","尚","农","温","晏","瞿"] ;
// 英文男姓名
let maleEnStr =
  ["Paul","Small","Dale","Daley","Gabriel","Jack","Godly","Maddox","Beneficient","Samson","Vance","Thresher","Paxton","Dalton","Gale","Jacob","Conqueror","Magnus","Great","Samuel","Vaughan","Percival","Percy","Damon","Galvin","Sparrow","James","Jimmy","Supplanter","Malcolm","Scott","Vernon","Flourishing","Perry","Daniel","Gardner","Gardener","Jarvis","Melvin","Servant","Sean","Victor","Peter","Darcy","Dark","Garret","Jason","Marcus","Warlike","Sebastian","Majestic","Vincent","Victorious","Peyton","Darian","Wealthy","Garrick","Jasper","Mark","Marc","Seth","Wallace","Stranger","Philbert","Darell","Darrel","Beloved","Garth","Herdsman","Jed","Marlon","Falcon","Seymour","Walter","Philip","David","Swift","Nimble","Gavin","Jeffrey","Martin","Shamus","Walton","Phineas","Davin","George","Farmer","Jeremiah","Jeremy","Exalted","Marvin","Sea","Shawn","Ward","Guardian","Pierce","Dean","Gerald","Gerard","Gerret","Jerome","Matthew","Shelley","Articulate","Warren","Quade","Fourth","Declan","Gideon","Jesse","Maurice","Sherard","Washington","Quenby","Delmar","Mariner","Gifford","Gift-Brave","John","Max","Maxwell","Sheridan","Wayne","Quillan","Cub","Denley","Gilbert","Pledge","Jonathan","Medwin","Sherlock","Fair-Haired","Wesley","Quimby","Dennis","Giles","Joseph","Joey","Joe","Melville","Sherman","Wilbur","Quentin","Derek","Gilroy","Joshua","Merlin","Bird","Sherwin","Willard","Quinby","Dermot","Glenn","Valley","Justin","Just","Michael","Sidney","Earthy","William","Will","Quincy","Derwin","Goddard","Kane","Honor","Milburn","Sigmund","Willis","Quinlan","Strong","Des","Desmond","Godfrey","Keene","Sharp","Miles","Soldier","Silas","Winston","Quinn","Dexter","Dexterous","Godwin","Keegan","Fiery","Monroe","Simon","Winthrop","Ralph","Dillon","Faithful","Graham","Keaton","Montague","Sinclair","Wyatt","Guide","Ramsey","Dion","Grant","Keith","Forest","Montgomery","Mountain","Sloane","Warrior","Wylie","Beguiling","Randolph","Dirk","Grayson","Kelsey","Morgan","Solomon","Peaceful","Wyman","Raymond","Dixon","Gregory","Kelvin","Morris","Moorish","Spencer","Steward","Zachariah","Reginald","Power","Dominic","Gresham","Kendall","Morton","Stacy","Zachary","Renfred","Peacemaker","Donald","Ruler","Griswald","Griswold","Kendrick","Murray","Seaman","Stanley","Stan","Zebadiah","Rex","King","Dorian","Grover","Kenneth","Ken","Handsome","Nathaniel","Nathan","Stephen","Stefan","Crown","Zane","Rhett","Stream","Douglas","Guy","Kent","Neal","Champion","Sterling","Zebediah","Richard","Doyle","Hadden","Kenway","Neville","Stewart","Stuart","Ridley","Drake","Dragon","Hadley","Kenyon","Nicholas","Theobold","Patriotic","Riley","Valiant","Drew","Trustworthy","Hadwin","Kerry","Nigel","Black","Theodore","Robert","Robin","Driscoll","Interpreter","Hal","Kerwin","Noel","Thomas","Dependable","Roderick","Dudley","Halbert","Kevin","Norman","Norseman","Timothy","Rodney","Famous","Duncan","Halden","Half-Dane","Kiefer","Norris","Caretaker","Titus","Roger","Durwin","Hale","Robust","Kilby","Olaf","Relic","Tobias","Roland","Dwayne","Hall","Kilian","Blind","Olin","Holly","Toby","Rolf","Wolf","Dwight","Halsey","Kim","Chief","Oliver","Todd","Fox","Ronald","Dylan","Loyal","Hamlin","Kimball","Orson","Tony","Rory","Earl","Nobleman","Hanley","Kingsley","Oscar","Travis","Travers","Ross","Wood","Eaton","Hardy","Kirby","Oswald","Trent","Torrent","Roswell","Ebenezer","Harlan","Harland","Kirk","Church","Otis","Trevor","Roy","Edan","Harley","Kit","Owen","Well-Born","Tristan","Sorrowful","Royce","Kingly","Edgar","Harold","Harry","Kody","Helpful","Troy","Rufus","Red-Haired","Edric","Harris","Harrison","Konrad","Truman","Rupert","Edmond","Edmund","Hartley","Kurt","Tyler","Russell","Red","Edward","Eddie","Heath","Heathcliff","Kyle","Udolf","Ryan","Edwin","Hector","Steadfast","Lambert","Unwin","Nonfriend","Efrain","Henry","Lamont","Lawyer","Uriah","Egan","Ardent","Herbert","Lancelot","Land","Egbert","Herman","Landon","Owner","Egerton","Homer","Landry","Egil","Horace","Horatio","Timekeeper","Lane","Elbert","Howard","Lars","Eldon","Respected","Hubert","Laurence","Eldwin","Hugh","Hugo","Fire","Lee","Meadow","Eli","Ely","Elijah","Humphrey","Leith","Wide","Elias","Hunter","Leonard","Leo","Leon","Eliot","Elliott","Ian","Leroy","Ellery","Cheerful","Igor","Leslie","Elmer","Awe-Inspiring","Irvin","Irving","Lester","Elroy","Royal","Isaac","Laughter","Lincoln","Elton","Isaiah","Lionel","Lion-like","Elvis","Ivan","Lloyd","Grey","Emerson","Emery","Industrious","Iver","Ivar","Archer","Logan","Emmanuel","God-like","Ives","Lombard","Long-Beard","Emmett","Louis","Lewis","Emrick","Immortal","Lowell","Enoch","Lucas","Luke","Luminous","Eric","Erik","Luther","Ernest","Vigour","Lyndon","Errol","Erskine","Erwin","Esmond","Ethan","Ethanael","Constant","Firm","Ethen","Endurance","Eugene","Evan","Everett","Ezra","Fabian","Fairfax","Falkner","Farley","Farrell","Felix","Prosperous","Fenton","Ferdinand","Fergal","Fergus","Ferguson","Ferris","Finbar","Fitzgerald","Fleming","Fletcher","Floyd","Forbes","Forrest","Woodsman","Foster","Cunning","Francis","Free","Frank","Frasier","Strawberry","Frederick","Freeman"];
// 英文女姓名
var femaleEnStr =
  ["Abigail","Barbara","Bobbie","Strange","Danielle","Echo","Faith","Gabrielle","Haley","Hayley","Heroine","Ida","Idelle","Happy","Jacqueline","Kacey","Eagle-Eyed","Lacey","Mabel","Amiable","Nadia","Nadine","Hope","Ada","Prosperous","Beata","Blessed","Daphne","Eda","Wealthy","Fannie","Free","Gale","Lively","Hanna","Hannah","Imogen","Imogene","Imagine","Jade","Jewel","Kara","Lane","Madeline","Nancy","Grace","Adelaide","Noble","Beatrice","Beatrix","Darlene","Edana","Fiery","Farrah","Fara","Gaye","Lighthearted","Harriet","Ingrid","Meadow","Jane","Karen","Karena","Lara","Madge","Naomi","Delightful","Adrienne","Becky","Davida","Edeline","Fawn","Geneva","Harley","Irene","Peace","Janet","Kate","Pure","Larina","Magda","Magdalene","Natalie","Agatha","Belinda","Pretty","Dawn","Edith","Faye","Fairy","Genevieve","Humble","Harmony","Iris","Janice","Katherine","Kathy","Kathleen","Katrina","Larissa","Cheerful","Maggie","Nathania","Agnes","Gentle","Belle","Bella","Beautiful","Deborah","Edlyn","Noblewoman","Fedora","Georgette","Hattie","Ivy","Jasmine","Flower","Kay","Rejoicing","Laura","Laurel","Loralie","Lauren","Maia","Star","Nell","Light","Aileen","Bernadette","Deirdre","Sorrow","Edna","Pleasure","Felicia","Georgia","Georgiana","Hazel","Commander","Ivory","Jeanne","Kayla","Kayleigh","Laverna","Maisie","Precious","Nerissa","Aimee","Beloved","Bernice","Delilah","Edwina","Fern","Geraldine","Heather","Jemima","Keely","Beauty","Leah","Leigh","Weary","Mandy","Nerita","Alanna","Fair","Bertha","Berta","Denise","Effie","Fiona","Germaine","Armed","Helen","Helena","Jennifer","Kelsey","Warrior","Leanne","Marcia","Mark","Nessa","Nessia","Alarice","Bertina","Bright","Shining","Diana","Diane","Eileen","Flora","Gertrude","Henrietta","Jessica","Jessie","Kendra","Wise","Lee","Lea","Margaret","Nicolette","Nicole","Alda","Rich","Beryl","Dominica","Elaine","Frances","Francesca","Gilda","Hetty","Kerri","Dark-Haired","Leslie","Margot","Nina","Mighty","Alexandra","Bess","Dominique","Eleanor","Freda","Frida","Peaceful","Gillian","Hilda","Jillian","Jill","Kirstyn","Kirsten","Leticia","Joy","Maria","Marie","Marian","Marilyn","Noelle","Alice","Beth","Bethany","Donna","Elena","Frederica","Gladys","Lame","Holly","Joan","Kyla","Lovely","Lilah","Lillian","Lilly","Marnia","Nola","Alina","Bettina","Dora","Elga","Gloria","Glorious","Honey","Jocelyn","Joyce","Just","Linda","Marissa","Nora","Norine","Honour","Alison","Beverly","Doris","Elise","Glynnis","Optimistic","Joanna","Linette","Graceful","Marta","Martha","Norma","Alma","Nourishing","Bianca","White","Drucilla","Eliza","Hortense","Gardener","Josephine","Lindsay","Martina","Warlike","Nydia","Amanda","Loveable","Blair","Elizabeth","Guinevere","Delight","Lisa","Liza","Mary","Amaryllis","Fresh","Sparkling","Blanche","Ella","Elfin","Gwen","Gwendolyn","Judith","Judy","Praised","Livia","Matilda","Amber","Blythe","Ellen","Gwynne","Juliana","Julia","Youthful","Lizzie","Maude","Anastasia","Bonnie","Eloise","Julie","Juliet","Lois","Maura","Dark","Andrea","Brenda","Flame","Elsie","Gaiety","June","Lola","Lolita","Maureen","Angela","Angelic","Briana","Elvira","Justine","Lorelei","Mavis","Song-Thrush","Angelica","Brigid","Bridget","Emeline","Industrious","Lorena","Maxine","Anita","Brittany","Britney","Emily","Ambitious","Lorraine","Megan","Great","Ann","Anne","Mercy","Brooke","Emma","Ancestress","Louisa","Louise","Melanie","Annabelle","Erika","Powerful","Regal","Lucia","Luciana","Lucille","Melinda","Grateful","Annette","Ernestine","Lucinda","Lucy","Melissa","Anthea","Flower-Like","Esmeralda","Lulu","Melody","April","Erin","Luna","Melvina","Handmaiden","Ariana","Silvery","Estelle","Lynn","Compassionate","Arleen","Estra","Meris","Astrid","Ethel","Merle","Blackbird","Audrey","Strong","Eudora","Michelle","Eugenia","Mildred","Eunice","Millicent","Strength","Eva","Eve","Evelyn","Minerva","Mirabelle","Miranda","Admirable","Miriam","Rebellious","Misty","Moira","Molly","Mona","Solitary","Monica","Counsellor","Mora","Blueberry","Morgan","Muriel","Myrrh","Myra","Wonderful","Myrtle","Octavia","Eighth","Page","Attendant","Queen","Queenie","Rachel","Female","Sabrina","Brina","Udele","Tabitha","Gazelle","Valda","Wanda","Vandal","Yolanda","Zea","Grain","Odette","Pamela","Quenna","Ramona","Sacha","Ula","Talia","Blooming","Valerie","Healthy","Wenda","Wendy","Wanderer","Yvette","Zelda","Olga","Holy","Pandora","Gifted","Questa","Searcher","Rebecca","Bound","Sadie","Princess","Ulrica","Tamara","Vanessa","Butterfly","Whitney","Island","Yvonne","Zelene","Sunshine","Olivia","Olive","Pansy","Quinella","Quintana","Regina","Queenly","Salena","Salt","Ulva","Wolf","Tammy","Perfect","Vania","Wilda","Zera","Seeds","Opal","Gemstone","Patience","Virtuous","Quintessa","Essence","Renata","Renee","Sally","Una","One","United","Tanya","Veleda","Willa","Zoe","Ophelia","Serpent","Patricia","Rhea","Earth","Salome","Unity","Tara","Tower","Vera","Willette","Oprah","Patty","Rhoda","Samantha","Listener","Ursa","Tasha","Verda","Spring-like","Willow","Oriel","Orlena","Paula","Paulette","Small","Rita","Sandra","Ursula","Tatum","Spirited","Veronica","Wilona","Desired","Orlantha","Pearl","Roberta","Famous","Sapphire","Teresa","Teri","Harvester","Victoria","Victorious","Winifred","Orva","Peggy","Peg","Robin","Sarah","Tess","Violet","Winona","Penelope","Weaver","Rosa","Scarlett","Red","Thalia","Virginia","Maiden","Wynne","Philippa","Rose","Rosalie","Selene","Selena","Thea","Divine","Vita","Philomena","Nightingale","Rosalind","Serena","Serene","Thelma","Nursing","Vivian","Vivianne","Life","Phoebe","Rosanne","Shana","Theodora","Phyllis","Rosemary","Shannon","Thomasina","Polly","Rowena","Sharon","Plains","Thora","Thunder","Primavera","Roxanne","Sheila","Tiffany","Primrose","Ruby","Shirley","Tilda","Priscilla","Dutiful","Ruth","Sibley","Timothea","Prudence","Prudent","Sibyl","Sybil","Tina","Prunella","Silver","Tracy","Fighter","Simona","Simone","Trina","Sirena","Trista","Trixie","Trix","Tuesday"];

exports.helloWorld = async function () {
  return "hello world!";
};

exports.nameGenerator = async function ({ nameNum = 1, nameLength = 2, language = "zh", sex }) {
  let nameArr = [];
  let firstName, lastName;

  for (let i = 0; i < nameNum; i++) {

    if(language === "zh"){
      firstName = xingStr;
      if(sex === 0) {
        lastName = femaleStr;
      }
      else if(sex === 1) 
      {
        lastName = maleStr;
      }else{
        if(randomAccess(0, 2) == 0) {
          lastName = femaleStr;
        }else {
          lastName = maleStr;
        }
      }
    }else if(language === "en") {

      if(sex === 0) {
        firstName = femaleEnStr;
      }
      else if(sex === 1) 
      {
        firstName = maleEnStr;
      }else{
        if(randomAccess(0, 2) == 0) {
          firstName = femaleEnStr;
        }else {
          firstName = maleEnStr;
        }
      }
      // 如果这里是英文名字就只能在姓名库取一个
      nameLength = 1;
    }

    let name = getRandomName(firstName, lastName, nameLength, language);
    nameArr.push(name);
  }

  return nameArr;
};

exports.nickNameGenerator = async function ({ nameNum = 1, nameLength = 3 }) {
  let nameArr = [];
  for (let i = 0; i < nameNum; i++) {
    let name = ""
    for(let j = 0; j < nameLength; j++) {
      let unicodeNum  = ""
      unicodeNum = randomAccess(0x4e00,0x9fa5).toString(16)
      name += decodeUnicode(unicodeNum)
    }
    nameArr.push(name);
  }

  return nameArr
};

// 获取指定范围内的随机数 [min, max)
function randomAccess(min, max){
	return Math.floor(Math.random() * (min - max) + max)
}

/**
 * 在数组里面选择元素，并拼接成字符串
 * @param {Array} firstName 姓数组
 * @param {Array} lastName 名数组
 * @param {Number} nameLength 名字长度
 * @param {String} language 语言
 * @returns 姓名
 */
function getRandomName(firstName, lastName, nameLength, language) {
  let space = " ";

  if(language === "zh") {
    space = "";
  }
  let name = firstName[randomAccess(0, firstName.length)];
  for (let i = 1; i < nameLength; i++) {
    name = name + space + lastName[randomAccess(0, lastName.length)];
  }

  return name;
}

// 解码
function decodeUnicode(str) {
  //Unicode显示方式是\u4e00
  str = "\\u"+str
  str = str.replace(/\\/g, "%");
   //转换中文
  str = unescape(str);
   //将其他受影响的转换回原来
  str = str.replace(/%/g, "\\");
  return str;
}
