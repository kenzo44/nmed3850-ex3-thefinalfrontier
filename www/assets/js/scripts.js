var app = new Framework7 ({
    root: "#app",  //this is the app element
    routes: [
        {
            path: '/page2/',
            url: 'pages/page2.html'
        }
    ]
})

var mainView = app.views.create('.view-main');