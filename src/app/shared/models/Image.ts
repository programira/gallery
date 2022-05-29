import { Category } from './Category';
import { Customer } from './Customer';
export interface Image {
    link: string;
    metaData: string;
    customer: Customer;
    category: Category;
    title: string;
}