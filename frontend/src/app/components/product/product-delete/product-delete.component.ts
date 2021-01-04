import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService} from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute
    ) {     
    this.product = {
      name: ' ',
      price: 0.0,
    };
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product=>{
      this.product = product;
    });
  }

  deleteProduct(): void {
    this.productService.delete(this.product).subscribe(()=>{
      this.productService.showMessage(`Produto ${this.product.id} excluido com sucesso`);
      this.router.navigate(['/products']);
    });
  }

  cancel(): void{
    this.router.navigate(['/products']);
  }

}
