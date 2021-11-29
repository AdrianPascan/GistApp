import {Component, OnInit} from '@angular/core';
import {GistService} from '../service/gist.service';
import {Gist} from '../model/gist';

@Component({
  selector: 'app-gists',
  templateUrl: './gists.component.html',
  styleUrls: ['./gists.component.scss']
})
export class GistsComponent implements OnInit {

  gists: Gist[];

  constructor(private readonly gistService: GistService) {
  }

  ngOnInit(): void {
  }

  getGistsForUser(username: string): void {
    username ?
      this.gistService.getGistsForUser(username)
        .subscribe(gists => {
          this.gists = gists;
          console.log(gists);
        })
      :
      this.gists = [];
  }

}
