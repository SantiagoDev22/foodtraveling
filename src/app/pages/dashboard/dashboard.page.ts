import { Component, OnInit } from '@angular/core';
//import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  doRefresh(event) {
    setTimeout(() => {
      console.log('begin async operation');
      event.target.complete();
    }, 300);
  }


}
