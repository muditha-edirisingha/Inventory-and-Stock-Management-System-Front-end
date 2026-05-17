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
import { LowStockRootComponent } from './page/low-stock-root/low-stock-root.component';
import { LowStockViewComponent } from './page/low-stock-view/low-stock-view.component';
import { ProductSearchIdComponent } from './page/product-search-id/product-search-id.component';
import { ProductSearchNameComponent } from './page/product-search-name/product-search-name.component';
import { StockHistoryIdComponent } from './page/stock-history-id/stock-history-id.component';
import { SupplierByIdComponent } from './page/supplier-by-id/supplier-by-id.component';
import { SupplierByNameComponent } from './page/supplier-by-name/supplier-by-name.component';
import { DashboardHomeComponent } from './page/dashboard-home/dashboard-home.component';

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
                component:DashboardHomeComponent
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
                    },
                    {
                        path:"product-search-id",
                        component:ProductSearchIdComponent
                    },
                    {
                        path:"product-search-name",
                        component:ProductSearchNameComponent
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
                    },
                    {
                        path:"stock-search-id",
                        component:StockHistoryIdComponent
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
                    },
                    {
                        path:"supplier-search-id",
                        component:SupplierByIdComponent
                    },
                    {
                        path:"supplier-search-name",
                        component:SupplierByNameComponent
                    }
                ] 
            },
            {
                path:"low-stock",
                component:LowStockRootComponent,
                children:[
                    {
                        path:"",
                        component:LowStockViewComponent
                    },
                    {
                        path:"view-all-low-stocks",
                        component:LowStockViewComponent
                    }
                ]
            }
        ]
    }
];
