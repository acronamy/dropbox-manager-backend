import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-folder-tree',
  templateUrl: './folder-tree.component.html',
  styleUrls: ['./folder-tree.component.scss']
})
export class FolderTreeComponent implements OnInit {

  constructor(private http:HttpClient) { }

  viewTitle:string = 'Collections';
  dropboxContent;
  ngOnInit() {
    this.http.get('/data/dropbox').subscribe((data) => {
      // Read the result field from the JSON response.
      this.dropboxContent = data;

    });
  }

}
