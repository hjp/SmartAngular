import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientsComponent } from './http-clients.component';

describe('HttpClientsComponent', () => {
  let component: HttpClientsComponent;
  let fixture: ComponentFixture<HttpClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
