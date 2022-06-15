import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, ViewChild } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    constructor(private elRef: ElementRef) {}

    ngOnInit(): void {

    }

    @HostListener('click')
    toggleShow() {
        (this.elRef.nativeElement as HTMLElement).classList.toggle('show');
        (this.elRef.nativeElement as HTMLElement).querySelector('ul').classList.toggle('show');
    }


}
