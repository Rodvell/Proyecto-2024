import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { perfil_e_response } from 'src/app/models/Perfil_E/Perfil_E_response';
import { newperfile } from 'src/app/models/Perfil_E/newPerfilE';
import { mensaje_general } from 'src/app/models/mensaje_general';
import { BehaviorSubject } from 'rxjs';
import { newpropuestas } from 'src/app/models/Propuestas/newPropuesta';
import { propuestas_response } from 'src/app/models/Propuestas/Propuestas_response';
import { aplica_response } from 'src/app/models/Aplica/Aplica_response';
import { newperfil_p } from 'src/app/models/Perfil_P/newPerfil_P';
import { updateaplica } from 'src/app/models/Aplica/updateAplica';
import { formularios_response } from 'src/app/models/Formularios/Formularios_response';
import { newformulario } from 'src/app/models/Formularios/newFormulario';
import { respondef_response } from 'src/app/models/RespondeF/RespondeF_response';
import { perfil_p_response } from 'src/app/models/Perfil_P/Perfil_P_response';
import { newaplica } from 'src/app/models/Aplica/newAplica';
import { newrespondef } from 'src/app/models/RespondeF/newRespondeF';
import { cursos_response } from 'src/app/models/Cursos/Cursos_response';
import { asigna_response } from 'src/app/models/Asigna/Asigna_response';
import { newasigna } from 'src/app/models/Asigna/newAsigna';
import { clases_response } from 'src/app/models/Clases/Clases_response';
import { infromacion_response } from 'src/app/models/Informacion/Informaxion_response';
import { cuestionario_response } from 'src/app/models/Cuestionario/Cuestionario_response';
import { respondeC_response } from 'src/app/models/RespondeC/RespondeC_response';
import { newrespondec } from 'src/app/models/RespondeC/newRespondeC';
import { newclases } from 'src/app/models/Clases/newClases';

