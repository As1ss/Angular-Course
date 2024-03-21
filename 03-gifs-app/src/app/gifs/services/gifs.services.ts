import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Gif, SearchResponse } from "../interfaces/gifs.interfaces";



@Injectable({
  providedIn: "root"
}) export class GifsService {

  public gifList:Gif[] =[];

  private _tagsHistory: string[] = [];
  private apiKey: string = "4rO3V8mG9Amk9C3k6AQEEGktDssC5K00";
  private serviceUrl: string = "https://api.giphy.com/v1/gifs";

  constructor(private http: HttpClient) { }

  public get tagsHistory() {


    return [...this._tagsHistory];

  }



  public searchTag(tag: string): void {

    this.validateHistory(tag);

    const params = new HttpParams()
    .set("api_key",this.apiKey)
    .set("q",tag)
    .set("limit","10");


    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
      .subscribe(resp => {
       this.gifList = resp.data;

       console.log({gifs:this.gifList});

      });



  }

  public validateHistory(tag: string): void {
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

