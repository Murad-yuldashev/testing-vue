export default [
    { path: "/", component: () => import("@/pages/Home.vue") },
    { path: "/users", component: () => import("@/pages/Users.vue") },
];
