import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../service/VintageSoulService.js";

export default function ProductPage() {
	const { idProduct } = useParams();
	const [product, setProduct] = useState({});
	useEffect(() => {
		getProduct({idProduct})
			.then((res) => {
				setProduct(res);
			})
			.catch((res) => {
				alert(res.response.data);
			});
	});
	return <p>{product.title}</p>;
}
