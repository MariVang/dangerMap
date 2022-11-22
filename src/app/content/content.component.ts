import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent {
  

}

export interface zonas{

  localidad: string,
  sector: string,
  desde: string,
  hasta: string,
  delitosComunes:string,
  horario:string;
  
}