module.exports = {
  format_date: (date) => {
    console.log(date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() + 5;
    return `${month}/${day}/${year}`;
  },
};
