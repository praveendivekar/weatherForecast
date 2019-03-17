import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let buttonComponent: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    buttonComponent = fixture.debugElement.query(By.css('button'));
    fixture.detectChanges();
  });

  // check for component creation
  it('should create button component', () => {
    expect(component).toBeTruthy();
  });

  // check for button disabled state
  it('check for button disabled state', () => {
    component.disabled = true;
    fixture.detectChanges();
    expect(buttonComponent.nativeElement.disabled).toBeTruthy();
  });

  // check for the button type
  it('check for click event of the button', () => {
    spyOn(component, 'handleClickEvent');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.handleClickEvent).toHaveBeenCalled();
    });
  });
});
