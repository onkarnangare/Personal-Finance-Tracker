import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://localhost:8080/transactions';

  constructor(private http: HttpClient) {}

  getTransactions(userId: any) {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }
}
