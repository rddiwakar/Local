const passport = require("passport")
const express = require("express");
const User = require("../model/user.js");
const router = express.Router();

router.route("/failure").get(
    (req, res, next) => res.send("Something went wrong, please try again")
);

router.route("/google").get(
    passport.authenticate("google", { scope: ['profile', 'email'] })
);

router.route("/google/callback").get(
    passport.authenticate("google", { session: false, failureRedirect: "/failure" }),
    async(req, res) => {
        const user = await User.findOne({email:req.user.email});
        const token = user.getSignedToken()

        res.redirect(`${window.location.origin}/token?t=` + token);
        
    }
);

module.exports = router;