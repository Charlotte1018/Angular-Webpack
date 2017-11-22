import { Component, Inject, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from './service/http.service';
@Component({
    selector: 'my-app',
    styles: [
        `
        a{
            text-decoration: none;
            margin-right: 20px;
            padding: 5px 10px;
            border-bottom: 1px solid transparent;
        }

        a.active {
            border-color: pink
        }

        .content {
            box-sizing: border-box;
            margin: 20px auto;
            width: 70vw;
            padding: 30px
        }
        `
    ],
    template: `
    <div class="content">
        <h1>Hello {{name}}</h1>

        <a [routerLink]="['/about']" routerLinkActive="active">
        About
        </a>
        
        <a [routerLink]="['/contact']" routerLinkActive="active">
        contact
        </a>

        <a [routerLink]="['/home']" routerLinkActive="active">
        home
        </a>

        <a [routerLink]="['/news']" routerLinkActive="active">
        news
        </a>
        <router-outlet name="sidebar"></router-outlet>
        <router-outlet></router-outlet>
    </div>
  `,
  providers:[HttpService]
})
export class AppComponent implements OnInit{
    name = 'Angular';
    constructor( @Inject(ActivatedRoute) public _route: ActivatedRoute,
    private HttpService:HttpService) {
        console.log(this._route)
    }
    ngOnInit():void{
        this.getFetch();
    }
    getFetch():void{
        let msg={
            url:"http://106.14.139.83:8080/event/findEventAll"
        }
        this.HttpService.http(msg).then(data=>{
            console.log(data);
        })
    }

}
