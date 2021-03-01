import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroGroupsComponent } from './hero-groups.component';

describe('HeroGroupsComponent', () => {
  let component: HeroGroupsComponent;
  let fixture: ComponentFixture<HeroGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
