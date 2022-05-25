import React, { useState } from "react";
import useProducts from "../../../Hooks/useProducts";
import Loading from "../../Shared/Loading/Loading";
import ManageProductsDeleteModal from "./ManageProductsDeleteModal";
import ManageProductsRow from "./ManageProductsRow";

const ManageProducts = () => {
	const [products, isLoading, refetch] = useProducts();
	const [deleteProduct, setDeleteProduct] = useState(null);

	if (isLoading) {
		return <Loading></Loading>;
	}

	return (
		<div>
			<h2>Total Products: {products.length}</h2>
			<div className="overflow-x-auto ">
				<table className="table w-full">
					<thead>
						<tr>
							<th>Srl</th>
							<th>Photo</th>
							<th>Product Name</th>
							<th>Price</th>
							<th>Available</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{products?.map((product, index) => (
							<ManageProductsRow
								product={product}
								key={product._id}
								index={index}
								setDeleteProduct={setDeleteProduct}
							></ManageProductsRow>
						))}
					</tbody>
				</table>
			</div>
			{deleteProduct && (
				<ManageProductsDeleteModal
					deleteProduct={deleteProduct}
					setDeleteProduct={setDeleteProduct}
					refetch={refetch}
				></ManageProductsDeleteModal>
			)}
		</div>
	);
};

export default ManageProducts;
