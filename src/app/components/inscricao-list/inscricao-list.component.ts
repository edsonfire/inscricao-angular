import { Component, OnInit } from '@angular/core';
import { InscricaoService } from 'src/app/inscricao.service';
import { Inscricao } from 'src/app/models/inscricao.model';

@Component({
  selector: 'app-inscricao-list',
  templateUrl: './inscricao-list.component.html',
  styleUrls: ['./inscricao-list.component.css']
})
export class InscricaoListComponent implements OnInit {

  inscricoes:Inscricao[]=[];
  displayedColumns: string[] = ['id', 'nome', 'departamento'];
  constructor(private inscricaoService:InscricaoService) { }

  ngOnInit(): void {
    this.getallInscricoes();
  }




  getallInscricoes(){
    this.inscricaoService.getInscricoes().subscribe({

      next: inscricoes => {
        this.inscricoes = inscricoes;
      }, error: err => console.log('Erro ao carregar inscricoes', err)
    })  }

}
