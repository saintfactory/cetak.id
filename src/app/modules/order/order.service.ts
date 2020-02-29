/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class OrderService{
	constructor(private http: HttpClient){ }
	
	orderUrl = 'assets/config.json';
  
	postOrder() {
		return this.http.get(this.orderUrl);
    }
    addHero (hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
          .pipe(
            catchError(this.handleError('addHero', hero))
          );
    }
}

*/