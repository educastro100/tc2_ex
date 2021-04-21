import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../Pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoa_um : Pessoa = {
    nome: "Felipe",
    idade: 14,
    email: "felipe@gmail.com"
  }


  constructor() { }

  ngOnInit(): void {
  }

}
