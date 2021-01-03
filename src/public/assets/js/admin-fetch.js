$('document').ready(() => {
    $('.input-upload-image').each(function () {
        const hiddenBase64 = $('.hidden-base64-check', this);
        const img =  $('.img', this);
        const input = $('.input-file', this);
        const reader = new FileReader;
        reader.onload = () => {
            const dataURL = reader.result;

            img.attr("src", dataURL);
        }

        input.on("change", () => {
            hiddenBase64.val("1");
            reader.abort();
            reader.readAsDataURL(input.prop('files')[0]);
        });
    });
});

function fetchUpdateProductFind() {
	const message = $('#update-product-message');
	const loading = $('#edit_product_loading_spinner');
	
	loading.append('<div class="spinner-grow text-primary" role="status"> <span class="sr-only">Loading...</span></div><p class="text-primary">Tìm kiếm dữ liệu...</p>');
	document.querySelector('#product_name_result').value = "";
	document.querySelector('#stock_result').value = ""
	document.querySelector('#price_result').value = ""
	document.querySelector('#category_result').value = ""
	document.querySelector('#categodyID_result').value = ""
	document.querySelector('#description_result').value = ""
	document.querySelector('#bigImagePath_result_isbase64').value = 0
	document.querySelector('#bigImagePath_result').src = ""
	document.querySelector('#smallImagePath_result_isbase64').value = 0
	document.querySelector('#smallImagePath_result').src = ""
	document.querySelector('#id_result').value = ""

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
            document.querySelector('#bigImagePath_result_isbase64').value = 0
            document.querySelector('#bigImagePath_result').src = data.bigImagePath_result
            document.querySelector('#smallImagePath_result_isbase64').value = 0
			document.querySelector('#smallImagePath_result').src = data.smallImagePath_result
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
	message.empty();

	fetch ('/admin/edit-product-update', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
				'product_name_result': document.querySelector('#product_name_result').value,
				'stock_result': document.querySelector('#stock_result').value,
				'price_result': document.querySelector('#price_result').value,
				'category_result': document.querySelector('#category_result').value,
                'description_result': document.querySelector('#description_result').value,
                'bigImagePath_result_isbase64': document.querySelector('#bigImagePath_result_isbase64').value,
                'bigImagePath_result': document.getElementById('bigImagePath_result').getAttribute('src'),
                'smallImagePath_result_isbase64': document.querySelector('#smallImagePath_result_isbase64').value,
				'smallImagePath_result': document.getElementById('smallImagePath_result').getAttribute('src'),
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