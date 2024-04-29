import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styles: ``
})
export class PriceComponent implements OnInit,OnChanges,OnDestroy {


  @Input()
  public price:number = 0;

  public intervals$?: Subscription;


  ngOnInit(): void {
    console.log("Componente Hijo: ngOnInit");

   this.intervals$ =  interval(1000).subscribe(value => console.log(`Tick: ${value}`));
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Componente Hijo: ngOnChanges");
    console.log({changes});
  }
  ngOnDestroy(): void {
    console.log("Componente Hijo: ngOnDestroy");
    this.intervals$?.unsubscribe();

  }
}
