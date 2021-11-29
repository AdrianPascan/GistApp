import {Component, Input, OnInit} from '@angular/core';
import {Gist} from '../model/gist';
import {GistFile} from '../model/gist-file';
import {flatMap} from '../utils/utils';

@Component({
  selector: 'app-gist-preview',
  templateUrl: './gist-preview.component.html',
  styleUrls: ['./gist-preview.component.scss']
})
export class GistPreviewComponent implements OnInit {

  @Input() gist: Gist;

  constructor() { }

  ngOnInit(): void {
  }

  getFiles(): GistFile[] {
    return Object.values(this.gist.files).reduce(flatMap, []);
  }

}
