import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArvoreService } from './services/arvore/arvore.service';
import { CommonModule } from '@angular/common';

export interface IArvore {
  id: number,
  name: string,
  typeArvore: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  providers: [ArvoreService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'arvore_angular';
  public arvores: IArvore[] = []

  constructor(private arvoreService: ArvoreService) {
    this.getAll();
  }

public getAll(): void {
  this.arvoreService.getAll().subscribe(arvore => {
    this.arvores = arvore;
  })
}
}
