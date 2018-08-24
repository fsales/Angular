import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mensagem',
  template: '<p class="alert alert-{{tipo}}" > <ng-content></ng-content></p>',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {
  @Input() tipo = `ligth`;
  constructor() { }

  ngOnInit() {
  }

}
