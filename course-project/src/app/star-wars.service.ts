import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class StarWarsService {
  private characters = [
    { name: "Luke Skywalker", side: ''},
    { name: "Darth Vader", side: ''}
  ];
  charactersChanged = new Subject<void>();
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  };

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    };
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  };

  fetchCharacters() {
    this.http.get('http://swapi.dev/api/people')
    .subscribe((response) => {
      const extractedCharacters = response['results']
      const chars = extractedCharacters.map((char) => {
        return { name: char.name, side: '' }
      })
      this.characters = chars;
      this.charactersChanged.next();
      console.log(chars);
    });
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next();
  };

  addCharacter(name, side) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });
    if (pos !== -1) {
      return
    };
    const newChar = { name: name, side: side };
    this.characters.push(newChar)
  }
}