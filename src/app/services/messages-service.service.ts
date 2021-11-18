import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessagesServiceService {

  constructor() { }



public sendErrorMessage(message: string) {

  Swal.fire({
    title: 'Error!',
    text: message,
    icon: 'error',
    confirmButtonText: 'Ok'
  })

}


public sendSuccessMessage(message: string) {

  Swal.fire({
    title: 'Sucesso',
    text: message,
    icon: 'success',
    confirmButtonText: 'Ok'
  })

}


public sendWarningMessage(message: string) {

  Swal.fire({
    title: 'Atenção',
    text: message,
    icon: 'warning',
    confirmButtonText: 'Ok'
  })

}
}