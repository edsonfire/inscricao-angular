import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscricaoService } from 'src/app/inscricao.service';
import { Inscricao } from 'src/app/models/inscricao.model';
import { MessagesServiceService } from 'src/app/services/messages-service.service';

@Component({
  selector: 'app-inscricao-form',
  templateUrl: './inscricao-form.component.html',
  styleUrls: ['./inscricao-form.component.css']
})
export class InscricaoFormComponent implements OnInit {

  inscricao:Inscricao= new Inscricao();
  inscricoes:Inscricao[]=[];
  meuFormGroup!:FormGroup;

  constructor(private inscricaoService:InscricaoService, private formBuilder: FormBuilder, private msg:MessagesServiceService) { }

  ngOnInit(): void {
    this.getAllInscricoes();
    this.createForm(this.createEmptyInscricao());
  }



public getAllInscricoes(){
  this.inscricaoService.getInscricoes().subscribe({
    next:insc=>{
      this.inscricoes =insc;
    },
    error:err=>{
      console.log(err);
    }
  });

}

private createForm(insc:Inscricao){
  this.meuFormGroup = this.formBuilder.group({
   nome:[insc.nome,[Validators.required,Validators.minLength(3)]],
   email:['',[Validators.required]],
   pai:[insc.pai,[Validators.required,Validators.minLength(3)]],
   mae:[insc.mae,[Validators.required,Validators.minLength(3)]],
   idade:[insc.idade,[Validators.required,Validators.min(1)]],
   departamento:['Teen',[Validators.required]],
   telefone:[insc.telefone,[Validators.required]],
  });
  
 
}

private createEmptyInscricao():Inscricao {
  return new Inscricao();
}


private saveInscricao(inscricao:Inscricao){
  this.inscricaoService.sendInscricao(inscricao).subscribe({
    next:insc=>{

     
      this.createForm(this.createEmptyInscricao());
      this.msg.sendSuccessMessage("Inscrição realizada com sucesso!");
    },
    error:err=>{
      console.log(err.error.value);

      let errom; 
       if(err.error.mensagem===undefined){

      }else{
        errom = err.error.mensagem;
      }



      if(err.error.email===undefined){

      }else{
      errom =err.error.email;
      }

     
      this.msg.sendErrorMessage(errom);
    }
  });

}


submit(){
this.meuFormGroup.markAllAsTouched();
if(this.meuFormGroup.invalid){

  let inscricao = this.meuFormGroup.value;
  this.msg.sendWarningMessage("Preencha todos os campos!");
  return ;

}


let inscricao = this.meuFormGroup.value as Inscricao;
inscricao = this.meuFormGroup.value;


  this.saveInscricao(inscricao);
  this.inscricao = this.createEmptyInscricao();
}


get f(){
  return this.meuFormGroup.controls;
}


}