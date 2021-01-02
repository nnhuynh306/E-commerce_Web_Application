function fetchUpdateProductFind() {
	const message = $('#update-product-message');
	const loading = $('#edit_product_loading_spinner');
	
	loading.append('<div class="spinner-grow text-primary" role="status"> <span class="sr-only">Loading...</span></div><p class="text-primary">Tìm kiếm dữ liệu...</p>');

	fetch ("/admin/edit-product-find", {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
				'product_id': document.querySelector('#product_id').value,
		})
	}).then(
		responseFetch => {
			if (!responseFetch.ok) throw new Error(responseFetch.status);
			return responseFetch.json();
		}
	).then(data => {
		console.log(data);

		message.empty();
		if (jQuery.isEmptyObject(data)) {
			message.append('<div class="alert alert-info text-center" role="alert">Không có kết quả truy vấn trả về</div>');
		}
		else {
			document.querySelector('#product_name_result').value = data.product_name_result;
			document.querySelector('#stock_result').value = data.stock_result
			document.querySelector('#price_result').value = data.price_result
			document.querySelector('#category_result').value = data.category_result
			document.querySelector('#categodyID_result').value = data.categodyID_result
			document.querySelector('#description_result').value = data.description_result
			document.querySelector('#bigImagePath_result').value = data.bigImagePath_result
			document.querySelector('#smallImagePath_result').value = data.smallImagePath_result
			document.querySelector('#id_result').value = data.id_result
		}
	}).catch(error => {
		message.empty();
		message.append('<div class="alert alert-danger text-center" role="alert">Có lỗi xảy ra trong quá trình truy vấn sản phẩm!!</div>');
	}).finally(() => {
		loading.empty();
	})

	return false;
}

function fetchUpdateData() {
	const message = $('#update-product-message');
	const loading = $('#edit_product_loading_spinner');
	
	loading.append('<div class="spinner-grow text-primary" role="status"> <span class="sr-only">Loading...</span></div><p class="text-primary">Cập nhật dữ liệu...</p>');

	fetch ('/admin/edit-product-update', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
				'product_name_result': document.querySelector('#product_name_result').value,
				'stock_result': document.querySelector('#stock_result').value,
				'price_result': document.querySelector('#price_result').value,
				'category_result': document.querySelector('#category_result').value,
				'description_result': document.querySelector('#description_result').value,
				'bigImagePath_result': document.querySelector('#bigImagePath_result').value,
				'smallImagePath_result': document.querySelector('#smallImagePath_result').value,
				'id_result': document.querySelector('#id_result').value,
				'categodyID_result': document.querySelector('#categodyID_result').value,
		})
	}).then(
		responseFetch => {
			if (!responseFetch.ok) throw new Error(responseFetch.status);
			return responseFetch;
		}
	).then(data => {
		message.empty();
		message.append('<div class="alert alert-success text-center" role="alert">chỉnh sửa thành công</div>');
	}).catch(error => {
		message.empty();
		let tempMessage = '<div class="alert alert-danger text-center" role="alert">ERROR:+' +(error) + '</div>';
		message.append(tempMessage);
	}).finally( () => {
		loading.empty();
	})

	return false;
}