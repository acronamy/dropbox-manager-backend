import { Component, OnInit } from '@angular/core';
import {ViewCollectionsComponent} from "../view-collections/view-collections.component";
import {ViewDesignComponent} from "../view-design/view-design.component"
import {UserService} from "../user.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  providers:[
    UserService
  ]
})
export class ToolbarComponent implements OnInit {

  menu = [
    ViewCollectionsComponent.menu,
    ViewDesignComponent.menu
  ]

  constructor(private user:UserService) { }

  ngOnInit() {
    
  }



}
