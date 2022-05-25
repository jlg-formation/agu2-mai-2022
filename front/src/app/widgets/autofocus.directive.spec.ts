import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AutofocusDirective } from './autofocus.directive';

@Component({
  selector: 'app-test',
  template: ` <input appAutofocus /> `,
})
export class TestComponent {}

@Component({
  selector: 'app-test2',
  template: ` <input appAutofocus="select" /> `,
})
export class Test2Component {}

describe('AutofocusDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, AutofocusDirective],
    }).compileComponents();
  });

  it('should autofocus', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(document.activeElement).toBe(compiled.querySelector('input'));
  });
});
