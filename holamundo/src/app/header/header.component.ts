import { Component, OnInit, AfterContentInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentInit, OnDestroy {

  constructor() {
    console.log('Llamada al constructor del componente HEADER');
  }

  ngOnInit() {
    console.log('On Init del componente HEADER');
  }

  ngAfterContentInit(): void {
    console.log('after content init del componente HEADER');
  }

  ngOnDestroy(): void {
    console.log('on destroy del componente HEADER');
  }
}
