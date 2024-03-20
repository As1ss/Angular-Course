import { Injectable } from "@angular/core";



@Injectable({
  providedIn: "root"
}) export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey:string ="4rO3V8mG9Amk9C3k6AQEEGktDssC5K00";

  constructor() { }

  public get tagsHistory() {

    return [...this._tagsHistory];

  }



  public searchTag(tag: string): void {

    const finalTag = tag.toLocaleLowerCase();

    if (finalTag.length == 0) return;

    if (this._tagsHistory.includes(finalTag)) {

      this._tagsHistory.splice(this._tagsHistory.indexOf(finalTag), 1);

      this._tagsHistory.unshift(finalTag);

    }
    else {
      this._tagsHistory.unshift(finalTag);
      this._tagsHistory.splice(10);

    }


  }
}

