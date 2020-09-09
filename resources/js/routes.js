export default routes = [
    {
        path: "/",
        name: "recipes",
        component: require("./components/Recipes-List.vue").default
    },
    {
        path: "/recipe/recipe",
        name: "recipe-details",
        component: require("./components/Recipe.vue").default
    }
];
