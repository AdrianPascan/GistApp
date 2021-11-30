import {Component, OnInit} from '@angular/core';
import {GistService} from '../service/gist.service';
import {Gist} from '../model/gist';
import {isArrayEmpty, isArrayNotEmpty, isDefined} from '../utils/utils';

@Component({
  selector: 'app-gists',
  templateUrl: './gists.component.html',
  styleUrls: ['./gists.component.scss']
})
export class GistsComponent implements OnInit {

  readonly isDefined = isDefined;
  readonly isArrayEmpty = isArrayEmpty;
  readonly isArrayNotEmpty = isArrayNotEmpty;

  username: string;
  gists: Gist[];
  page = 1;
  perPage = 10;
  prevPage = false;
  nextPage = false;
  perPageOptions: number[] = [5, 10, 25, 50, 100];

  constructor(private readonly gistService: GistService) {
  }

  ngOnInit(): void {
  }

  getGistsForUser(username: string): void {
    this.page = 1;
    this.username = username;
    if (username) {
      this.gistService.getGistsPageForUser(this.username, this.page, this.perPage)
        .subscribe(gists => {
          this.gists = gists;
          this.canSwitchPages();
        });
    } else {
      this.gists = [];
      this.prevPage = false;
      this.nextPage = false;
    }
  }

  getGistsPageForUser(): void {
    this.gistService.getGistsPageForUser(this.username, this.page, this.perPage)
      .subscribe(gists => {
        this.gists = gists;
        this.canSwitchPages();
        console.log(gists);
      });
  }

  getPrevPage(): void {
    this.page--;
    this.gistService.getGistsPageForUser(this.username, this.page, this.perPage)
      .subscribe(gists => {
        this.gists = gists;
        this.canSwitchPages();
      });
  }

  getNextPage(): void {
    this.gistService.getGistsPageForUser(this.username, this.page + 1, this.perPage)
      .subscribe(gists => {
        if (gists.length !== 0) {
          this.gists = gists;
          this.page++;
        }
        this.canSwitchPages();
      });
  }

  private canSwitchPages(): void {
    this.hasPrevPage();
    this.hasNextPage();
  }

  private hasPrevPage(): void {
    this.prevPage = this.page > 1;
  }

  private hasNextPage(): void {
    this.nextPage = isArrayNotEmpty(this.gists) && this.gists.length === this.perPage;
  }

  onPerPageChange(perPage: number): void {
    this.page = 1;
    this.perPage = perPage;
    if (this.username) {
      this.gistService.getGistsPageForUser(this.username, this.page, this.perPage)
        .subscribe(gists => {
          this.gists = gists;
          this.canSwitchPages();
        });
    }
  }
}
