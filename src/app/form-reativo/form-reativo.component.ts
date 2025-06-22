import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/*

Já os formulários reativos são gerenciados diretamente via código TypeScript. Com essa abordagem, o Angular oferece algumas classes como FormGroup, FormControl e FormArray para um controle mais estruturado e dinâmico dos dados.

Vamos usar o mesmo exemplo do formulário para cadastrar o nome e o e-mail de uma pessoa usuária na aplicação, mas agora usando a abordagem de formulários reativos:

No exemplo acima, o formulário é definido no TypeScript usando FormGroup e FormControl para criar e gerenciar os campos. Isso permite maior controle sobre os dados, validações mais avançadas e uma estrutura mais flexível, sendo uma opção ideal para aplicações complexas e escaláveis.

Se você está desenvolvendo um formulário básico, como uma inscrição para newsletter ou um simples login, os formulários orientados a templates vão te atender muito bem. Agora, se sua aplicação tem formulários dinâmicos, validação complexa ou precisa de integrações maiores, os formulários reativos são uma boa opção.

No final das contas, não existe uma solução certa ou errada, mas sim a mais adequada para cada caso. Escolha com sabedoria e feliz codificação!

https://angular.dev/guide/forms
*/




@Component({
  selector: 'app-form-reativo',
  imports: [ ReactiveFormsModule  ],
  templateUrl: './form-reativo.component.html',
  styleUrl: './form-reativo.component.scss'
})
export class FormReativoComponent {

  meuFormulario = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  // Cria um método que calcula o total de uma lista de produtos
  calcularTotalProdutos(produtos: { preco: number; quantidade: number }[]): number {
    return produtos.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
  }

  enviarFormulario() {
    console.log('Dados enviados:', this.meuFormulario.value);
  }

}
