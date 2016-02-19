function getZodiacSign(day, month) {

  var zodiacSigns = ['capricorn', 'aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius']

  if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
    return zodiacSigns[1];
  } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
    return zodiacSigns[2];
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return zodiacSigns[3];
  } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    return zodiacSigns[4];
  } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    return zodiacSigns[5];
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    return zodiacSigns[6];
  } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    return zodiacSigns[7];
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
    return zodiacSigns[8];
  } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
    return zodiacSigns[9];
  } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
    return zodiacSigns[10];
  } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    return zodiacSigns[11];
  } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    return zodiacSigns[12];
  }
}

function birthStones(month) {
  var uS = ['garnet', 'amethyst', 'aquamarine', 'diamond', 'emerald', 'pearl', 'ruby', 'peridot', 'sapphire', 'opal', 'topaz', 'turquoise'];
  var hindu = ['serpant stone', 'chandrakanta', 'gold', 'diamond', 'emerald', 'pearl', 'sapphire', 'ruby', 'zircon', 'coral', 'cats eye', 'topaz'];
  return uS[month];
  return hindu[month];
}

function flower(month) {
  var britFl = ['carnation', 'voilet', 'daffodil', 'sweet pea', 'lily of the valley', 'rose', 'larkspur', 'gladiolus', 'forget-me-not', 'marigold', 'chrysanthemum', 'poinsettia'];
  var uSFl = ['snowdrop', 'primrose', 'daffodil', 'sweet pea', 'hawthorn', 'honeysuckle', 'delphinium', 'poppy', 'aster', 'calendula', 'peony', 'holly'];
  return britFl[month];
  return uSFl[month];
}

function lunarNew(year, month, day) {
  //from chart of 19 year lunar new years day cycle//
  //Chinese New Year is after the US - so we have to correct to get accurate animal//
  var lunarMonth = [1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0];
  var lunarDay = [17, 6, 26, 14, 3, 23, 11, 31, 19, 8, 28, 15, 5, 24, 12, 2, 22, 9, 29];
  var cycle = (year - 1912) % 19;

  if (month - 1 < lunarMonth[cycle]) {
    var year = year - 1;
  } else if (day <= lunarDay[cycle]) {
    var year = year - 1;
  } else {}

  var z = year % 12;
//60 year calender cycle with corresponding elements//
  var el = (year%2==0) ? "Yang" : "Yin";
  var el2 = ['wood', 'wood', 'fire', 'fire', 'earth', 'earth', 'metal', 'metal', 'water', 'water'];
  var elUr = el2[Math.floor((year-1924)/60)];

  var animal = ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep'];
  console.log(animal[z], el, elUr);
  return animal[z];
  return elUr;
}


function dayOfWeek(year, month, day) {
  //from chart ot coorect for leap years and offsets//
  var mOff = [6, 2, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
  var yOff = [1, 6, 5, 3, 2, 0, 6, 4, 3, 1, 0, 5];
  var lpEv = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2];
  var lpOdd = [0, 0, 1, 1, 1, 1, 2, 2, 2, 2];
  var X = ("" + year).split('');
  var Y = X.map(Number);
  var oddY = Y[2] % 2 === 0 ? lpEv[Y[3]] : lpOdd[Y[3]];
  var daysW = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  var d = Math.floor((day + mOff[month - 1] + yOff[Math.floor((year - 1900) / 10)] + oddY) / 7) - 1;
  return daysW[d];
}
