import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MenuEComponent } from './components/Perfil_E/menu-e/menu-e.component';
import { MenuComponent } from './components/Inicio/menu/menu.component';
import { CreateCComponent } from './components/Inicio/create-c/create-c.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { LoginComponent } from './components/Inicio/login/login.component';
import { MiPerfilComponent } from './components/Perfil_E/mi-perfil/mi-perfil.component';
import { CreateProComponent } from './components/Perfil_E/create-pro/create-pro.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListProComponent } from './components/Perfil_E/list-pro/list-pro.component';
import { ListAplicaComponent } from './components/Perfil_E/list-aplica/list-aplica.component';
import { CreateFormComponent } from './components/Perfil_E/create-form/create-form.component';
import {MatSelectModule} from '@angular/material/select';
import { ListFormComponent } from './components/Perfil_E/list-form/list-form.component';
import { ViewResComponent } from './components/Perfil_E/view-res/view-res.component';
import { MenuPComponent } from './components/Perfil_P/menu-p/menu-p.component';
import { MiperfilPComponent } from './components/Perfil_P/miperfil-p/miperfil-p.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LisProPComponent } from './components/Perfil_P/lis-pro-p/lis-pro-p.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MoreInfoProComponent } from './components/Perfil_P/more-info-pro/more-info-pro.component';
import { MenuAplicarComponent } from './components/Perfil_P/menu-aplicar/menu-aplicar.component';
import { ListProAComponent } from './components/Perfil_P/list-pro-a/list-pro-a.component';
import { MenuCComponent } from './components/Cursos/menu-c/menu-c.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MoreInfoCComponent } from './components/Cursos/more-info-c/more-info-c.component';
import { ListMCComponent } from './components/Cursos/list-mc/list-mc.component';
import { ClasesComponent } from './components/Cursos/clases/clases.component';
import { ClaseByComponent } from './components/Cursos/clase-by/clase-by.component';
import { CuestionarioComponent } from './components/Cursos/cuestionario/cuestionario.component';
import { InfoApliComponent } from './components/Perfil_E/info-apli/info-apli.component';
import { Prueba1Component } from './components/pruebas/prueba1/prueba1.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuEComponent,
    MenuComponent,
    CreateCComponent,
    LoginComponent,
    MiPerfilComponent,
    CreateProComponent,
    ListProComponent,
    ListAplicaComponent,
    CreateFormComponent,
    ListFormComponent,
    ViewResComponent,
    MenuPComponent,
    MiperfilPComponent,
    LisProPComponent,
    MoreInfoProComponent,
    MenuAplicarComponent,
    ListProAComponent,
    MenuCComponent,
    MoreInfoCComponent,
    ListMCComponent,
    ClasesComponent,
    ClaseByComponent,
    CuestionarioComponent,
    InfoApliComponent,
    Prueba1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonToggleModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
