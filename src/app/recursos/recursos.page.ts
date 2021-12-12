import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.page.html',
  styleUrls: ['./recursos.page.scss'],
})
export class RecursosPage implements OnInit {

  constructor( public router: Router ) { }

  betula(){
    this.router.navigateByUrl('/betula')
  }

  castenheira(){
    this.router.navigateByUrl('/castanheira')
  }

  pinho(){
    this.router.navigateByUrl('/pinho')
  }

  pinho1(){
    this.router.navigateByUrl('/pinho-level1')
  }

  pinho2(){
    this.router.navigateByUrl('/pinho-lvl2')
  }

  pinho3(){
    this.router.navigateByUrl('/pinho-lvl3')
  }

  cedro(){
    this.router.navigateByUrl('/cedro')
  }

  cedro1(){
    this.router.navigateByUrl('/cedro-lvl1')
  }

  cedro2(){
    this.router.navigateByUrl('/cedro-lvl2')
  }

  cedro3(){
    this.router.navigateByUrl('/cedro-lvl3')
  }

  carvalhoSangue(){
    this.router.navigateByUrl('/carvalho-sangue')
  }

  carvalho1(){
    this.router.navigateByUrl('/carvalho-lvl1')
  }

  carvalho2(){
    this.router.navigateByUrl('/carvalho-lvl2')
  }

  carvalho3(){
    this.router.navigateByUrl('/carvalho-lvl3')
  }

  freixo(){
    this.router.navigateByUrl('/freixo')
  }

  freixo1(){
    this.router.navigateByUrl('/freixo-lvl1')
  }

  freixo2(){
    this.router.navigateByUrl('/freixo-lvl2')
  }

  freixo3(){
    this.router.navigateByUrl('/freixo-lvl3')
  }

  pauBranco(){
    this.router.navigateByUrl('/pau-branco')
  }

  pau1(){
    this.router.navigateByUrl('/pau-lvl1')
  }

  pau2(){
    this.router.navigateByUrl('/pau-lvl2')
  }

  pau3(){
    this.router.navigateByUrl('/pau-lvl3')
  }

  ngOnInit() {
  }

}
