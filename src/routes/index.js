const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course')
const meRouter = require('./me')

function router(app) {
    /* app.get('/search', (req, res) => res.render('search'));
    app.get('/news', (req, res) => res.render('news'));
    app.get('/news/:slug', (req, res) => res.render('detail'));
    app.get('/contact', (req, res) => res.render('contact'));
    app.get('/', (req, res) => res.render('home')); */
    app.use('/news', newsRouter);
    app.use('/courses', courseRouter)
    app.use('/me', meRouter)
    app.use('/', siteRouter);
}

module.exports = router;
