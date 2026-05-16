import { Routes } from '@angular/router';
import { ProductManageComponent } from './page/product-manage/product-manage.component';
import { StockManageComponent } from './page/stock-manage/stock-manage.component';
import { LoginComponent } from './page/login/login.component';
import { DashBoardPageComponent } from './page/dash-board-page/dash-board-page.component';
import { SupplierManageComponent } from './page/supplier-manage/supplier-manage.component';
import { AddProductComponent } from './page/add-product/add-product.component';
import { ProductRootComponent } from './page/product-root/product-root.component';
import { StockRootComponent } from './page/stock-root/stock-root.component';
import { AddStockComponent } from './page/add-stock/add-stock.component';
import { RemoveStockComponent } from './page/remove-stock/remove-stock.component';
import { SupplierRootComponent } from './page/supplier-root/supplier-root.component';
import { AddSupplierComponent } from './page/add-supplier/add-supplier.component';

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
        path:"supplier",
        component:StockManageComponent
    },
    {
        path:"dashboard",
        component:DashBoardPageComponent,
        children:[
            {
                path:"",
                component:DashBoardPageComponent
            },
            {
                path:"product",
                component:ProductRootComponent,
                children:[
                    {
                        path:"",
                        component:ProductManageComponent
                    } ,
                    {
                        path:"add-product",
                        component:AddProductComponent
                    },
                    {
                        path:"view-all",
                        component:ProductManageComponent
                    } 

                ] 

            },
            {
                path:"stock",
                component:StockRootComponent,
                children:[
                    {
                        path:"",
                        component:StockManageComponent
                    },
                    {
                        path:"add-stock",
                        component:AddStockComponent
                    },
                    {
                        path:"view-all-stocks",
                        component:StockManageComponent
                    },
                    {
                        path:"remove-stock",
                        component:RemoveStockComponent
                    }
                
                ]
            },
            {
                path:"supplier",
                component:SupplierRootComponent,
                children:[
                    {
                        path:"",
                        component:SupplierManageComponent
                    },
                    {
                        path:"view-all-suppliers",
                        component:SupplierManageComponent
                    } ,
                    {
                        path:"add-supplier",
                        component:AddSupplierComponent
                    }
                ] 
            }
        ]
    }
];
