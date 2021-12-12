import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarvalhoLvl1Page } from './carvalho-lvl1.page';

describe('CarvalhoLvl1Page', () => {
  let component: CarvalhoLvl1Page;
  let fixture: ComponentFixture<CarvalhoLvl1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarvalhoLvl1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarvalhoLvl1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
