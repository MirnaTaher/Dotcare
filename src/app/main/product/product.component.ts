import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Product {
  name: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  ngSelectWarehouse="warehouse1";
  ngSelectType="type1"
  ngRadio ="all"
  // chip
  separatorKeysCodes: number[] = [ENTER, COMMA];
  prodCtrl = new FormControl();
  filteredProducts: Observable<string[]>;
  products: string[] = ['Product 1'];
  allProducts: string[] = ['Product 1', 'Product 2', 'Product 3'];

  productForm: FormGroup;
  @ViewChild('productInput') productInput: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder) {
    this.filteredProducts = this.prodCtrl.valueChanges.pipe(
      startWith(null),
      map((product: string | null) =>
        product ? this._filter(product) : this.allProducts.slice()
      )
    );
  }
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm(): void {
    this.productForm = this.fb.group({
      warehouse: new FormControl({value: '', disabled: false}, Validators.required),
      type: new FormControl({value: '', disabled: true}, Validators.required),
      balance: new FormControl({value: false, disabled: true}),
      classification: new FormControl({value: '', disabled: true}),
      products:  new FormControl({value: this.products, disabled: true}),
    });
  }
  onSubmit(){
    console.log(this.productForm)
  }
  selectWarehouse(event){
    this.productForm.patchValue({
      warehouse: event.target.value
    })
  }
  selectType(event){
    this.productForm.patchValue({
      type: event.target.value
    })
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our product
    if (value) {
      this.products.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.prodCtrl.setValue(null);
  }

  remove(product: string): void {
    const index = this.products.indexOf(product);

    if (index >= 0) {
      this.products.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.products.push(event.option.viewValue);
    this.productInput.nativeElement.value = '';
    this.prodCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allProducts.filter((product) =>
      product.toLowerCase().includes(filterValue)
    );
  }
}
