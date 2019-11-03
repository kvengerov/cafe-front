import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './_material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'ngx-owl-carousel-o';

import {AppComponent} from './app.component';
import {SignupComponent} from './_components/auth/signup/signup.component';
import {SigninComponent} from './_components/auth/signin/signin.component';
import {AuthInterceptor} from './_interceptors/auth.interceptor';
import {SectionSearchResultComponent} from './_components/dashboard/section-search-result/section-search-result.component';
import {HeaderComponent} from './_components/header/header.component';
import {FooterComponent} from './_components/footer/footer.component';
import {PageNotFoundComponent} from './_components/page-not-found/page-not-found.component';
import {DashboardComponent} from './_components/dashboard/dashboard.component';
import {SectionFeaturesComponent} from './_components/dashboard/section-features/section-features.component';
import {SectionSearchComponent} from './_components/dashboard/section-search/section-search.component';
import {ReviewsComponent} from './_components/reviews/reviews.component';
import {ReviewComponent} from './_components/reviews/review/review.component';
import {AddReviewComponent} from './_components/reviews/add-review/add-review.component';
import {UsersComponent} from './_components/users/users.component';
import {StoreDetailComponent} from './_components/stores/store-detail/store-detail.component';
import {UserDetailComponent} from './_components/users/user-detail/user-detail.component';
import {StoresComponent} from './_components/stores/stores.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UsersComponent,
    StoresComponent,
    HeaderComponent,
    FooterComponent,
    StoreDetailComponent,
    UserDetailComponent,
    DashboardComponent,
    SigninComponent,
    SignupComponent,
    SectionFeaturesComponent,
    SectionSearchComponent,
    ReviewsComponent,
    ReviewComponent,
    AddReviewComponent,
    SectionSearchResultComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule,
  ],
  entryComponents: [
    SigninComponent,
    SignupComponent,
    SectionSearchResultComponent,
    AddReviewComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, multi: true, useClass: AuthInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
