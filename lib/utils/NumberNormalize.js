const formatToPersian = (number = "0") => {
  const persianNum = "۰۱۲۳۴۵۶۷۸۹";
  return number.toString().replace(/[0-9]/g, (d) => persianNum[d]);
};

const addSeparator = (number = "0") => {
  const separator = "٬";
  const reversed = number.split("").reverse().join("");
  const chunks = reversed.match(/.{1,3}/g);
  const joined = chunks.join(separator);

  return joined.split("").reverse().join("");
};

export { formatToPersian, addSeparator };
