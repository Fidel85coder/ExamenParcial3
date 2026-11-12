import {Service, inject, WritableSignal, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Nota} from '../models/nota.model';

@Service()
export class NotaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/notas';

  public notas: WritableSignal<Nota[]> = signal<Nota[]>([]);

  public cargarNotas(): void {
    this.http.get<Nota[]>(this.apiUrl).subscribe({
      next: (notas) => {
        this.notas.set(notas);
      },
      error: (err) => {
        console.error('Error al obtener las notas:', err);
      },
    });
  }

  public agregarNota(nuevaNota: Nota): void {
    this.http.post<Nota>(this.apiUrl, nuevaNota).subscribe({
      next: (notaGuardada) => {
        this.notas.update((notas) => [...notas, notaGuardada]);
      },
      error: (err) => {
        console.error('Error al guardar la nota:', err);
      },
    });
  }
}
