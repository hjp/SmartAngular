import { MatchHeightDirective } from './shared/match-height/match-height.directive';
import { PersonsComponent } from './demos/nested/persons/persons.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { BindingComponent } from './demos/binding/binding.component';
import { BrowserModule } from '@angular/platform-browser';
import { CustomDirectivesComponent } from './demos/custom-directives/custom-directives.component';
import { CustomPipesComponent } from './demos/custom-pipes/custom-pipes.component';
import { DemosComponent } from './demos/demos.component';
import { DirectivesComponent } from './demos/directives/directives.component';
import { ExpressionsComponent } from './demos/expressions/expressions.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './demos/custom-directives/highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { InlineComponent } from './demos/inline/inline.component';
import { InternationalizationComponent } from './demos/internationalization/internationalization.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { NestedComponent } from './demos/nested/nested.component';
import { PipesComponent } from './demos/pipes/pipes.component';
import { RouterModule, Routes } from '@angular/router';
import { StructDirectivesComponent } from './demos/struct-directives/struct-directives.component';
import { TemplateComponent } from './demos/template/template.component';
import { VoucherComponent } from './vouchers/voucher/voucher.component';
import { VoucherFilterPipe } from './demos/custom-pipes/voucher-filter.pipe';
import { VouchersListComponent } from './vouchers/vouchers-list.component';
import { VoucherDetailComponent } from './vouchers/voucher/voucher-detail/voucher-detail.component';
import { VoucherDetailsListComponent } from './vouchers/voucher/voucher-details-list/voucher-details-list.component';
import { VouchersService } from './vouchers/voucher.service';
import { UnderlineDirective } from "./demos/custom-directives/underline.directive";
import { ContentProjectionComponent } from './demos/content-projection/content-projection.component';
import { EmployeeComponent } from './demos/content-projection/employee/employee.component';
import { NavbarComponent } from './shared/index';
import { PersonEditComponent } from './demos/nested/person-edit/person-edit.component';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe)


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    VouchersListComponent,
    AccountsComponent,
    VoucherComponent,
    VoucherDetailComponent,
    VoucherDetailsListComponent,
    DemosComponent,         
    InlineComponent, 
    BindingComponent, 
    TemplateComponent, 
    PipesComponent, 
    DirectivesComponent, 
    StructDirectivesComponent,  
    NestedComponent,     
    CustomDirectivesComponent, 
    CustomPipesComponent, 
    InternationalizationComponent, 
    ExpressionsComponent, 
    VoucherFilterPipe,
    UnderlineDirective,
    PersonsComponent,
    PersonEditComponent,
    ContentProjectionComponent,
    EmployeeComponent,
    NavbarComponent,
    MatchHeightDirective
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [VouchersService,
  // {provide: LOCALE_ID, useValue: "de-DE"}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
