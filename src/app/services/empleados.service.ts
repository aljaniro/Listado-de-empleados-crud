import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { empleadolista } from '../componentes/empleado/emple';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private readonly http:HttpClient) {

   }

   addempleado(perso:empleadolista):Observable<empleadolista>{
    return this.http.post<empleadolista>('https://api.escuelajs.co/api/v1/users',perso)
   }

   getempleados():Observable<empleadolista[]>{
    return this.http.get<empleadolista[]>('https://api.escuelajs.co/api/v1/users')
   }

   eliminarempleado(id:number):Observable<any>{
    return this.http.delete<any>(`https://api.escuelajs.co/api/v1/users/${id}`)
   }
   getid(id:number):Observable<empleadolista>{
    return this.http.get<empleadolista>(`https://api.escuelajs.co/api/v1/users/${id}`)
   }
   updateEmpleado(id:any,emple:empleadolista):Observable<empleadolista>{
    return this.http.put<empleadolista>(`https://api.escuelajs.co/api/v1/users/${id}`,emple)
   }
}
