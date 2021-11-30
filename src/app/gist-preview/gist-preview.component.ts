import {Component, Input, OnInit} from '@angular/core';
import {Gist} from '../model/gist';
import {GistFile} from '../model/gist-file';
import {flatMap} from '../utils/utils';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-gist-preview',
  templateUrl: './gist-preview.component.html',
  styleUrls: ['./gist-preview.component.scss']
})
export class GistPreviewComponent implements OnInit {

  @Input() gist: Gist;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  getFiles(): GistFile[] {
    return Object.values(this.gist.files).reduce(flatMap, []);
  }

  navigateToGistFiles(): void {
    const navigationExtras: NavigationExtras = {
      state: {files: this.getFiles()}
    };
    this.router.navigate([`gist/${this.gist.id}`], navigationExtras).then();
  }

}
