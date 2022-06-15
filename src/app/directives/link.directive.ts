import { Directive, HostBinding, HostListener, Input, OnInit } from "@angular/core";

@Directive({
  selector: '[appLink]'
})
export class LinkDirective {
  @Input() defColor: string = 'black';
  @Input() hoverColor: string = 'red';

  @HostBinding('style.color') color: string;

   //default styles
   @HostBinding('style.text-decoration') textDecoration: string = 'none';
   @HostBinding('style.font-size') fontSize: string = '18px';
   @HostBinding('style.cursor') cursor: string = 'pointer';

   ngOnInit() : void {
      this.color = this.defColor;
    }

  @HostListener('mouseenter') mouseEnter() {
      this.color = this.hoverColor;
  }

  @HostListener('mouseleave') mouseleave() {
      this.color = this.defColor;
  }
}
