import { Component } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather app';
  private apiKey = '';
  private apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=' + this.apiKey;

  constructor (private http: Http) {
  }

  ngOnInit() {
    this.http.get(this.apiUrl).subscribe( data => {
      console.log('success');
      console.log(data);
    }, error => {
      console.log('error');
    });
  }

}
