import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './_components/dashboard/dashboard.component';
import {PageNotFoundComponent} from './_components/page-not-found/page-not-found.component';
import {StoreDetailComponent} from './_components/stores/store-detail/store-detail.component';
import {StoresComponent} from './_components/stores/stores.component';
import {UserDetailComponent} from './_components/users/user-detail/user-detail.component';
import {UsersComponent} from './_components/users/users.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserDetailComponent},
  {path: 'stores', component: StoresComponent},
  {path: 'stores/:id', component: StoreDetailComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
