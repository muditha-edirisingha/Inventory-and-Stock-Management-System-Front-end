import { Routes } from '@angular/router';
import { ProductManageComponent } from './page/product-manage/product-manage.component';
import { StockManageComponent } from './page/stock-manage/stock-manage.component';
import { LoginComponent } from './page/login/login.component';
import { DashBoardPageComponent } from './page/dash-board-page/dash-board-page.component';

export const routes: Routes = [
    {
        path:"",
        component:LoginComponent
    },

    {
        path:"product",
        component:ProductManageComponent
    },

    {
        path:"stock",
        component:StockManageComponent
    },
    {
        path:"dashboard",
        component:DashBoardPageComponent,
        children:[
            {
                path:"product",
                component:ProductManageComponent
            },
            {
                path:"stock",
                component:StockManageComponent
            }
        ]
    }
];
