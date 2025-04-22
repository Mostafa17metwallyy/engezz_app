const bcrypt = require('bcryptjs');

const hash = "$2b$10$eSubCTngZm5hSBpu7HeZO.5Kys7LuMRHNEUNLfdpVX/yztvzupsE6";
const password = "pass123456";

bcrypt.compare(password, hash, (err, result) => {
  if (err) {
    console.error("❌ Error occurred:", err);
    return;
  }

  if (result) {
    console.log("✅ The password is correct!");
  } else {
    console.log("❌ The password does NOT match.");
  }
});
