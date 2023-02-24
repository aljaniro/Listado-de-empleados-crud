import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { empleadolista } from './emple';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  form!: FormGroup;
  tam:number=0
  listaEmpleados:empleadolista[]=[]
  constructor(private readonly fb: FormBuilder,private readonly empleservice:EmpleadosService) {

  }

  ngOnInit(): void {
    this.form = this.initform();
    this. cargarapi()

    console.log(this.form)
    console.log(this.form.value)

  }

    enviar():void{
   //   console.log(this.form.controls['apellido'].value)
      this.tam= this.listaEmpleados.length
      console.log(this.tam)
      console.log(this.form)
      this.empleservice.addempleado(this.form.value).subscribe({
        next: (data)=>{
          console.log(data)
          this.cargarapi()
        },
        error:(error)=>{
          console.log(error)
        },
        complete:()=>{
          console.log("Proceso completado")
        }
      })
        console.log(this.listaEmpleados)
        this. cargarapi()

    }
    initform():FormGroup{
    return this.fb.group({
        avatar:["https://api.lorem.space/image/face?w=640&h=480&r=6173"],
        name:['',[Validators.required]],
        password:['',[Validators.required]],
       role:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],

      })
    }
    eliminar(id:any){
      console.log(id)
      this.empleservice.eliminarempleado(id).subscribe({
        next: (data)=>{
          console.log(data)
          this.cargarapi()
        },
        error:(error)=>{
          console.log(error)
        },
        complete:()=>{
          console.log("Proceso completado")
        }
      })
    }
    cargarapi(){
      this.empleservice.getempleados().subscribe({
        next: (valor:any)=>{
         this.listaEmpleados=valor


          console.log(valor)
          console.log(this.listaEmpleados)
        },
        error: (error:any)=>{
          console.log(error)
        },
        complete:()=>{
          console.log('Proceso completado')
        }
      })
    }

    editar(id:any ){
      console.log(id)
      this.tam=id
      this.empleservice.getid(id).subscribe({
        next: (valor:any)=>{
          console.log(valor)
          this.form.patchValue({name:valor.name,password:valor.password,role:valor.role,email:valor.email})

          console.log(valor)
          console.log(this.form)
        },
        error: (error:any)=>{
          console.log(error)
        },
        complete:()=>{
          console.log('Proceso completado')
        }
      })
    }
    modificar(){
      console.log(this.form)

      console.log(this.tam)
      this.empleservice.updateEmpleado(this.tam,this.form.value).subscribe({
        next:(valor)=>{
          console.log(valor)
          this.form.reset()
          this.cargarapi()
        },
        error:(error)=>{
          console.log(error)
        },
        complete:()=>{
          console.log("completo")
        }
      })
    }
}
