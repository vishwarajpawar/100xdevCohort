import { useState } from 'react'

import './App.css'

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function FilterTableProductsTable({products}){

  const [filterText, setFilterText] = useState('');
  const [inStockedOnly, setInStockedOnly] = useState(false);
  return(
    <div>
      <SearchBar
      filterText = {filterText}
      inStockedOnly = {inStockedOnly}
      onFilterTextChange = {setFilterText}
      onInStockedOnlyChange = {setInStockedOnly}
      />
      <ProductTable products={products}
      filterText = {filterText}
      inStockedOnly = {inStockedOnly}
      />
    </div>
  )
}

function ProductCategoryRow({category}){
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  )
}
function ProductRow({product}){
  const name = product.stocked ? product.name: <span style={{ color:'red'}}>
    {product.name}
  </span>;
  return(
    <tr>
    <td>{name}</td>
    <td>{product.price}</td>
    </tr>
  )

}

function ProductTable({ products, inStockedOnly, filterText })
{
  
  const rows = [];
  let lastCategory = null;

  products.forEach(product => {

      if( product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
      {
        return;
      }

      if(inStockedOnly && !product.stocked){
        return; 
      }

      if(lastCategory !== product.category){
        rows.push(<ProductCategoryRow category={product.category}
        key ={product.category}
        />);
      } 

      rows.push(
        <ProductRow product={product}
        key={product.name}/>
      );

      lastCategory = product.category;
  });

 return(
  <table>
    <tr>
    <th>
      Name
    </th>
    <th>
      Price
    </th>
    </tr>
    <tr>
      {rows}
    </tr>
  </table>
 );
}

function SearchBar({filterText, inStockedOnly, onFilterTextChange, onInStockedOnlyChange}){
  return(
    <form >
      <input type="text" 
      value={filterText}
      onChange = {(e) => onFilterTextChange(e.target.value)}
      />
      <label htmlFor="">
        <input type="checkbox"
        checked={inStockedOnly}
        onChange={(e) => onInStockedOnlyChange(e.target.value)}
        />
        {' '} 
        Only show products in stock
      </label>
    </form>
  )
}



function App() {
  return <FilterTableProductsTable products={PRODUCTS}/>;
}

export default App
