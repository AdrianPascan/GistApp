import {Component, Input, OnInit} from '@angular/core';
import {GistFile} from '../model/gist-file';
import {GistFileService} from '../service/gist-file.service';

@Component({
  selector: 'app-gist-file-content',
  templateUrl: './gist-file-content.component.html',
  styleUrls: ['./gist-file-content.component.scss']
})
export class GistFileContentComponent implements OnInit {

  @Input() file: GistFile;

  content: string;

  constructor(private readonly gistFileService: GistFileService) {
  }

  ngOnInit(): void {
    this.gistFileService.getFileContent(this.file.raw_url)
      .subscribe(content => this.content = content);
  }

}
