import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GFGLeaderBoardComponent } from './gfg-leader-board.component';

describe('GFGLeaderBoardComponent', () => {
  let component: GFGLeaderBoardComponent;
  let fixture: ComponentFixture<GFGLeaderBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GFGLeaderBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GFGLeaderBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