const domain = "http://localhost:3000";
const httpOptions = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}

  //Crear un Perfil Empresarial
  createPerfil_E(ecor:string, enom:string, pass:string, tel:string) {
    let user = new newperfile(ecor, enom, pass, tel);
    return this.http.post<mensaje_general>(domain + '/createPE', user,httpOptions)
  }

  //Comrpobar si existe el usuario empresarial
  compPerfil_E(ecor:string, pass:string) {
    return this.http.get<any>(domain + '/getPerfilE_byCor/' + ecor + '/' + pass, httpOptions)
  }

  //Traer la informacion del Perfil_E
  getMiPerfil_E(enom:string) {
    return this.http.get<perfil_e_response>(domain + '/getPerfilE_by/' + enom, httpOptions)
  }

  //Crear una Propuesta
  createPro(enom:string, tit:string, desc:string, requi:string) {
    let user = new newpropuestas(enom, tit, desc, requi)
    return this.http.post<mensaje_general>(domain + '/createPro', user, httpOptions)
  }

  //Traer todas las propuestas de una Empresa
  listPro_by(enom:string) {
    return this.http.get<propuestas_response>(domain + '/getPro_byEnom/' + enom, httpOptions)
  }

  //Traer a las personas que aplicaron a una propuesta
  getAplica_byTit(enom:string, tit:string) {
    return this.http.get<aplica_response>(domain + '/getA_byTit/' + enom + '/' + tit, httpOptions)
  }

  //Crear un Perfil Personal
  createPerfil_P(pnom:string, ape:string, dpi:string, pcor:string, pass:string) {
    let user = new newperfil_p(pnom, ape, dpi, pcor, pass);
    return this.http.post<mensaje_general>(domain + '/createPP', user, httpOptions)
  }

  //Eliminar una Propuesta
  deletePro(enom:string, tit:string) {
    return this.http.delete<mensaje_general>(domain + '/deletePro/' + enom + '/' + tit, httpOptions)
  }

  //Aprobar o Rechazar a alguien
  updateAplica(enom:string, tit:string, pcor:string, aest:string) {
    let user = new updateaplica(enom, tit, pcor, aest)
    return this.http.post<mensaje_general>(domain + '/updateA', user, httpOptions)
  }

  //Traer informacion de un Formulario por Nombre y Titutlo
  getForm_by(enom:string, tit:string) {
    return this.http.get<formularios_response>(domain + '/getForm_byTit/' + enom + '/' + tit, httpOptions)
  }

  //Crear una Pregunta del Formulario
  createForm(enom:string, tit:string, id:number, preg:string) {
    let user = new newformulario(enom, tit, id, preg)
    return this.http.post<mensaje_general>(domain + '/createForm', user, httpOptions)
  }

  //Eliminar una pregunta
  deleteForm(enom:string, tit:string, id:number) {
    return this.http.delete<mensaje_general>(domain + '/deleteForm/'+enom+'/'+tit+'/'+id, httpOptions)
  }

  //Traer las respustas de una pregunta
  getResF(enom:string, tit:string, id:number) {
    return this.http.get<respondef_response>(domain + '/getResF_byTit/'+enom+'/'+tit+'/'+id, httpOptions)
  }

  //Comprobar si existe el usuario Personal 
  compPerfil_P(cor:string, pass:string) {
    return this.http.get<any>(domain + '/getPP_byComp/'+cor+'/'+pass, httpOptions)
  }

  getMiPerfilP(cor:string) {
    return this.http.get<perfil_p_response>(domain + '/getPP_by/' + cor, httpOptions)
  }

  getAllPro() {
    return this.http.get<propuestas_response>(domain + '/getPro', httpOptions)
  }

  getPro_byTit(enom:string, tit:string) {
    return this.http.get<propuestas_response>(domain + '/getPro_byTit/'+enom+'/'+tit, httpOptions)
  }

  getAplica_byPcor(enom:string, tit:string, pcor:string) {
    return this.http.get<aplica_response>(domain + '/getA_byPcor/'+enom+'/'+tit+'/'+pcor, httpOptions)
  }

  aplicar(enom:string, tit:string, pcor:string, aest:string, adesc:string, ana:string) {
    let user = new newaplica(enom, tit, pcor, aest, adesc, ana)
    return this.http.post<mensaje_general>(domain + '/createA', user, httpOptions)
  }

  getPregForm(enom:string, tit:string) {
    return this.http.get<formularios_response>(domain + '/getForm_byTit/'+enom+'/'+tit, httpOptions)
  }

  guardarResp(enom:string, tit:string, id:number, pcor:string, resp:string) {
    let user = new newrespondef(enom, tit, id, pcor, resp);
    return this.http.post<mensaje_general>(domain + '/createResF', user, httpOptions)
  }

  respondio(enom:string, tit:string, pcor:string) {
    return this.http.get<respondef_response>(domain + '/getResF_byPcor/'+enom+'/'+tit+'/'+pcor, httpOptions)
  }

  Myaplicate(pcor:string) {
    return this.http.get<aplica_response>(domain + '/getA_byPcor/' + pcor, httpOptions)
  }

  getAllCursos() {
    return this.http.get<cursos_response>(domain + '/getCursos', httpOptions)
  }

  getCurso_by(cnom:string) {
    return this.http.get<cursos_response>(domain + '/getCursos_by/' + cnom, httpOptions)
  }

  getAsigna_by(pcor:string, cnom:string) {
    return this.http.get<asigna_response>(domain + '/getAsig_byPC/'+pcor+'/'+cnom, httpOptions)
  }

  asignarme(cnom:string, pcor:string, estado:string) {
    let user = new newasigna(pcor, cnom, estado)
    return this.http.post<mensaje_general>(domain + '/createAsig', user, httpOptions)
  }

  getAsigna_byCnom(pcor:string) {
    return this.http.get<asigna_response>(domain + '/getAsig_byC/' + pcor, httpOptions)
  }

  getClass(cnom:string, pcor:string) {
    return this.http.get<clases_response>(domain + '/getCL_byCN/' + cnom + "/" + pcor, httpOptions)
  }

  getClases(cnom:string) {
    return this.http.get<any>(domain + '/getClas/' + cnom, httpOptions)
  }

  getInfoClass(cnom:string, cid:number) {
    return this.http.get<infromacion_response>(domain + '/getInfo/'+cnom+'/'+cid, httpOptions)
  }

  getCuestionario(cnom:string, cid:number) {
    return this.http.get<cuestionario_response>(domain + '/getCuest_byCid/'+cnom+'/'+cid, httpOptions)
  }

  getConfirm(cnom:string, cid:number, pcor:string) {
    return this.http.get<respondeC_response>(domain + '/getResC_byPcor/'+cnom+'/'+cid+'/'+pcor, httpOptions)
  }

  guardarResC(cnom:string,cid:number, numc:number, pcor:string, resp:string, est:string) {
    let user = new newrespondec(cnom, cid, numc, pcor, resp, est)
    return this.http.post<mensaje_general>(domain + '/createResC', user, httpOptions)
  }

  volver(cnom:string, cid:number, pcor:string) {
    return this.http.delete<mensaje_general>(domain + '/deletResC/'+cnom+'/'+cid+'/'+pcor, httpOptions)
  }

  asigClass(cnom:string, id:number, date:string, est:string) {
    let user = new newclases(cnom, id, date, est)
    return this.http.post<mensaje_general>(domain + '/createCL', user, httpOptions)
  }

  /////////////
  //////////////
  //////////////
  /////////////

  //Datos a modificar
  public mensajeSubject = new BehaviorSubject<string>("Alerta");
  mensaje$ = this.mensajeSubject.asObservable();
}
