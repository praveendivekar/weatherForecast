import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // check for the footer component creation
  it('should create footer component', () => {
    expect(component).toBeDefined();
  });

  // check for the footer component content
  it('component should render with child elements', () => {
    const footerElement: HTMLElement = fixture.nativeElement;
    const span = footerElement.querySelector('span');
    expect(span.textContent).toEqual('© 2019 weatherforecast, Inc. All Rights Reserved');
  });
});
