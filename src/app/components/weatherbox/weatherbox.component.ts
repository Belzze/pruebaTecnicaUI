import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weatherbox',
  templateUrl: './weatherbox.component.html',
  styleUrls: ['./weatherbox.component.css'],
})
export class WeatherboxComponent implements OnInit {
  @Input() day = '';
  @Input() img = '';
  @Input() descripcion = '';
  constructor() {}

  ngOnInit(): void {
  }
}
