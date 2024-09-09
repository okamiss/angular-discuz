// import {Directive, ElementRef, HostListener} from '@angular/core';
// import {Input} from '@angular/core';
// @Directive({
//   standalone: true,
//   selector: '[appHighlight]',
// })
// export class HighlightDirective {
//   constructor(private el: ElementRef) {}
//   @HostListener('mouseenter') onMouseEnter() {
//     this.highlight('yellow');
//   }
//   @HostListener('mouseleave') onMouseLeave() {
//     this.highlight('');
//   }
//   private highlight(color: string) {
//     this.el.nativeElement.style.backgroundColor = color;
//   }
// }

import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appHighlight]', // 使用时的选择器
  standalone: true // 声明为 standalone 指令
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string = '' // 输入属性

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // console.log(el)
    // console.log(renderer)
    // console.log(this.highlightColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null)
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color
  }
}
