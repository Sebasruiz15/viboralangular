import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import { User } from './shared/services/user';
import {RouterOutlet} from '@angular/router';
import {TableComponent} from './components/table/table';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

export interface Response {
  codigo: string;
  mensaje: string;
  resultado: UserAccount[];
}

export interface UserAccount {
  codigo: string;
  nombres: string;
  direccion: string;
  documento_identidad: string;
  estado: 'ACTIVO' | 'INACTIVO' | string;
  deuda_total: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    TableComponent,
  ],
  styleUrl: './app.css'
})
export class App implements OnInit {
  formUserInfo!: FormGroup;

  private _fb: FormBuilder = inject(FormBuilder);

  userService = inject(User)

  private _init() {
    this.formUserInfo = this._fb.group({
      document: [null, Validators.required],
      serviceSelected: [null, Validators.required]
    })
  }


  ngOnInit() {
    this._init()
  }

  options = [
    {
      name: 'Servicios',
      value: '1'
    },
    {
      name: 'Atenciones',
      value: '2'
    },
    {
      name: 'Facturas',
      value: '3'
    },
  ]

  user: WritableSignal<UserAccount[]> = signal<UserAccount[]>([])

  getUser(document: string){
    this.userService.getUser(document).subscribe({
      next: (response: Response) => {
        console.log('API Response:', response);
        if (response && response.resultado) {
          this.user.set(response.resultado);
        } else {
          console.warn('Resultado is undefined or null', response);
          this.user.set([]);
        }
      },
      error: (err) => {
        console.error('API Error:', err);
        this.user.set([]);
      }
    })
  }

  getInfo() {
    const document = this.formUserInfo.get('document')?.value
    if (document) {
      this.getUser(document)
    }
  }
}
