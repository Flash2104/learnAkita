import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';

const akitaShopRoutes: Routes = [
    {
        path: 'products',
        component: ProductsComponent
    },
    { path: '', redirectTo: '/akita-shop/products', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(
            akitaShopRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AkitaShopRoutingModule { }
