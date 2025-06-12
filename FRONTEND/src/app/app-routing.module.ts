import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/Inicio/menu/menu.component';
import { CreateCComponent } from './components/Inicio/create-c/create-c.component';
import { LoginComponent } from './components/Inicio/login/login.component';
import { MenuEComponent } from './components/Perfil_E/menu-e/menu-e.component';
import { MiPerfilComponent } from './components/Perfil_E/mi-perfil/mi-perfil.component';
import { CreateProComponent } from './components/Perfil_E/create-pro/create-pro.component';
import { ListProComponent } from './components/Perfil_E/list-pro/list-pro.component';
import { ListAplicaComponent } from './components/Perfil_E/list-aplica/list-aplica.component';
import { CreateFormComponent } from './components/Perfil_E/create-form/create-form.component';
import { ListFormComponent } from './components/Perfil_E/list-form/list-form.component';
import { ViewResComponent } from './components/Perfil_E/view-res/view-res.component';
import { MenuPComponent } from './components/Perfil_P/menu-p/menu-p.component';
import { MiperfilPComponent } from './components/Perfil_P/miperfil-p/miperfil-p.component';
import { LisProPComponent } from './components/Perfil_P/lis-pro-p/lis-pro-p.component';
import { MoreInfoProComponent } from './components/Perfil_P/more-info-pro/more-info-pro.component';
import { MenuAplicarComponent } from './components/Perfil_P/menu-aplicar/menu-aplicar.component';
import { ListProAComponent } from './components/Perfil_P/list-pro-a/list-pro-a.component';
import { MenuCComponent } from './components/Cursos/menu-c/menu-c.component';
import { MoreInfoCComponent } from './components/Cursos/more-info-c/more-info-c.component';
import { ListMCComponent } from './components/Cursos/list-mc/list-mc.component';
import { ClasesComponent } from './components/Cursos/clases/clases.component';
import { ClaseByComponent } from './components/Cursos/clase-by/clase-by.component';
import { CuestionarioComponent } from './components/Cursos/cuestionario/cuestionario.component';
import { InfoApliComponent } from './components/Perfil_E/info-apli/info-apli.component';
import { Prueba1Component } from './components/pruebas/prueba1/prueba1.component';
import { loginPguard } from "./guards/loginPguard";
import { loginEguard } from './guards/loginEguard';
import { login } from './guards/login';

const routes: Routes = [
  //Rutas del Incio
  {path: '', redirectTo: '/menu', pathMatch: 'full' },
  {path: 'menu', component:MenuComponent, canActivate: [login]},
  {path: 'createC', component:CreateCComponent, canActivate: [login]},
  {path: 'login', component:LoginComponent, canActivate: [login]},
  //
  //
  //Rutas de Perfil_E
  {path: 'menuE/:enom', component:MenuEComponent, canActivate: [loginEguard]},
  {path: 'miperfilE/:enom', component:MiPerfilComponent, canActivate: [loginEguard]},
  {path: 'createPro/:enom', component:CreateProComponent, canActivate: [loginEguard]},
  {path: 'listPro/:enom', component:ListProComponent, canActivate: [loginEguard]},
  {path: 'listApli/:enom/:tit', component:ListAplicaComponent, canActivate: [loginEguard]},
  {path: 'createFomr/:enom', component:CreateFormComponent, canActivate: [loginEguard]},
  {path: 'lisForm/:enom', component:ListFormComponent, canActivate: [loginEguard]},
  {path: 'viewRes/:enom/:tit/:id', component:ViewResComponent, canActivate: [loginEguard]},
  {path: 'infoA/:enom/:tit/:pcor', component:InfoApliComponent, canActivate: [loginEguard]},
  ////
  ////
  ////
  //Rutas de Perfil_P
  {path: 'menuP/:cor', component:MenuPComponent, canActivate: [loginPguard]},
  {path: 'miperfilP/:cor', component:MiperfilPComponent, canActivate: [loginPguard]}, 
  {path: 'listPP/:cor', component:LisProPComponent, canActivate: [loginPguard]},
  {path: 'moreInfoPro/:cor/:enom/:tit', component:MoreInfoProComponent, canActivate: [loginPguard]},
  {path: 'menuA/:cor/:enom/:tit', component:MenuAplicarComponent, canActivate: [loginPguard]}, 
  {path: 'listPA/:cor', component:ListProAComponent, canActivate: [loginPguard]},
  ////
  ////
  ////
  //Rutas de Cursos
  {path: 'menuC/:pcor', component:MenuCComponent},
  {path: 'moreInfoC/:pcor/:cnom', component:MoreInfoCComponent}, 
  {path: 'listMC/:pcor', component:ListMCComponent}, 
  {path: 'clases/:pcor/:cnom', component:ClasesComponent},
  {path: 'clases_by/:pcor/:cnom/:cid', component:ClaseByComponent}, 
  {path: 'cuest/:pcor/:cnom/:cid', component:CuestionarioComponent},
  ////
  ////
  ////
  //Pruebas
  {path: "prueba1", component:Prueba1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
