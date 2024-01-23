import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagPoolComponent } from './tag-pool.component';

describe('TagPoolComponent', () => {
  let component: TagPoolComponent;
  let fixture: ComponentFixture<TagPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagPoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
