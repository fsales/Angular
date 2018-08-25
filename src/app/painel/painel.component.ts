import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css'],
})
export class PainelComponent implements OnInit {
   
    @Input() titulo:String = '';

    ngOnInit(): void {
        this.titulo = this.titulo.length > 7 ? this.titulo.substring(0,7) + '...' : this.titulo;
    }
}