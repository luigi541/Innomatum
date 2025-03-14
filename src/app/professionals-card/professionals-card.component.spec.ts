import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsCardComponent } from './professionals-card.component';

describe('ProfessionalsCardComponent', () => {
  let component: ProfessionalsCardComponent;
  let fixture: ComponentFixture<ProfessionalsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
