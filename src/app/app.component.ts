import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'proyecto010';
  
  private urlApi = 'https://jsonplaceholder.typicode.com/users';
  private usuarios = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.urlApi).subscribe(
      respuesta => this.usuarios = respuesta,
      error => console.log('Error: ' + error),
      () => console.log('Se completó la petición :D')
    );
  }

}
