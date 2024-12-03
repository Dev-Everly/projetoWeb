import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos.service';
import { CommonModule, } from '@angular/common';
import { VeiculoModel } from './veiculo.model';
import { FormsModule } from '@angular/forms';;

 

 



@Component({
  selector: 'app-veiculos',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './veiculos.component.html',
  styleUrl: './veiculos.component.css'
})


export class VeiculosComponent implements OnInit {

  veiculo:VeiculoModel = new  VeiculoModel(); 

  veiculos : Array<any> = new Array ();

  constructor (private veiculosService: VeiculosService) {
    
  }

  ngOnInit() {
    this.listarVeiculos ();
  }

  atualizar(id: number) {
    const veiculoParaAtualizar = this.veiculos.find(v => v.id === id);
    if (veiculoParaAtualizar) {
      this.veiculo = { ...veiculoParaAtualizar };
      this.veiculosService.atualizarVeiculo(id, this.veiculo).subscribe(
        () => {
          this.listarVeiculos();
        },
        err => {
          console.log('Erro ao atualizar veículo', err);
        }
      );
    }
  }

  remover(id: number) {
    this.veiculosService.removerVeiculo(id).subscribe(
        () => {
            this.listarVeiculos(); // Atualiza a lista após remoção
        },
        err => {
            console.log('Erro ao remover veículo', err);
        }
    );
}

cadastrar() {
  console.log(this.veiculo)
  this.veiculosService.cadastrarVeiculo(this.veiculo).subscribe (veiculo => {

    this.veiculo = new VeiculoModel ();
    this.listarVeiculos();

  }, err=> {
    console.log ('Erro', err)
  })
}


 listarVeiculos() {
this.veiculosService.listarVeiculos().subscribe(veiculos => { 
  this.veiculos = veiculos;
}, err => {
  console.log ('Erro ao listar Veiculos', err)
}

 );
 
  }
}