import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresingComponent } from './interesing.component';

describe('InteresingComponent', () => {
  let component: InteresingComponent;
  let fixture: ComponentFixture<InteresingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteresingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteresingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
