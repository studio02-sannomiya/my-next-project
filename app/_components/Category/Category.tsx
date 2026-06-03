import type { Category } from '@/app/_libs/microcms';
import sytles from './Category.module.css';

type Props = {
    category: Category;
}

export default function Category({ category }: Props) {
    return <span className={sytles.tag}>{category.name}</span>
}