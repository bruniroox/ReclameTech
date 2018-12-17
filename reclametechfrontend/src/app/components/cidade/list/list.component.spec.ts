import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeListComponent } from './list.component';

describe('ListComponent', () => {
  let component: CidadeListComponent;
  let fixture: ComponentFixture<CidadeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});