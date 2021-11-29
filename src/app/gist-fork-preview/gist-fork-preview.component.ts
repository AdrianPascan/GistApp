import {Component, Input, OnInit} from '@angular/core';
import {GistService} from '../service/gist.service';
import {Gist} from '../model/gist';
import {isArrayEmpty, isArrayNotEmpty} from '../utils/utils';

@Component({
  selector: 'app-gist-fork-preview',
  templateUrl: './gist-fork-preview.component.html',
  styleUrls: ['./gist-fork-preview.component.scss']
})
export class GistForkPreviewComponent implements OnInit {

  static readonly FORK_COUNT = 3;

  readonly isArrayEmpty = isArrayEmpty;
  readonly isArrayNotEmpty = isArrayNotEmpty;

  @Input() id: string;

  forks: Gist[];

  constructor(private readonly gistService: GistService) {
  }

  ngOnInit(): void {
    this.gistService.getGistForks(this.id, GistForkPreviewComponent.FORK_COUNT)
      .subscribe(forks => this.forks = forks);
  }

}
