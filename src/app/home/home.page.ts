import { Component } from '@angular/core';

import { ProdutosService } from '../api/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  produtos: any[] = [];

  constructor(private produtosService: ProdutosService) {
    this.getProdutos();
  }

  getProdutos() {
    this.produtosService
      .getAll()
      .then((produtos) => {
        this.produtos = produtos;
        console.log(produtos);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

}
