import { Transferencia } from './../../models/transferencia';
import { ServicesService } from './../Services/services.service';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  servico : ServicesService;
  transferencias : any []

  constructor(services : ServicesService) {
    this.servico = services;
    this.transferencias = [];
  }

  ngOnInit(): void {
    this.servico.Listartransferencias().subscribe((transferencias: Transferencia[]) => {
      this.transferencias = transferencias;
    });
  }


}
