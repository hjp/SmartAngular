import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSQLInterceptorComponent } from './no-sqlinterceptor.component';

describe('NoSQLInterceptorComponent', () => {
  let component: NoSQLInterceptorComponent;
  let fixture: ComponentFixture<NoSQLInterceptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoSQLInterceptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSQLInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
