let spinner = '<div class="spinner-grow text-primary" role="status"> <span class="sr-only">Loading...</span></div>';

var trashError;

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
	
	loading.append(spinner + '<p class="text-primary">Tìm kiếm dữ liệu...</p>');
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
		//console.log(data);

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
	
	loading.append(spinner + '<p class="text-primary">Cập nhật dữ liệu...</p>');
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

function fetchAddProduct() {
	const message = $('#add-product-message');
	const loading = $('#add_product_loading_spinner');
	
	loading.append(spinner + '<p class="text-primary">Thêm mới dữ liệu...</p>');
	message.empty();
	$('#add_product_category_name').val('');
	$('#add_product_id').val('');

	fetch ('/admin/add-product', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
				'product_name': document.querySelector('#product_name').value,
				'stock': document.querySelector('#stock').value,
				'price': document.querySelector('#price').value,
				//'category': document.querySelector('#category').value,
                'description': document.querySelector('#description').value,
                'bigImagePath_isbase64': document.querySelector('#bigImagePath_isbase64').value,
                'bigImagePath': document.getElementById('bigImagePath').getAttribute('src'),
                'smallImagePath_isbase64': document.querySelector('#smallImagePath_isbase64').value,
				'smallImagePath': document.getElementById('smallImagePath').getAttribute('src'),
				
				'categoryid': document.querySelector('#categoryid').value,
		})
	}).then(
		responseFetch => {
			if (!responseFetch.ok) {
				responseFetch.json().then (errorMsg => {
					message.empty();
					let tempMessage = '<div class="alert alert-danger text-center" role="alert">ERROR:+' + errorMsg + '</div>';
					message.append(tempMessage);
				})
			}
			else {
				responseFetch.json().then(data => {
					message.empty();
					message.append('<div class="alert alert-success text-center" role="alert">Thêm sản phẩm thành công</div>');
					$('#add_product_category_name').val(data.catgory_name);
					$('#add_product_id').val(data.id);
				});
			}
		}
	).catch(error => {
		console.log(error.status + ': ' + error.message);
		
	}).finally( () => {
		loading.empty();
	})

	return false;
}