var perfume = $("#perfume");
var fashion = $("#fashion");
var skincare = $("#skincare");
var cosmetic = $("#cosmetic");
var all = $("#all");



perfume.click(function()
{
      $("#all").removeClass("active");
      $("#cosmetic").removeClass("active");
      $("#fashion").removeClass("active");
      $("#skincare").removeClass("active");
      element = document.getElementById("perfume");
      element.classList.add("active")
//Sử dụng phương thức Ajax.
  $.ajax({
        type : 'GET', //Sử dụng kiểu gửi dữ liệu POST
        url : '/shop-fullwidth-4col/perfume', //gửi dữ liệu sang trang perfume
        success : function(Product)  // Hàm thực thi khi nhận dữ liệu được từ server
                  { 
                       
                       let parser = new DOMParser();
                       let parsedHtml = parser.parseFromString(Product, 'text/html');
                       $('#sanpham').html(parsedHtml.querySelector("#sanpham"));
                  }
        });
        return false;
  });
cosmetic.click(function()
{
      $("#all").removeClass("active");
      $("#perfume").removeClass("active");
      $("#fashion").removeClass("active");
      $("#skincare").removeClass("active");
      element = document.getElementById("cosmetic");
      element.classList.add("active")
//Sử dụng phương thức Ajax.
  $.ajax({
        type : 'GET', //Sử dụng kiểu gửi dữ liệu POST
        url : '/shop-fullwidth-4col/cosmetic', //gửi dữ liệu sang trang perfume
        success : function(Product)  // Hàm thực thi khi nhận dữ liệu được từ server
                  { 
                       
                       let parser = new DOMParser();
                       let parsedHtml = parser.parseFromString(Product, 'text/html');
                       $('#sanpham').html(parsedHtml.querySelector("#sanpham"));
                  }
        });
        return false;
  });
fashion.click(function()
{
      $("#perfume").removeClass("active");
      $("#cosmetic").removeClass("active");
      $("#all").removeClass("active");
      $("#skincare").removeClass("active");
      element = document.getElementById("fashion");
      element.classList.add("active")
//Sử dụng phương thức Ajax.
  $.ajax({
        
        type : 'GET', //Sử dụng kiểu gửi dữ liệu POST
        url : '/shop-fullwidth-4col/fashion', //gửi dữ liệu sang trang perfume
        success : function(Product)  // Hàm thực thi khi nhận dữ liệu được từ server
                  { 
                       
                       let parser = new DOMParser();
                       let parsedHtml = parser.parseFromString(Product, 'text/html');
                       $('#sanpham').html(parsedHtml.querySelector("#sanpham"));
                  }
        });
        return false;
  });
skincare.click(function()
{
      $("#perfume").removeClass("active");
      $("#cosmetic").removeClass("active");
      $("#fashion").removeClass("active");
      $("#all").removeClass("active");
      element = document.getElementById("skincare");
      element.classList.add("active")
//Sử dụng phương thức Ajax.
  $.ajax({
        type : 'GET', //Sử dụng kiểu gửi dữ liệu POST
        url : '/shop-fullwidth-4col/skincare', //gửi dữ liệu sang trang perfume
        success : function(Product)  // Hàm thực thi khi nhận dữ liệu được từ server
                  { 
                       
                       let parser = new DOMParser();
                       let parsedHtml = parser.parseFromString(Product, 'text/html');
                       $('#sanpham').html(parsedHtml.querySelector("#sanpham"));
                  }
        });
        return false;
  });

  all.click(function()
{
      $("#perfume").removeClass("active");
      $("#cosmetic").removeClass("active");
      $("#fashion").removeClass("active");
      $("#skincare").removeClass("active");
      element = document.getElementById("all");
      element.classList.add("active")
//Sử dụng phương thức Ajax.
  $.ajax({
        type : 'GET', //Sử dụng kiểu gửi dữ liệu POST
        url : '/shop-fullwidth-4col', //gửi dữ liệu sang trang perfume
        success : function(Product)  // Hàm thực thi khi nhận dữ liệu được từ server
                  { 
                       
                       let parser = new DOMParser();
                       let parsedHtml = parser.parseFromString(Product, 'text/html');
                       $('#sanpham').html(parsedHtml.querySelector("#sanpham"));
                  }
        });
        return false;
  });


function az(){
      var here=window.location.href
      here=here.split("/",5)
      var tmp=here[4]
      if(tmp==undefined)
            tmp=""
      $.ajax({
            type : 'GET', //Sử dụng kiểu gửi dữ liệu POST
            url : '/shop-fullwidth-4col/'+tmp+'/az', //gửi dữ liệu sang trang perfume az
            success : function(Product)  // Hàm thực thi khi nhận dữ liệu được từ server
                      { 
                           
                           let parser = new DOMParser();
                           let parsedHtml = parser.parseFromString(Product, 'text/html');
                           $('#sanpham').html(parsedHtml.querySelector("#sanpham"));
                      }
            });
            return false;
};

function za(){
      var here=window.location.href
      here=here.split("/",5)
      var tmp=here[4]
      if(tmp==undefined)
            tmp=""
      $.ajax({
            type : 'GET', //Sử dụng kiểu gửi dữ liệu POST
            url : '/shop-fullwidth-4col/'+tmp+'/za', //gửi dữ liệu sang trang perfume az
            success : function(Product)  // Hàm thực thi khi nhận dữ liệu được từ server
                      { 
                           
                           let parser = new DOMParser();
                           let parsedHtml = parser.parseFromString(Product, 'text/html');
                           $('#sanpham').html(parsedHtml.querySelector("#sanpham"));
                      }
            });
            return false;
};

function high_low(){
      var here=window.location.href
      here=here.split("/",5)
      var tmp=here[4]
      if(tmp==undefined)
            tmp=""
      $.ajax({
            type : 'GET', //Sử dụng kiểu gửi dữ liệu POST
            url : '/shop-fullwidth-4col/'+tmp+'/high_low', //gửi dữ liệu sang trang perfume az
            success : function(Product)  // Hàm thực thi khi nhận dữ liệu được từ server
                      { 
                           
                           let parser = new DOMParser();
                           let parsedHtml = parser.parseFromString(Product, 'text/html');
                           $('#sanpham').html(parsedHtml.querySelector("#sanpham"));
                      }
            });
            return false;
};


function low_high(){
      var here=window.location.href
      here=here.split("/",5)
      var tmp=here[4]
      if(tmp==undefined)
            tmp=""
      $.ajax({
            type : 'GET', //Sử dụng kiểu gửi dữ liệu POST
            url : '/shop-fullwidth-4col/'+tmp+'/low_high', //gửi dữ liệu sang trang perfume az
            success : function(Product)  // Hàm thực thi khi nhận dữ liệu được từ server
                      { 
                           
                           let parser = new DOMParser();
                           let parsedHtml = parser.parseFromString(Product, 'text/html');
                           $('#sanpham').html(parsedHtml.querySelector("#sanpham"));
                      }
            });
            return false;
};


function sortProduct(){

      var tmp = $("#sort").val();
      if(tmp=="az")
            az();
      else if(tmp=="za")
            za();
      else if(tmp=="high_low")
            high_low();
      else if(tmp=="low_high") low_high();
};

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