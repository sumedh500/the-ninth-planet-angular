import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateItemService } from 'src/app/service/create-item.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D; // Updated type
  private stars: Star[] = [];
  public params = { speed: 10, number: 1000, extinction: 5 };
  private screen = {
    w: window.innerWidth,
    h: window.innerHeight,
    c: [window.innerWidth * 0.5, window.innerHeight * 0.5]
  };
 
   products:any
   constructor( private adminService:CreateItemService,private router: Router ){}

  ngOnInit(): void {
    this.canvas = <HTMLCanvasElement>document.getElementById("starsCanvas");
    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d"); // Type casting
    this.setupStars();
    this.updateStars();
    this.adminService.getallitem().subscribe(items=>{
      this.products = items.data
      console.log(this.products)
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.setupStars();
  }

  private setupStars(): void {
    this.screen = {
      w: window.innerWidth,
      h: window.innerHeight,
      c: [window.innerWidth * 0.5, window.innerHeight * 0.5]
    };
    this.canvas.width = this.screen.w;
    this.canvas.height = this.screen.h;
    this.stars = [];
    for (let i = 0; i < this.params.number; i++) {
      this.stars.push(new Star(this.canvas, this.screen, this.params));
    }
  }

  private updateStars(): void {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.stars.forEach(s => {
      s.show(this.ctx);
      s.move();
    });
    window.requestAnimationFrame(() => this.updateStars());
  }
  itemView(id:any){
    console.log(id)
    this.router.navigate(['/item/'+id])
  }
}
class Star {
  private x: number;
  private y: number;
  private z: number;

  constructor(private canvas: HTMLCanvasElement, private screen: any, private params: any) {
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.z = Math.random() * this.canvas.width;
  }

  move(): void {
    this.z -= this.params.speed;
    if (this.z <= 0) {
      this.z = this.canvas.width;
    }
  }

  show(ctx: CanvasRenderingContext2D): void {
    let x, y, rad, opacity;
    x = (this.x - this.screen.c[0]) * (this.canvas.width / this.z);
    x = x + this.screen.c[0];
    y = (this.y - this.screen.c[1]) * (this.canvas.width / this.z);
    y = y + this.screen.c[1];
    rad = this.canvas.width / this.z;
    opacity = (rad > this.params.extinction) ? 1.5 * (2 - rad / this.params.extinction) : 1;

    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
    ctx.arc(x, y, rad, 0, Math.PI * 2);
    ctx.fill();
  }
}
