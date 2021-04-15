import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EditComponent} from './edit/edit.component';
import {CreateComponent} from './create/create.component';
import {DeleteComponent} from './delete/delete.component';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'delete/:id',
    component: DeleteComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
