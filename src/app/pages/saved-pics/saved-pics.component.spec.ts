import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPicsComponent } from './saved-pics.component';

describe('SavedPicsComponent', () => {
  let component: SavedPicsComponent;
  let fixture: ComponentFixture<SavedPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedPicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavedPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
