import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudPractitionerComponent } from './cloud-practitioner.component';

describe('CloudPractitionerComponent', () => {
  let component: CloudPractitionerComponent;
  let fixture: ComponentFixture<CloudPractitionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudPractitionerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudPractitionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
