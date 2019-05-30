import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nombre = "Jheiron Dotel";
  edad = 29;
  email = "jdotel@yea.com";
  sueldos = [1700, 1600, 1900];
  activo = true;

  esActivo() {
    if (this.activo) {
      return "Trabajador activo";
    } else {
      return "Trabajador inactivo";
    }
  }

  ultimo3Sueldos() {
    let suma = 0;
    for (let x = 0; x < this.sueldos.length; x++) {
      suma += this.sueldos[x];
    }

    return suma;
  }
}
