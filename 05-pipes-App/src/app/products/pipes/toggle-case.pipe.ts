import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: "toggleCase"
})
export class ToggleClasePipe implements PipeTransform{


  transform(value: string,value2:boolean=false):string {


    return value2? value.toUpperCase(): value.toLowerCase();

  }

}
