import * as momentTimezone from 'moment-timezone';
import * as moment from 'moment';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
// import { Global } from '@global/constants';
import { Injectable } from '@angular/core';
import { Global } from 'src/app/global/constants';

export class UtilHelper {
  public static timezone = 'America/Lima';
  public static EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  public static EXCEL_EXTENSION = '.xlsx';

  /**
   * Parsear formatos de fecha en lectura de api para backend
   * @param date Valor a ser parseado
   * @param format Formato de la fecha de entrada (Opcional)
   */
  public static parseUTCDate(date: string | Date, format?: string): Date {
    format = format || Global.FORMAT_DATE_API;
    let valueConverted: Date = null;
    if (momentTimezone(date, format).isValid()) {
      // tslint:disable-next-line: deprecation
      date = momentTimezone(date).subtract('hours', 0).toDate();
      valueConverted = momentTimezone(date, format).toDate();
    }
    return valueConverted;
  }
  /**
   * Parsear formato de fechas para envio de datos al backend
   * @param date Fecha de a ser aprseada
   */
  public static parseUTCDateToString(date: Date): string {
    let valueConverted: string = null;
    if (momentTimezone(date).isValid()) {
      // tslint:disable-next-line: deprecation
      date = momentTimezone(date).add('hours', -5).toDate();
      valueConverted = momentTimezone(date).toISOString();
    }
    return valueConverted;
  }

  public static getStringToday(): string {
    return moment().format(Global.FORMAT_DATE_SHORT);
  }

  public static parseDateStringToShort(dateStr: string): string {
    return moment(dateStr, Global.FORMAT_DATE_API).format(Global.FORMAT_DATE_SHORT);
  }

  /**
   * parse to: DD/MM/YYYY
   */
  public static parseDateToShortString(dateStr: Date): string {
    let result = null;
    if (dateStr.toString() !== 'Invalid Date') {
      result = moment(dateStr).format(Global.FORMAT_DATE_SHORT);
    }
    return result;
  }
  public static getClientTimeZone(): number {
    return (new Date().getTimezoneOffset() / 60);
  }

  /**
   * Compare any element and validate if is undefined or null or empty
   * @param value value to analize
   */
  public static isNullOrEmpty(value: any): boolean {
    return value === undefined || value === null || value.toString().trim() === '';
  }

  /**
   * Compare any element and validate if is undefined or null or empty
   * @param value value to analize
   */
  public static isNullOrArrayEmpty(value: any): boolean {
    return value === undefined || value === null || value.length === 0;
  }

  /**
   * Compare any element and validate if is undefined or null or empty
   * @param value value to analize
   */
  public static isDateNullOrInvalid(value: Date): boolean {
    return value === undefined || value === null || value.toString() === '' || value.toString() === 'Invalid Date';
  }

  public static saveAsExcel(data: any, filename: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const myBlob = new Blob([data], { type: 'application/vnd.oasis.opendocument.spreadsheet' });
      const downloadUrl = URL.createObjectURL(myBlob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = filename;
      a.click();
      resolve(true);
    });

  }
  /**
   * Obtiene la extension del archivo
   * @param fileName Nombre del fichero
   */
  public static getExtensionFileName(fileName: string): string {
    let resultExtension = '.err';
    const uncouple = fileName.split('.');
    if (uncouple && uncouple.length > 1) {
      resultExtension = uncouple[uncouple.length - 1];
    }
    return resultExtension.toLowerCase();
  }

  public static getJsDateStrFromExcel(excelDate: any): string {
    return new Date(((excelDate - 1) - (25567 + 1)) * 86400 * 1000).toLocaleDateString('es-pe', { timeZone: 'UTC', day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  public static getJsDateFromExcel(excelDate: any): Date {
    return new Date(((excelDate - 1) - (25567 + 1)) * 86400 * 1000);
  }

  /**
   * Exporta una lista en formato excel
   * @paramjson lista a exportar
   * @paramexcelFileName nombre de archivo
   */
  public static exportJsonToExcel(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  public static saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: UtilHelper.EXCEL_TYPE });
    FileSaver.saveAs(data, `${fileName}.xlsx`);
  }

  /**
   * Validacion para ficheros con extension: xlsx
   * @param fileName Nombre del fichero
   */
  public static validateExcelFileExtension(fileName: string): boolean {
    const extension = this.getExtensionFileName(fileName);
    return extension === 'xlsx' || extension === 'xls';
  }

  public static forceValueToString(value: any): string {
    if (typeof(value) !== 'string') {
      value = JSON.stringify(value);
    }
    return value;
  }

  public static textToUpperOrEmpty(text: string | number): string {
    let result = '';
    if (text !== undefined && text !== null) {
      result = `${text}`.toUpperCase();
    }
    return result;
  }

}
