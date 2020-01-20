import Header from "./components/Header.vue";
import Home from './components/Home.vue'

const User = resolve => {
    require.ensure(['./components/user/User.vue'], ()=>{
        resolve(require('./components/user/User.vue'));
    });
};

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], ()=>{
        resolve(require('./components/user/UserStart.vue'));
    });
};

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], ()=>{
        resolve(require('./components/user/UserEdit.vue'));
    });
};

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], ()=>{
        resolve(require('./components/user/UserDetail.vue'));
    });
};

export const routes = [
    {path: '/', components: { default: Home, 'header-top': Header}, name: 'home'},
    {path: '/user', components: { default: User, 'header-bottom': Header}, children: [
            {path: '', component: UserStart},
            {path: ':id', component: UserDetail, beforeEnter: (to, from, next)=>{
                console.log('beforeEnter UserDetail');
                next();
                }},
            {path: ':id/edit', component: UserEdit, name: 'userEdit'}
        ]},
    {path:'/redirect-me', redirect: {name: 'home'}},
    {path: '*', redirect: '/'}
];