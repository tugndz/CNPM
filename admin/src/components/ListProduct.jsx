import React, { useEffect, useState } from 'react';
import { TbTrash } from 'react-icons/tb';

const ListProduct = () => {
    const [allproducts, setAllproducts] = useState([]);

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproducts')
            .then((res) => res.json())
            .then((data) => { setAllproducts(data) });
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    const remove_product = async (id) => {
        await fetch('http://localhost:4000/removeproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id })
        });
        await fetchInfo();
    }

    // Calculate total quantities by category
    const totalQuantities = allproducts.reduce((totals, product) => {
        const quantity = parseInt(product.quantity, 10); // Ensure quantity is an integer
        if (totals[product.category]) {
            totals[product.category].quantity += quantity;
            totals[product.category].count += 1; // Increment count for each item in the category
        } else {
            totals[product.category] = {
                quantity: quantity,
                count: 1 // Initialize count for the category
            };
        }
        return totals;
    }, {});
    const formatDate = (dateString) => {
        const options = {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            hour12: false
        };
        return new Date(dateString).toLocaleString('vi-VN', options);
    }

    return (
        <div className='p-2 box-border bg-white mb-0 rounded-sm w-full mt-5 lg:ml-5'>
            <h4 className='bold-22 p-5 uppercase'>Danh sách sản phẩm</h4>
            <div className='max-h-[77vh] overflow-auto px-4 text-center'>
                <table className='w-full mx-auto'>
                    <thead>
                        <tr className='bg-primary bold-14 sm:regular-22 text-start py-12'>
                            <th className='p-2'>Sản phẩm</th>
                            <th className='p-2'>Tên</th>
                            <th className='p-2'>Gía cũ</th>
                            <th className='p-2'>Gía mới</th>
                            <th className='p-2'>Loại</th>
                            <th className='p-2'>Số lượng</th>
                            <th className='p-2'>Ngày</th>
                            <th className='p-2'>Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allproducts.map((product, i) => (
                            <tr key={i} className='border-b border-slate-900/20 text-gray-20 p-6 medium-14'>
                                <td className='flexCenter my-2'>
                                    <img src={product.image} alt="" height={55} width={55} className='rounded-lg ring-1 ring-slate-900/5' />
                                </td>
                                <td><div className='line-clamp-3'>{product.name}</div></td>
                                <td>${product.old_price}.00</td>
                                <td>${product.new_price}.00</td>
                                <td>{product.category}</td>
                                <td>{product.quantity}</td>
                                <td>{formatDate(product.date)}</td>
                                <td><div className='bold-22 pl-6 sm:pl-14'><TbTrash onClick={() => remove_product(product.id)} /></div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h4 className='bold-22 p-5 uppercase'>Tổng số lượng sản phẩm theo loại</h4>
            <div className='max-h-[77vh] overflow-auto px-4 text-center'>
                <table className='w-full mx-auto'>
                    <thead>
                        <tr className='bg-primary bold-14 sm:regular-22 text-start py-12'>
                            <th className='p-2'>Loại</th>
                            <th className='p-2'>Tổng số lượng</th>
                            <th className='p-2'>Số lần thêm</th> {/* New column for item count */}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(totalQuantities).map(([category, { quantity, count }], i) => (
                            <tr key={i} className='border-b border-slate-900/20 text-gray-20 p-6 medium-14'>
                                <td className='p-2'>{category}</td>
                                <td className='p-2'>{quantity}</td>
                                <td className='p-2'>{count}</td> {/* Render count for the category */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListProduct;
