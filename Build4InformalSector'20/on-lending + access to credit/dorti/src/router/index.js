import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import login from "../views/login.vue";
import signup from "../views/signup.vue";
import dashboard from "../views/dashboard.vue";
import acheivements from "../views/acheivements.vue";
import wallet from "../views/wallet.vue";
import notification from "../views/notification.vue";
import adddorti from "../views/addDorti.vue";
import settings from "../views/settings.vue"

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "login",
        component: login,
    },
    {
        path: "/signup",
        name: "signup",
        component: signup,
    },

    {
        path: "/dashboard",
        name: "dashboard",
        component: dashboard,
    },

    {
        path: "/acheivements",
        name: "acheivements",
        component: acheivements,
    },

    {
        path: "/wallet",
        name: "wallet",
        component: wallet,
    },
    {
        path: "/adddorti",
        name: "adddorti",
        component: adddorti,
    },

    {
        path: "/notification",
        name: "notification",
        component: notification,
    },
    {
        path: "/settings",
        name: "settings",
        component: settings,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;