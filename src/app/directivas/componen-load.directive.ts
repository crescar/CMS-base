import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appComponenLoad]',
})
export class ComponenLoadDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
