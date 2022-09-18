import Header from "../Header/Header";
import banner from "../../assets/img/banner.jpeg"
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { getProductsApi } from "../../service/VintageSoulService";
import ProductCard from "./ProductCard";


export default function Home() {
	const [productList, setProductList] = useState([]);
	const [limit, SetLimit] = useState(1);

	useEffect(() => {
		getProductsApi(limit)
			.catch((res) => {
				alert(res.message);
			})
			.then((res) => {
				setProductList(res.data);
			})
	}, [limit])

	return (
		<>
			<Header/>
			<Banner src={banner} alt="banner"></Banner>
			<WrapperHome>
				<h1>Listando Todos os produtos</h1>
				<Products>
					{productList.map((value, index) => (
						<ProductCard
							key={index}
							id={value._id}
							title={value.title}
							image={value.image}
							genre={value.genre}
							price={value.price}
						/>
					))}
						
				</Products>
			</WrapperHome>

		</>
	);
}

const Banner = styled.img`
	width: 100%;
	height: 280px;
	object-fit: fill;
`
const WrapperHome = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
`
const Products = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 20px;
`
