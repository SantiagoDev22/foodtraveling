import { Component, Input } from "@angular/core";
import { MenuController } from "@ionic/angular";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {

    
    @Input() titulo: string = ''

    constructor(private menuCtrl: MenuController) { }

    mostrarMenu() {
        this.menuCtrl.enable(true, 'ComponentMenu');
        this.menuCtrl.open('ComponentMenu');
    }
}