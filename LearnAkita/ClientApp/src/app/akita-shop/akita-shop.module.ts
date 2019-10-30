import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AkitaShopRoutingModule } from './akita-shop-routing.module';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AkitaShopRoutingModule
    ],
    declarations: [
        ProductsComponent
    ]
})
export class AkitaShopModule {
}
