import { Directive, Input, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{

  @Input("myForEm") numbers: number[];
  
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>,
  ) { 
    this.numbers = [];
  }

  ngOnInit(): void{
    for(let number of this.numbers){
      this.container.createEmbeddedView(
        this.template, { $implicit: number});
        //Implicit é um valor associado ao contexto de execução, (n do laço for)
    }
    console.log(this.numbers);
  }

}
