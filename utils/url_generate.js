const shortenUrl = async (long_url, req) => {
    const key = await generateKey()
    const BaseURL = getBaseURL(req)
    let short_url = `${BaseURL}/${key}`
    return {short_url, key, long_url }
};

const generateKey = async () => {
  const alphabetNumeric = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ];

  let generateKey = "";
  for (let index = 0; index < 6; index++) {
    let generatedIndex = Math.floor(Math.random() * alphabetNumeric.length);
    const result = alphabetNumeric[generatedIndex];
    generateKey += result;
  }
  return generateKey;
}


const getBaseURL = (req)=>{
    return req.protocol+"://"+req.headers.host
}

module.exports = {
    shortenUrl
}