import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup ,FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm
  /*
  orderForm = new FormGroup({
    name: new FormControl(''),
    no_telp: new FormControl(''),
    jenis_kertas: new FormControl(''),
    pilih_tinta: new FormControl(''),
    pilih_jilid: new FormControl(''),
    rangkap: new FormControl(''),
    file: new FormControl(''),
    catatan: new FormControl(''),
    jasa_antar: new FormControl(''),
    agreement: new FormControl('')
  }) */
  
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ){ 
    this.orderForm = this.formBuilder.group({
      name: '',
      no_telp: '',
      jenis_kertas: '',
      pilih_tinta: '',
      pilih_jilid: '',
      rangkap: '',
      file: '',
      catatan: '',
      jasa_antar: '',
      agreement: ''
    })
  }
  
  ngOnInit(){
    /*
    this.http.post<any>('https://script.google.com/macros/s/AKfycbxiWfak4ph426U6VCBygZsW18hcdGLP-ySJQWIxyirhGCM8X7k/exec', this.orderForm)
      .subscribe(data => {
        console.log(data.status)
      }) */
  }

  onSubmit(orderData){
    /*
    this.http.post('https://script.google.com/macros/s/AKfycbxiWfak4ph426U6VCBygZsW18hcdGLP-ySJQWIxyirhGCM8X7k/exec', JSON.stringify(this.orderForm.value))
      .subscribe(data => {
        console.log(data)
      })*/
    console.log(orderData)
    this.orderForm.reset()
  }

  /*
  @HostListener('click', ['$event.target'])
  submit(){
    this.http.post('https://script.google.com/macros/s/AKfycbxiWfak4ph426U6VCBygZsW18hcdGLP-ySJQWIxyirhGCM8X7k/exec', JSON.stringify(this.orderForm.value))
      .subscribe(data => {
        console.log(data)
      })
  }*/
}
