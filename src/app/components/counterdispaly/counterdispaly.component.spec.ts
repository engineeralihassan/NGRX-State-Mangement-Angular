import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterdispalyComponent } from './counterdispaly.component';

describe('CounterdispalyComponent', () => {
  let component: CounterdispalyComponent;
  let fixture: ComponentFixture<CounterdispalyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterdispalyComponent]
    });
    fixture = TestBed.createComponent(CounterdispalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
