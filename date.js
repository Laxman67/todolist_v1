
// ======================= 


exports.getDate = function getDate() {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    // year: "numeric",
  };

  return today.toLocaleDateString("en-US", options);
};




// =====================

exports.getDay = function getDay() {
  let today = new Date();

  let options = {
    weekday: "long",
  };

  let day = today.toLocaleDateString("en-US", options);

  return day;
};
