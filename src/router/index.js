import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";
import LayoutClient from "@/layout/layoutClient";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/register",
    component: () => import("@/views/login/Register"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: LayoutClient,
    redirect: "/",
    hidden: true,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/client/Home"),
        meta: { title: "home", icon: "home" },
      },
      {
        path: "myProject",
        name: "MyProject",
        component: () => import("@/views/client/MyProject"),
        meta: { title: "MyProject", icon: "MyProject" },
      },
      {
        path: "introduce",
        name: "Introduce",
        component: () => import("@/views/client/Introduce"),
        meta: { title: "Introduce", icon: "Introduce" },
      },
      {
        path: "myproject-detail:id",
        name: "MyProjectDetail",
        component: () => import("@/views/client/MyProjectDetail"),
        meta: { title: "MyProjectDetail", icon: "MyProjectDetail" },
      },
      {
        path: "shareholderRelations",
        name: "ShareholderRelations",
        component: () => import("@/views/client/ShareholderRelations"),
        meta: { title: "ShareholderRelations", icon: "ShareholderRelations" },
      },
      {
        path: "product-detail",
        name: "ProductDetail",
        component: () => import("@/views/client/ProductDetail"),
        meta: { title: "home", icon: "home" },
      },
      {
        path: "product",
        name: "ProductDetail",
        component: () => import("@/views/client/Product"),
      },
      {
        path: "news",
        name: "News",
        component: () => import("@/views/client/News"),
      },
      {
        path: "news-detail:id",
        name: "NewsDetail",
        component: () => import("@/views/client/NewsDetail"),
      },
      {
        path: "fieldOfActivity",
        name: "FieldOfActivity",
        component: () => import("@/views/client/FieldOfActivity"),
        meta: { title: "FieldOfActivity", icon: "FieldOfActivity"},
      },
      {
        path: "recruitment",
        name: "Recruitment",
        component: () => import("@/views/client/Recruitment"),
        meta: { title: "Recruitment", icon: "Recruitment"},
      },
    ],
  },
  {
    path: "/",
    redirect: "/",
    name: "Dashboard",
    meta: { title: "Dashboard", icon: "el-icon-s-help" },
  },
  // {
  //   path: "/admin",
  //   component: Layout,
  //   redirect: "/admin/category",
  //   name: "Admin",
  //   meta: { title: "Example", icon: "el-icon-s-help" },
  //   children: [
  //     {
  //       path: "table",
  //       name: "Table",
  //       component: () => import("@/views/admin/Table.vue"),
  //       meta: { title: "Table", icon: "table" },
  //     },
  //   ],
  // },
  {
    path: "/admin",
    component: Layout,
    name: "Admin",
    children: [
      {
        path: "ProductType",
        name: "ProductType",
        component: () => import("@/views/admin/ProductType.vue"),
        meta: { title: "Quản lý danh mục sản phẩm" },
      },
    ],
  },
  {
    path: "/admin",
    component: Layout,
    name: "Admin",
    children: [
      {
        path: "product",
        name: "Product",
        component: () => import("@/views/admin/Product.vue"),
        meta: { title: "Quản lý sản phẩm" },
      },
    ],
  },
  {
    path: "/admin",
    component: Layout,
    name: "Admin",
    // meta: { title: "Category", icon: "el-icon-s-help" },
    children: [
      {
        path: "category",
        name: "Category",
        component: () => import("@/views/admin/Category.vue"),
        meta: { title: "Quản lý danh mục bài viết" },
      },
    ],
  },

  {
    path: "/admin",
    component: Layout,
    name: "Admin",
    // meta: { title: "Posts", icon: "el-icon-s-help" },
    children: [
      {
        path: "posts",
        name: "Posts",
        component: () => import("@/views/admin/Posts.vue"),
        meta: { title: "Quản lý bài viết" },
      }
    ],
  },
  {
    path: "/admin",
    component: Layout,
    name: "Admin",
    // meta: { title: "Media", icon: "el-icon-s-help" },
    children: [
      {
        path: "media",
        name: "Media",
        component: () => import("@/views/admin/Media.vue"),
        meta: { title: "Quản lý Media" },
      }
    ],
  },
  {
    path: "/admin",
    component: Layout,
    name: "Admin",
    // meta: { title: "Slide", icon: "el-icon-s-help" },
    children: [
      {
        path: "slide",
        name: "Slide",
        component: () => import("@/views/admin/Slide.vue"),
        meta: { title: "Quản lý Slide" },
      }
    ],
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
