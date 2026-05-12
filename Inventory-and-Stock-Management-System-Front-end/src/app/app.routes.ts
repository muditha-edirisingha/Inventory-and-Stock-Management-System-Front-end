import { Routes } from '@angular/router';
import { ProductManageComponent } from './page/product-manage/product-manage.component';
import { StockManageComponent } from './page/stock-manage/stock-manage.component';

export const routes: Routes = [
    {
        path:"product",
        component:ProductManageComponent
    },
    {
        path:"stock",
        component:StockManageComponent
    }
];
