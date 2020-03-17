import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionButtonsComponent } from './reaction-buttons.component';

describe('ReactionButtonsComponent', () => {
  let component: ReactionButtonsComponent;
  let fixture: ComponentFixture<ReactionButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactionButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
