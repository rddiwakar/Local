const passport = require("passport")
const express = require("express");
const router = express.Router();

router.route("/failure").get(
    (req, res, next) => res.send("Something went wrong, please try again")
);

router.route("/google").get(
    passport.authenticate("google", { scope: ['profile', 'email'] })
);

router.route("/google/callback").get(
    passport.authenticate("google", { session: false, failureRedirect: "/failure" }),
    (req, res) => {
        // Redirect to frontend link with jwt token
        // example - http://frontend-link/?jwt-token=525743
        res.send("Google Auth successful");
    }
);

module.exports = router;