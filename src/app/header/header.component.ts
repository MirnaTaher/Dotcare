import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from './modal/modal.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    modalRef: MdbModalRef<ModalComponent> | null = null;
  
    constructor(private modalService: MdbModalService,private router:Router) {}
  
    openModal() {
      this.modalRef = this.modalService.open(ModalComponent)
    }
    
    getRoute(){
      if (this.router.url === '/'){
       return "home-active";
    }else if(this.router.url === '/product'){
      return "product-active";
    }
  }
  ngOnInit(): void {
  }

}
