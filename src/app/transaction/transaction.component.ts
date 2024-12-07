import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit{
  transactions: any[] = [];
  userId: string = '';
  username: string='';

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.userId = localStorage.getItem('userId') || '';
    this.username = localStorage.getItem('username') || 'Unknown User';
    this.transactionService.getTransactions(this.userId).subscribe(
      (response: any) => this.transactions = response,
      () => alert('Could not fetch transactions')
    );
  }

}
