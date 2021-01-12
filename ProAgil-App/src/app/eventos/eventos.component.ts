import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  eventos: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
    //this.eventos = [{"eventoId":1,local:"Belo Horizonte","dataEvento":"21/01/2019",tema:"Angular e suas particularidades","qtdPessoas":350,"lote":"1º Lote","imagemURL":null},{"eventoId":2,"local":"Uberaba","dataEvento":"25/01/2020","tema":".dot Net e suas particularidades","qtdPessoas":451,"lote":"2º Lote","imagemURL":null}];
  }

  getEventos(){
    this.eventos = this.http.get("http://localhost:5000/api/values").subscribe(
      response => { 
        this.eventos = response;
        console.log(response);
      }, error => {
        console.log(error);
      }
    );
  }

}
