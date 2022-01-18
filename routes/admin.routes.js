import { Router } from "express";

const router = Router();

const { pathname: adminView } = new URL('c:/Users/ander/desktop/BootcampMakeItReal/modulo5/expressServer2/views/admin.html', import.meta.url);

router
    .route('/add-product')
    .get((req, res, next) => {
        res.status(200).sendFile(adminView)
    })
    .post((req, res, next) => {
        const {name, description, price} = req.body;
        console.log({name, description, price});
        res.status(200).redirect('/');
    })

export default router;