import { Directive, Input, ElementRef, Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { TaskTypeToken } from '../tokens/TaskTypeToken';
import { FeatureToken } from '../tokens/FeatureToken';
import { AbstractDetectDirective } from './abbstract-detect.directive';
@Directive({
  selector: 'video[allFaces]',
  exportAs: 'faces',
})
export class DetectAllFacesVideoDirective extends AbstractDetectDirective {
  @Input()
  public with: FeatureToken[] = [];
  constructor(
    el: ElementRef<HTMLImageElement>,
    overlay: Overlay,
    injector: Injector,
  ) {
    super(el, overlay, injector);
  }
  protected type: TaskTypeToken = 'all';
  protected stream = true;
}
