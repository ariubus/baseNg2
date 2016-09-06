"use strict";
var CustomerDetails_1 = require("./Components/CustomerDetails");
var CustomerList_1 = require("./Components/CustomerList");
var About_1 = require("./Components/About");
exports.appRoutes = [
    { path: '/', name: 'Customers', component: CustomerList_1.CustomerList, useAsDefault: true },
    { path: '/result', name: 'Result', component: CustomerDetails_1.CustomerDetails },
    { path: '/about', name: 'About', component: About_1.About }
];
//# sourceMappingURL=app.routes.js.map