import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersTitleComponent } from './players-title.component';

describe('PlayersTitleComponent', () => {
  let component: PlayersTitleComponent;
  let fixture: ComponentFixture<PlayersTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
