import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  searchText: string = "";

  onSearchTextChanged() {
  }

  updateSearchText(inputEl: HTMLInputElement) {
    console.log(inputEl);
    console.log(inputEl.value);
    this.searchText = inputEl.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
