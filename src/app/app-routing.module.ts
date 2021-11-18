import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscricaoFormComponent } from './components/inscricao-form/inscricao-form.component';
import { InscricaoListComponent } from './components/inscricao-list/inscricao-list.component';

const routes: Routes = [
   
    {path: 'inscrevase', component: InscricaoFormComponent},
    {path: 'list', component:InscricaoListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
