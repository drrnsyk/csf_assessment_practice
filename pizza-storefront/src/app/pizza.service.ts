// Implement the methods in PizzaService for Task 3
// Add appropriate parameter and return type 

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Order } from "./models";

@Injectable()
export class PizzaService {

  constructor(private http: HttpClient) { }

  // POST /api/order
  // Add any required parameters or return type

  createOrder(order: Order): Promise<Order>{ 
    // creates a new order when order button is pressed, main.component will call service
    // post order to springboot, returns a promise
    // because it is a POST request, need to construct headers
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')

    return firstValueFrom(
      this.http.post<Order>(`/api/order`, order, { headers: headers} )
    )

  }

  // GET /api/order/<email>/all
  // Add any required parameters or return type

  getOrders(email: string): Promise<Order[]> { 
    return firstValueFrom<Order[]>(
      this.http.get<any>(`/api/order/${email}`)
    )
    
  }

  
}
