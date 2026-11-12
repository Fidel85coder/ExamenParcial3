import {Component, inject, OnInit} from '@angular/core';
import {NotaService} from './services/nota.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  notaService = inject(NotaService);

  notaForm = new FormGroup({
    titulo: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    contenido: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  ngOnInit(): void {
    this.notaService.cargarNotas();
  }

  guardar(): void {
    if (this.notaForm.invalid) return;

    this.notaService.agregarNota(this.notaForm.getRawValue());
    this.notaForm.reset();
  }
}
