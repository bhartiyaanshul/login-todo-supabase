import React, { useEffect, useState } from 'react'
import './ProductManager.css'

const ProductManager = () => {
    const [products, setProducts] = useState([{
        id: 1,
        name: 'Product 1',
        price: 100,
        specification: 'Product 1 specification'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 100,
        specification: 'Product 2 specification'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 100,
        specification: 'Product 3 specification'
    },

])
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [specification, setSpecification] = useState('')
    const [selectedId, setSelectedId] = useState(0)

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handlePriceChange(event) {
        setPrice(event.target.value)
    }

    function handleSpecificationChange(event) {
        setSpecification(event.target.value)
    }

    function handleAddProduct() {
        setProducts((val) => {
            return [...val, { id: val.length + 1, name: name, price: price, specification: specification }]
        })
        setName('')
        setPrice(0)
        setSpecification('')
    }

    function handleDeleteProduct(id) {
        setProducts((val) => {
            return val.filter((product) => {
                return product.id !== id
            })
        })
    }

    useEffect(() => {
        console.log(name, price, specification)
    }, [name, price, specification])

    function handleEditProduct(id) {
        let product = products.find((product) => {
            return product.id === id
        })
        setName(product.name)
        setPrice(product.price)
        setSpecification(product.specification)
        setSelectedId(id)
    }

    function onEditProduct(id) {
        setProducts((val) => {
            return val.map((product) => {
                if (product.id === id) {
                    return { id: id, name: name, price: price, specification: specification }
                } else {
                    return product
                }
            })
        })
        setSelectedId(0)
        setName('')
        setPrice(0)
        setSpecification('')
    }


    return (
        <div className='product-management-application'>
            <div className='product-grid'>
                {
                    products.map((product, index) => {
                        return (
                            <div key={index} className='product-card'>
                                <div>{product.name}</div>
                                <div>{product.price}</div>
                                <div>{product.specification}</div>
                                <div className='product-actions'>
                                    <button className='button edit' onClick={() => handleEditProduct(product.id)}>Edit</button>
                                    <button className='button delete' onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='product-add-container'>
                <input type='text' placeholder='Name' value={name} onChange={handleNameChange} />
                <input type='number' placeholder='Price' value={price} onChange={handlePriceChange} />
                <input type='text' placeholder='Specification' value={specification} onChange={handleSpecificationChange} />
                {
                    selectedId === 0 ?
                        <button className='button add' onClick={handleAddProduct}>Add</button> :
                        <button className='button edit' onClick={() => onEditProduct(selectedId)}>Edit</button>
                }
            </div>
        </div>
    )
}

export default ProductManager