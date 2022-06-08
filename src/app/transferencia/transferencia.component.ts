import { Router } from '@angular/router';
import { ExtratoComponent } from './../extrato/extrato.component';
import { Transferencia } from './../../models/transferencia';
import { ServicesService } from './../Services/services.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {


  constructor(private servico: ServicesService, private router: Router) {

   }

  ngOnInit(): void {
  }

  @Output() aoTransferir  = new EventEmitter<any>();

  valor: number = 0;
  conta: number = 0;
  data: string = "";

  transferir(){
    this.servico.adicionar({valor: this.valor, conta: this.conta, data : new Date()})
    .subscribe(
      (result) => {
      console.log(result);
      this.limpar();
      this.router.navigateByUrl('extrato')
      },
       (error) => console.log(error)
    );
  }

  limpar(){
    this.valor = 0;
    this.conta = 0;
  }
}
