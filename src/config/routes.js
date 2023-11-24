const routes = {
    home: '/',
    services: '/services',
    servicesDetail: '/services/:slug/detail',
    news: '/news/dog/category',
    newsDetail: '/news/:cate/:slug/detail',
    newsCategory: '/news/:slug/category',
    contact: '/contact',
    login: '/login',
    register: '/register',
    profile: '/profile',
    store: '/store',
    storeDetail: '/storeDetail/:slug',
    team: '/team',
    teamCategory: '/team/:category',
    teamDetail: '/team/:slug/detail',
    gallery: '/gallery',

    page404: '*',

    admin: '/admin/:slug',
    adminHomePage: '/admin/homepage',
    adminQltk: '/admin/qltk',
    adminQlsq: '/admin/qlsp',
    adminQllsq: '/admin/qllsp',
};
export default routes;
