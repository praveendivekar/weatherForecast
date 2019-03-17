import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // check for the header component creation
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // check for the header component content
  it('header component should have content', () => {
    const headerElement: HTMLElement = fixture.nativeElement;
    const span = headerElement.querySelector('span');
    expect(span.textContent).toEqual('Accurate Weather');
  });
});
