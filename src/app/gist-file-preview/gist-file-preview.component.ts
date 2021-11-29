import {Component, Input, OnInit} from '@angular/core';
import {GistFile} from '../model/gist-file';

@Component({
  selector: 'app-gist-file-preview',
  templateUrl: './gist-file-preview.component.html',
  styleUrls: ['./gist-file-preview.component.scss']
})
export class GistFilePreviewComponent implements OnInit {

  @Input() files: GistFile[];

  constructor() { }

  ngOnInit(): void {
  }

}
