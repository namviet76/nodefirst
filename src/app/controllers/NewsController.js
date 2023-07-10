class NewsController {
    news(req, res, next) {
        res.render('news');
    }
    detail(req, res) {
        
        
        res.render('detail')
    }
}

module.exports = new NewsController();
