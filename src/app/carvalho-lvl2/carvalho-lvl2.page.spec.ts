import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarvalhoLvl2Page } from './carvalho-lvl2.page';

describe('CarvalhoLvl2Page', () => {
  let component: CarvalhoLvl2Page;
  let fixture: ComponentFixture<CarvalhoLvl2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarvalhoLvl2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarvalhoLvl2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
