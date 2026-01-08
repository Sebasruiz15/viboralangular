import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core'
import {
  ColumnDef,
  createAngularTable,
  FlexRenderDirective,
  getCoreRowModel,
} from '@tanstack/angular-table'
import {UserAccount} from '../../app';

const defaultColumns: ColumnDef<UserAccount>[] = [
  {
    accessorKey: 'documento_identidad',
    header: () => 'Documento',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'codigo',
    header: () => `<span>Código</span>`,
    cell: (info) => `<i>${info.getValue<string>()}</i>`,
  },
  {
    accessorKey: 'nombres',
    header: () => `<span>Nombre Completo</span>`,
    cell: (info) => `<i>${info.getValue<string>()}</i>`,
  },
  {
    accessorKey: 'direccion',
    header: () => 'Dirección',
    cell: (info) => `<i>${info.getValue<string>()}</i>`,
  },
  {
    accessorKey: 'deuda_total',
    header: () => 'Deuda Total',
    cell: (info) => `<i>${info.getValue<string>()}</i>`,
  }
]

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FlexRenderDirective],
  templateUrl: './table.html',
  styleUrl: './table.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  user: InputSignal<UserAccount[]> = input.required<UserAccount[]>()

  table = createAngularTable(() => ({
    data: this.user(),
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
  }))
}
