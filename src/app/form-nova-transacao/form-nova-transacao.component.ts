import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.scss',
})
export class FormNovaTransacaoComponent {
  valorTransacao = '';
  tipoTransacao = '';


  onSubmit() {
    console.log('Transação enviada:', this.valorTransacao);
    console.log('Tipo de transação:', this.tipoTransacao);
    this.tipoTransacao = "";
    this.valorTransacao = "";
  }
}

  /*
Boa! O atributo **ngNativeValidate** serve para reativar a validação nativa do HTML5 nos formulários Angular — algo que o Angular desativa por padrão ao usar FormsModule ou ReactiveFormsModule.


Formulários orientados a templates


Os formulários orientados a templates, como o próprio nome sugere, são formulários definidos diretamente no template (HTML) de um componente. Para que isso aconteça, o Angular usa diretivas como ngModel que ajudam a fazer a ligação entre o input da pessoa usuária e o modelo de dados que está em uso.

Imagine que você quer criar um formulário para cadastrar o nome e o e-mail das pessoas usuárias. Para isso, você criou um componente que vai adotar a estratégia de formulários orientados a template. Sendo assim, você teria os seguintes códigos nos arquivos HTML e TypeScript, respectivamente:


<form (ngSubmit)="enviarFormulario()">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome" [(ngModel)]="usuario.nome" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" [(ngModel)]="usuario.email" required>

  <button type="submit">Enviar</button>
</form>



import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-orientado-a-templates',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-orientado-a-templates.component.html',
  styleUrl: './formulario-orientado-a-templates.component.css'
})
export class FormularioOrientadoATemplatesComponent {
  usuario = { nome: '', email: '' };

  enviarFormulario() {
    console.log('Dados enviados:', this.usuario);
  }
}

No exemplo acima, o formulário é definido no HTML e usa a diretiva ngModel para ligar os campos criados no HTML ao objeto usuario no TypeScript. Isso torna a implementação mais simples, porém menos escalável para projetos maiores.





  */
