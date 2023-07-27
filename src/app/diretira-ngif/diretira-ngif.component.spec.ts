import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretiraNgifComponent } from './diretira-ngif.component';

describe('DiretiraNgifComponent', () => {
  let component: DiretiraNgifComponent;
  let fixture: ComponentFixture<DiretiraNgifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretiraNgifComponent]
    });
    fixture = TestBed.createComponent(DiretiraNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
