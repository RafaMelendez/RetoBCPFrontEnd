import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AlertModalService } from 'src/app/service/alert-modal/alert-modal.service';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { COLUMNS_TABLE_USUARIO } from 'src/app/shared/config-tables/columns-table-usuario';
import { SweetAlertTypeEnum } from 'src/app/shared/enum/sweet-alert-type.enum';
import { UsuarioRequest } from 'src/app/shared/model/usuario/request/usuario.request';
import { UsuarioModel } from 'src/app/shared/model/usuario/usuario.model';
import { FormsComponent } from '../components/forms.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit  {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = COLUMNS_TABLE_USUARIO;
  dataSource = new MatTableDataSource<UsuarioRequest>([]);

  public loadingTable = false;

  private unsubscribe$ = new Subject<void>();

  constructor(
    public dialog: MatDialog,
    private alerModalService: AlertModalService,
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }
  ngAfterViewInit(): void {
    this.settingTable();
  }
  ngOnDestroy(): void {
    this.unsubscribe$.complete();
    this.unsubscribe$.unsubscribe();
  }
  settingTable(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  refreshTable(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.dataSource.data = [];
    this.loadingTable = true;
    this.usuarioService
      .getListUsuario()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(list => {
        this.loadingTable = false;
        if (list.length > 0) {
          console.log(list);
          this.dataSource.data = list;
        }
      });
  }
  editUsuario(rowId): void {
    const dialogRef = this.dialog
      .open(FormsComponent, {
        data: {
          id: rowId
        },
        width: '550px', height: '470px', disableClose: true
      })
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(success => {
        if (success) {
          this.refreshTable();
        }
      });
  }
  addUsuario(): void{
    const dialogRef = this.dialog.open(FormsComponent, {
      width: '550px', height: '470px', disableClose: false
    })
    .afterClosed()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(success => {
      if (success) {
        this.refreshTable();
      }
    });
  }
  eliminarUsuario(row: UsuarioModel): void {
    this.usuarioService
      .deleteUsuario(row.id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(success => {
        if (success) {
          this.alerModalService.alert(SweetAlertTypeEnum.success, `El elemento ${row.nombre} fue eliminado con éxito.`);
          this.refreshTable();
        }
      });
  }
}
