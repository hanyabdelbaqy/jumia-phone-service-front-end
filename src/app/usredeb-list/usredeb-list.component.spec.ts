import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsredebListComponent } from './usredeb-list.component';

describe('UsredebListComponent', () => {
  let component: UsredebListComponent;
  let fixture: ComponentFixture<UsredebListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsredebListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsredebListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
