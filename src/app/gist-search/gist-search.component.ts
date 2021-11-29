import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-gist-search',
  templateUrl: './gist-search.component.html',
  styleUrls: ['./gist-search.component.scss']
})
export class GistSearchComponent implements OnInit {

  username = null;

  @Output() usernameChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onUsernameChange(event: Event): void {
    this.username = (event.target as HTMLInputElement).value;
    this.usernameChange.emit(this.username);
  }

}
