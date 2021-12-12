import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LoginPage implements AfterContentChecked, OnInit {
  @ViewChild('swiper') swiper: SwiperComponent;

  Email: string;
  Password: string;

  authRef: AngularFireAuth;


  constructor(private alertCtrl: AlertController, 
              private toastCtrl: ToastController, 
              public afAuth: AngularFireAuth, 
              private router: Router) {
    this.Email = "";
    this.Password = "";
    this.authRef = afAuth;
  }

  ngOnInit(): void { }

  async alert(title: string, message: string): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: title,
      message,
      buttons: ['ok'],
      backdropDismiss: false
    });
    await alert.present();
  }

  async toast(title: string, position: any = 'top'): Promise<void> {
    const toast = await this.toastCtrl.create({
      message: title,
      position,
      duration: 2000
    });
    await toast.present();
  }

  login() {
    console.log("Entrando");
    this.authRef.auth.signInWithEmailAndPassword(this.Email, this.Password).then(data => {
      this.toast("Login efetuado com sucesso!");
      localStorage.setItem("PS:USER_INFO", JSON.stringify(data.user));

      this.router.navigateByUrl('/tabs/tabPerfil')
    },
    error => {
      console.log(error);
      this.alert("Erro", "Usuário e/ou senha inválidos!");
    });
  }

  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({})
    }
  }

  segmentChanged(event: any) {
    if (event.detail.value === "login") {
      this.swiper.swiperRef.slidePrev()
    } else {
      this.swiper.swiperRef.slideNext()
    }
  }

  register() {
    this.authRef.auth.createUserWithEmailAndPassword(this.Email, this.Password);
    this.toast("Cadastro realizado com sucesso!")
  }

}
