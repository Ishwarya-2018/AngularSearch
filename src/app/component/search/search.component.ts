


import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from 'src/app/service/search-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  text: any;
  searchData: any;

  constructor(private search: SearchServiceService) { }

  ngOnInit() {
    this.submit();
    // alert
    // ("444")
  }
  /*****
    @purpose:It get the response as value from the search service which is type in Input field on the toolbar
      ******/
  submit() {
    // alert("sdfsdf")

    this.search.getsearch().subscribe(
      (res) => {
        this.searchData = res;
        console.log("search", this.searchData);
        console.log("response", res);

      })
  }
}
