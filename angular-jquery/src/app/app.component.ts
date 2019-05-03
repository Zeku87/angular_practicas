import { Component, OnInit } from '@angular/core';

//importación de messages de PrimeNG


//importamos JQUERY
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Aplicación Angular junto con JQuery';

  public ngOnInit() {
    $(document).ready(function () {
      console.log("El documento está listo");
    });

    $("#cliente1").on('click', () => {
      $("#cliente1").hide();
    });

    $("#cliente2").on('click', () => {
      $("#cliente2").hide();
    });

    $("#cliente3").on('click', () => {
      $("#cliente3").hide();
    });
  }

}
