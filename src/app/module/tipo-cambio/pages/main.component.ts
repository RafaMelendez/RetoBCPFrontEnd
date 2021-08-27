import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AlertModalService } from 'src/app/service/alert-modal/alert-modal.service';
import { TipoCambioService } from 'src/app/service/tipo-cambio/tipo-cambio.service';
import { COLUMNS_TABLE_TIPO_CAMBIO } from 'src/app/shared/config-tables/columns-table-tipo-cambio';
import { SweetAlertTypeEnum } from 'src/app/shared/enum/sweet-alert-type.enum';
import { TipoCambioRequest } from 'src/app/shared/model/tipo-cambio/request/tipo-cambio.request';
import { TipoCambioModel } from 'src/app/shared/model/tipo-cambio/tipo-cambio';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit  {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  monedaModel : any[];
  modelFiltro :any = {};
  modelResultado :any = {};
  msgAlerta :string ="";
  resultadoFlag : boolean = false;
  displayedColumns: string[] = COLUMNS_TABLE_TIPO_CAMBIO;
  dataSource = new MatTableDataSource<TipoCambioModel>([]);
  public loadingTable = false;

  private unsubscribe$ = new Subject<void>();
  constructor(
    public dialog: MatDialog,
    private alerModalService: AlertModalService,
    private tipoCambioService: TipoCambioService,
  ) { }

  ngOnInit(): void {
    this.obtenerTiposMonedas();
    this.obtenerTiposCambios();
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
    this.obtenerTiposCambios();
  }
  obtenerTiposMonedas(): void {
    this.monedaModel = [];
    this.loadingTable = true;
    this.tipoCambioService
      .getListTipoMonedas()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(list => {
        this.loadingTable = false;
        if (list.length > 0) {
          console.log(list);
          this.monedaModel = list;
        }
      });
  }
  obtenerTiposCambios(): void {
    this.dataSource.data = [];
    this.loadingTable = true;
    this.tipoCambioService
      .getListTipoCambios()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(list => {
        this.loadingTable = false;
        if (list.length > 0) {
          console.log(list);
          this.dataSource.data = list;
        }
      });
  }
  calcular(){
    if(this.validar()){
      this.tipoCambioService
      .consultarTipoCambio(this.modelFiltro)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(item => {
        this.loadingTable = false;
        if (item != null  || item != undefined) {
          console.log(item);
          this.modelResultado = item;
          this.resultadoFlag = true;
         
        }
      });
    }
    else{
      this.alerModalService.alert(SweetAlertTypeEnum.warning, this.msgAlerta);
    }
 

  }
  validar(){
    this.msgAlerta = "";
    if(isNaN(parseInt(this.modelFiltro.Monto))){
      this.msgAlerta = this.msgAlerta+ " * Monto no numerico.";
    }
    if(parseInt(this.modelFiltro.MonedaOrigen) == parseInt(this.modelFiltro.MonedaDestino)){
      this.msgAlerta = this.msgAlerta +" * Monedas iguales.";
    }
   
    return this.msgAlerta.length > 0 ? false: true;
  }
}
