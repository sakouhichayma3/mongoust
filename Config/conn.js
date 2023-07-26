const mongosse = require("mongoose");
//connect to database
const connedb = async () => {
  try {
    await mongosse.connect(
      ""
    );
    console.log("the world seeing Us");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connedb;
