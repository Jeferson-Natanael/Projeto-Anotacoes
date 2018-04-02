import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { NotaComponent } from './nota/nota.component';
import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'notas', component: NotaComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
