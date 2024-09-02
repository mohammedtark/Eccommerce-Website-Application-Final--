import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../interface/product'; // Make sure the path to the interface is correct

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {
  transform(products: product[] | null, term: string): product[] {
    if (!products) return []; // Return an empty array if products is null or undefined
    if (!term) return products; // Return all products if no search term is provided

    term = term.toLowerCase();
    return products.filter((item) => item.title.toLowerCase().includes(term));
  }
}
