import { Router } from "express";
import captchaRouter from "./captcha.route.mjs";
import shortenerRouter from "./shortener.route.mjs";
import usersRouter from "./users.route.mjs";

const indexRouter = Router();


indexRouter.get('/', (_req, res) => {
    res.send('Server Deployed 🥳');
})
indexRouter.use('/users', usersRouter);

indexRouter.use('/verify-recaptcha', captchaRouter);

indexRouter.use('/shortener', shortenerRouter);


export default indexRouter;