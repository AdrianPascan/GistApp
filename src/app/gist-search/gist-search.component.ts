import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {isDefined} from '../utils/utils';

@Component({
  selector: 'app-gist-search',
  templateUrl: './gist-search.component.html',
  styleUrls: ['./gist-search.component.scss']
})
export class GistSearchComponent implements OnInit {

  readonly isDefined = isDefined;

  @Output() usernameChange = new EventEmitter<string>();

  username = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  onUsernameChange(event: Event): void {
    this.username = (event.target as HTMLInputElement).value;
    this.usernameChange.emit(this.username);
  }

  onClearUsername(): void {
    this.username = null;
    this.usernameChange.emit(null);
  }

}
