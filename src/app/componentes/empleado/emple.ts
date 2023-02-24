/*export class empleadolista{
  name:string
  apellido:string
  edad: number
  telefono:number
  email:string

  constructor(name:string,apellido:string,edad:number,telefono:number,email:string){
    this.name = name,
    this.apellido = apellido,
    this.edad = edad,
    this.telefono = telefono,
    this.email = email
  }
}*/
export interface empleadolista{
  avatar?:string
  id?:string
name?:string
password?: string
role?:string
email?:string
}
