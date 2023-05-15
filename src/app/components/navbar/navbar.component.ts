import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  myModal:any = document.getElementById('myModal')
  myInput:any = document.getElementById('myInput')
 
  ngOnInit(): void {
    this.myModal.addEventListener('shown.bs.modal', () => {
      this.myInput.focus()
    })
  }
  
}
