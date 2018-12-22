import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor () {

  }

  ngOnInit(): void {
   /* const promesa = new Promise(resolve => {
      resolve('un valor desde una promesa 1');
      resolve('un valor desde una promesa 2');
      resolve('un valor desde una promesa 3');
    });

    //promesa.then(valor => console.log(valor));

    const observable = Observable.create(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);

      setTimeout(() => observer.next(4), 3000);
    });

    observable.subscribe(valor => console.log('valor del observable ' + valor));*/
  }
}
