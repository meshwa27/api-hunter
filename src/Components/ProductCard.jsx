import { Link } from 'react-router-dom';

export default function ProductCard({
    id,  // This will be the index for Sno
    brand,
    category,
    price
}) {
    return (
        <tr data-testid="item">
            <td>{id}</td>  {/* Sno */}
            <td data-testid="brand">
                <Link to={`/products/${id}`}>{brand}</Link> {/* Corrected route */}
            </td>
            <td data-testid="category">{category}</td>
            <td data-testid="price">{price}</td>
        </tr>
    );
}
