import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GistForkPreviewComponent } from './gist-fork-preview.component';

describe('GistForkPreviewComponent', () => {
  let component: GistForkPreviewComponent;
  let fixture: ComponentFixture<GistForkPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GistForkPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GistForkPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
