import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface CollectionData{
  name:string,
  id:number,
  contents:number[]
}

@Component({
  selector: 'app-view-collections',
  templateUrl: './view-collections.component.html',
  styleUrls: ['./view-collections.component.scss']
})
export class ViewCollectionsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  viewTitle:string = 'Collections';
  collections:CollectionData[];
  ngOnInit() {
    this.http.get('/data/collections').subscribe((data:CollectionData[]) => {
      // Read the result field from the JSON response.
      this.collections = data;

    });
  }

  static menu = {
    url:"collections",
    title:'Manage collections',
    text:'Collections'
  }

}
