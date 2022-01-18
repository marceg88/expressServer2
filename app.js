import express from 'express';

import adminRoutes from './routes/admin.routes.js'
import shopRoutes from './routes/shop.routes.js'

const app = express();

const { pathname: publicFile } = new URL('c:/Users/ander/desktop/BootcampMakeItReal/modulo5/expressServer2/public', import.meta.url);

app.use(express.static(publicFile));

app.use(express.urlencoded({ extended: true }))

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).send("<h1>Page not found<h1>");
})

app.listen(3000, () => console.log('Server is running in port 3000'))