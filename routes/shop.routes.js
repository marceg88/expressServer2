import Router from 'express';

const router = Router();

const { pathname: shopView } = new URL('c:/Users/ander/desktop/BootcampMakeItReal/modulo5/expressServer2/views/shop.html', import.meta.url);

router
    .get('/', (req, res, next) => {
        res.sendFile(shopView);
    })

export default router;