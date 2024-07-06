const state = {
    stockDetails : [
		{
			itemNumber: 1,
			itemName : "Phones",
			itemPrice : 230000,
			itemQuantity : 30,
			itemImage: '../images/rahul-chakraborty-xsGxhtAsfSA-unsplash.jpg'
		},
		{
			itemNumber: 27466,
			itemName : "Laptops",
			itemPrice : 45000,
			itemQuantity : 4,
			itemImage: '../images/kari-shea-1SAnrIxw5OY-unsplash.jpg'
		},
		{
			itemNumber: 27466,
			itemName : "Headphones",
			itemPrice : 2900,
			itemQuantity : 4,
			itemImage: '../images/c-d-x-PDX_a_82obo-unsplash.jpg '
		},
		{
			itemNumber: 27466,
			itemName : "Earpods",
			itemPrice : 6500,
			itemQuantity : 4,
			itemImage: '../images/nayris-aquino-IUoeSXRyFEQ-unsplash.jpg'
		},
		{
			itemNumber: 27466,
			itemName : "Tablets",
			itemPrice : 16000,
			itemQuantity : 4,
			itemImage: '../images/daniel-romero-SunArYzXUlI-unsplash.jpg'
		},
		{
			itemNumber: 27466,
			itemName : "Smart watchs",
			itemPrice : 5500,
			itemQuantity : 4,
			itemImage: '../images/daniel-korpai-hbTKIbuMmBI-unsplash.jpg'
		}
		],
}
const getters = {
	stock: (state) => state.stockDetails,
}
const actions = {

}
const mutations = {

}
export default {
	state,
	getters,
	actions,
	mutations
}