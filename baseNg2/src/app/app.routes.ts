import {CustomerDetails} from "./Components/CustomerDetails"
import {CustomerList} from "./Components/CustomerList";
import {About} from "./Components/About";



export const appRoutes = [
    { path: '/', name:'Customers', component: CustomerList, useAsDefault: true},
    { path: '/result', name: 'Result', component: CustomerDetails },
    { path: '/about', name: 'About', component: About }
];