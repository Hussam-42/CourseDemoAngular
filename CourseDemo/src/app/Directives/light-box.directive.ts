import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges{

  @Input('LightBox') highlightColor:string = "darkblue";
  @Input() defaultColor:string = "darkblue";


  constructor(private elementRef:ElementRef) {

    // this.elementRef.nativeElement.style.border = "3px solid darkred";

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.elementRef.nativeElement.style.border = `3px solid ${this.defaultColor}`;
  }

  @HostListener("mouseover") onMouseOver()
  {
    this.elementRef.nativeElement.style.border = `3px solid ${this.highlightColor}`;
  }

  @HostListener("mouseout") onMouseOut()
  {
    this.elementRef.nativeElement.style.border = `3px solid ${this.defaultColor}`;
  }

}
